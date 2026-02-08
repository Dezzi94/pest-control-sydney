import { useEffect, useRef, useState } from "react";

interface UseCountUpOptions {
  /** Animation duration in milliseconds. Defaults to 2000. */
  duration?: number;
  /** Number of decimal places. Defaults to 0. */
  decimals?: number;
}

/**
 * Formats a number with commas and fixed decimal places.
 * e.g. formatNumber(10000, 0) → "10,000"
 * e.g. formatNumber(4.9, 1) → "4.9"
 */
function formatNumber(value: number, decimals: number): string {
  const fixed = value.toFixed(decimals);
  const [intPart, decPart] = fixed.split(".");
  const withCommas = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return decPart !== undefined ? `${withCommas}.${decPart}` : withCommas;
}

/**
 * easeOutExpo easing function.
 * Starts fast, decelerates towards the end.
 */
function easeOutExpo(progress: number): number {
  return progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
}

/**
 * Animated number counter hook using requestAnimationFrame.
 *
 * Uses IntersectionObserver to trigger once when element enters viewport.
 * Respects prefers-reduced-motion: shows final value immediately.
 *
 * @example
 * const { ref, displayValue } = useCountUp(10000, { duration: 2000 });
 * return <span ref={ref}>{displayValue}</span>;
 */
export function useCountUp(
  target: number,
  options?: UseCountUpOptions
): { ref: React.RefObject<HTMLSpanElement>; displayValue: string } {
  const { duration = 2000, decimals = 0 } = options ?? {};
  const ref = useRef<HTMLSpanElement>(null);
  const [displayValue, setDisplayValue] = useState(() =>
    formatNumber(0, decimals)
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect prefers-reduced-motion
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) {
      setDisplayValue(formatNumber(target, decimals));
      return;
    }

    let animationFrameId: number | undefined;
    let hasTriggered = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          hasTriggered = true;
          observer.unobserve(el);

          const startTime = performance.now();

          function animate(currentTime: number) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeOutExpo(progress);
            const currentValue = easedProgress * target;

            setDisplayValue(formatNumber(currentValue, decimals));

            if (progress < 1) {
              animationFrameId = requestAnimationFrame(animate);
            } else {
              // Ensure final value is exact
              setDisplayValue(formatNumber(target, decimals));
            }
          }

          animationFrameId = requestAnimationFrame(animate);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (animationFrameId !== undefined) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [target, duration, decimals]);

  return { ref, displayValue };
}
