import { useCallback } from "react";
import { useTransitionRouter } from "./router";
import { isModifiedEvent } from "../utils";
import { LocaleLink } from "@/i18n/navigation";

export function TransitionLink(props: React.ComponentProps<typeof LocaleLink>) {
  const router = useTransitionRouter();
  const { href, as, replace, scroll, onClick: propOnClick } = props;

  const onClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      propOnClick?.(e);
      if (!e.defaultPrevented && !isModifiedEvent(e)) {
        e.preventDefault();
        const method = replace ? router.replace : router.push;
        method((as || href) as string, { scroll: scroll ?? true });
      }
    },
    [propOnClick, href, as, replace, scroll, router.replace, router.push]
  );

  return <LocaleLink {...props} onClick={onClick} />;
}