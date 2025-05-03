"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { TransitionRouter } from "@/context/TransitionContext";
import { PopupProvider } from "@/context/PopupContext";
import { ROUTE_TRANSLATE } from "@/constants";
import { useTranslations } from "next-intl";

type Props = {
  children: React.ReactNode;
};

// Утилита для обработки пути
const normalizePath = (path: string | null | undefined): keyof typeof ROUTE_TRANSLATE => {
  return (path?.replace(/^\//, "") || "not-found") as keyof typeof ROUTE_TRANSLATE;
};

// Анимация при уходе
const handleLeaveAnimation = (
  firstLayer: React.RefObject<HTMLDivElement>,
  secondLayer: React.RefObject<HTMLDivElement>,
  textRef: React.RefObject<HTMLDivElement>,
  onComplete: () => void
) => {
  return gsap
    .timeline({ onComplete })
    .fromTo(
      firstLayer.current,
      { y: "100%" },
      {
        y: 0,
        duration: 0.5,
        ease: "circ.inOut",
      }
    )
    .fromTo(
      secondLayer.current,
      { y: "100%" },
      {
        y: 0,
        duration: 0.5,
        ease: "circ.inOut",
      },
      "<50%"
    )
    .fromTo(
      textRef.current,
      { y: "100%", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "circ.out",
      },
      "<0.5"
    );
};

// Анимация при входе
const handleEnterAnimation = (
  firstLayer: React.RefObject<HTMLDivElement>,
  secondLayer: React.RefObject<HTMLDivElement>,
  textRef: React.RefObject<HTMLDivElement>,
  onComplete: () => void
) => {
  return gsap
    .timeline({ onComplete })
    .to(textRef.current, {
      y: "-100%",
      opacity: 0,
      duration: 0.5,
      ease: "circ.in",
    })
    .to(
      secondLayer.current,
      {
        y: "-100%",
        duration: 0.5,
        ease: "circ.inOut",
      },
      "<"
    )
    .to(
      firstLayer.current,
      {
        y: "-100%",
        duration: 0.5,
        ease: "circ.inOut",
      },
      "<50%"
    );
};

export function Providers({ children }: Props) {
  const t = useTranslations();
  const firstLayer = useRef<HTMLDivElement | null>(null);
  const secondLayer = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const [currentPathName, setCurrentPathName] = useState<keyof typeof ROUTE_TRANSLATE>();

  return (
    <PopupProvider>
      <TransitionRouter
        auto={true}
        leave={(next, from, to) => {
          const normalizedPath = normalizePath(to);
          setCurrentPathName(normalizedPath);
          console.log(to , 'to')
          console.log(normalizedPath , 'normalizedPath')
          const animation = handleLeaveAnimation(firstLayer, secondLayer, textRef, next);
          return () => animation.kill();
        }}
        enter={(next) => {
          const animation = handleEnterAnimation(firstLayer, secondLayer, textRef, next);
          return () => animation.kill();
        }}
      >
        <main>{children}</main>

        <div ref={firstLayer} className="fixed inset-0 z-50 translate-y-full bg-AccentDark" />
        <div
          ref={secondLayer}
          className="fixed inset-0 z-50 translate-y-full bg-[#171717] flex items-center justify-center"
        >
          <div
            ref={textRef}
            className="text-white text-5xl font-extrabold opacity-0 font-press uppercase x:text-2xl md:text-3xl"
          >
            {t(ROUTE_TRANSLATE[currentPathName || "not-found"])}
          </div>
        </div>
      </TransitionRouter>
    </PopupProvider>
  );
}
