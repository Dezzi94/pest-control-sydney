import { useEffect, useState, useRef, useCallback } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const rafId = useRef<number>(0);

  const handleScroll = useCallback(() => {
    if (rafId.current) return;

    rafId.current = requestAnimationFrame(() => {
      const docHeight = document.documentElement.scrollHeight;
      const viewHeight = window.innerHeight;
      const scrollTop = window.scrollY;

      // Only show on pages taller than 1.5x viewport
      if (docHeight < viewHeight * 1.5) {
        setVisible(false);
        rafId.current = 0;
        return;
      }

      setVisible(true);
      const maxScroll = docHeight - viewHeight;
      const pct = maxScroll > 0 ? Math.min(scrollTop / maxScroll, 1) : 0;
      setProgress(pct);
      rafId.current = 0;
    });
  }, []);

  useEffect(() => {
    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [handleScroll]);

  if (!visible) return null;

  return (
    <div
      className="fixed top-0 left-0 w-full h-[3px] z-[51]"
      role="progressbar"
      aria-valuenow={Math.round(progress * 100)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Page scroll progress"
    >
      <div
        className="h-full bg-gradient-to-r from-primary to-primary/70 origin-left will-change-transform"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}
