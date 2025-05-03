import { createContext, ReactNode, use, useCallback, useEffect, useMemo, useRef, useState } from "react";
import delegate, { DelegateEvent } from "delegate-it";
import { usePathname, useRouter } from "@/i18n/navigation";
import { NavigateOptions } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { isModifiedEvent } from "../utils";

export type Stage = "leaving" | "entering" | "none";

export type TransitionCallback = (
  next: () => void,
  from?: string,
  to?: string
) => Promise<(() => void) | void> | ((() => void) | void);

export interface TransitionRouterProps {
  children: ReactNode;
  leave?: TransitionCallback;
  enter?: TransitionCallback;
  auto?: boolean;
}

const TransitionRouterContext = createContext<{
  stage: Stage;
  push: (href: string, options?: NavigateOptions) => void;
  replace: (href: string, options?: NavigateOptions) => void;
  back: () => void;
  isReady: boolean;
}>({
  stage: "none",
  push: () => {},
  replace: () => {},
  back: () => {},
  isReady: false,
});

export function TransitionRouter({
  children,
  leave = async next => next(),
  enter = async next => next(),
  auto = false,
}: TransitionRouterProps) {
  const router = useRouter();
  const pathname = usePathname();

  const [stage, setStage] = useState<Stage>("none");
  const leaveRef = useRef<(() => void) | void | null>(null);
  const enterRef = useRef<(() => void) | void | null>(null);

  const removeLocale = useCallback((path: string) => {
    return path?.replace(/^\/[a-z]{2}(\/|$)/, "/") || path;
  }, []);

  const normalizeHref = useCallback(
    (href: string) => {
      const url = new URL(href, window.location.origin);
      url.pathname = removeLocale(url.pathname);
      return url.toString().replace(window.location.origin, "");
    },
    [removeLocale]
  );

  const push = useCallback(
    async (href: string, options?: NavigateOptions) => {
      const cleanedHref = normalizeHref(href);
      const currentPathWithoutLocale = removeLocale(pathname);
      const targetPathWithoutLocale = removeLocale(new URL(cleanedHref, window.location.origin).pathname);

      // Пропускаем анимацию для одинаковых путей (без локали)
      if (currentPathWithoutLocale === targetPathWithoutLocale) {
        return router.push(href, options);
      }

      if (stage === "leaving") return;
      setStage("leaving");

      // Передаем оригинальные пути (с локалями) в анимацию
      leaveRef.current = await leave(() => router.push(cleanedHref, options), pathname, cleanedHref);
    },
    [leave, router, stage, pathname, normalizeHref, removeLocale]
  );

  const replace = useCallback(
    (href: string, options?: NavigateOptions) => {
      router.replace(href, options);
    },
    [router]
  );

  const back = useCallback(() => {
    router.back();
  }, [router]);

  const scrollToAnchor = useCallback((hash: string) => {
    const id = hash.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Обновляем URL без перезагрузки страницы
      history.pushState(null, '', hash);
    }
  }, []);

  const handleClick = useCallback(
    async (event: DelegateEvent<MouseEvent>) => {
      const anchor = event.delegateTarget as HTMLAnchorElement;
      const href = anchor?.getAttribute("href");
      const ignore = anchor?.getAttribute("data-transition-ignore");

      if (!href?.startsWith("/") && !href?.startsWith("#")) return;

      const cleanedHref = normalizeHref(href);
      const currentPathWithoutLocale = removeLocale(pathname);
      const targetPathWithoutLocale = removeLocale(new URL(cleanedHref, window.location.origin).pathname);
      const isAnchorLink = href.startsWith("#") || new URL(href, window.location.origin).hash;

      if (ignore) return;

      // Обработка якорных ссылок на текущей странице
      if (isAnchorLink && targetPathWithoutLocale === currentPathWithoutLocale) {
        event.preventDefault();
        
        // Запускаем анимацию выхода
        setStage("leaving");
        const cleanup = await leave(() => {
          // После анимации выхода, через 3 секунды выполняем плавную прокрутку
          setTimeout(() => {
            if (href.startsWith("#")) {
              scrollToAnchor(href);
            } else {
              const hash = new URL(href, window.location.origin).hash;
              if (hash) {
                scrollToAnchor(hash);
              }
            }
            // Запускаем анимацию входа
            setStage("entering");
          }, 1500);
        }, pathname, normalizeHref(href));
        
        if (typeof cleanup === "function") {
          leaveRef.current = cleanup;
        }
        return;
      }

      // Обычный переход между страницами
      if (
        targetPathWithoutLocale !== currentPathWithoutLocale &&
        anchor.target !== "_blank" &&
        !isModifiedEvent(event)
      ) {
        event.preventDefault();
        push(href);
      }
    },
    [push, pathname, normalizeHref, removeLocale, leave, scrollToAnchor]
  );

  useEffect(() => {
    if (!auto) return;
    const controller = new AbortController();
    delegate("a[href]", "click", handleClick, { signal: controller.signal });
    return () => controller.abort();
  }, [auto, handleClick]);

  const entering = useCallback(async () => {
    if (typeof leaveRef.current === "function") leaveRef.current();
    leaveRef.current = null;
    enterRef.current = await Promise.resolve(enter(() => setStage("none")));
  }, [leaveRef.current, enterRef.current, setStage, enter]);

  useEffect(() => {
    if (stage === "entering") {
      entering();
    }
  }, [stage, enter, entering,leaveRef.current]);

  useEffect(() => {
    return () => {
      if (stage === "leaving") {
        if (typeof enterRef.current === "function") enterRef.current();
        enterRef.current = null;
        setStage("entering");
      }
    };
  }, [stage, pathname]);

  const value = useMemo(
    () => ({
      stage,
      push,
      replace,
      back,
      isReady: stage !== "entering",
    }),
    [stage, push, replace, back]
  );

  return <TransitionRouterContext.Provider value={value}>{children}</TransitionRouterContext.Provider>;
}

export function useTransitionState() {
  return use(TransitionRouterContext);
}
