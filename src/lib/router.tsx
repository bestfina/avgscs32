import { useMemo } from "react";
import { useTransitionState } from "../context/TransitionContext";

export function useTransitionRouter() {
  const { push, replace, back, isReady } = useTransitionState();
  return useMemo(() => ({ push, replace, back, isReady }), [push, replace, back, isReady]);
}