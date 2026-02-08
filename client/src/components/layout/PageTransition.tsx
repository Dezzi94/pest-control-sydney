import { useEffect, useState, useRef, type ReactNode } from "react";
import { useLocation } from "wouter";

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const [location] = useLocation();
  const [transitionClass, setTransitionClass] = useState("page-entered");
  const prevLocation = useRef(location);
  const prefersReducedMotion = useRef(false);

  // Check reduced motion preference once on mount
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    prefersReducedMotion.current = mq.matches;
    const handler = (e: MediaQueryListEvent) => {
      prefersReducedMotion.current = e.matches;
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (location === prevLocation.current) return;
    prevLocation.current = location;

    if (prefersReducedMotion.current) return;

    setTransitionClass("page-entering");

    const timer = setTimeout(() => {
      setTransitionClass("page-entered");
    }, 50);

    return () => clearTimeout(timer);
  }, [location]);

  return <div className={transitionClass}>{children}</div>;
}
