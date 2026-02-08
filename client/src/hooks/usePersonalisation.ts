import { useState, useEffect, useCallback } from "react";

// localStorage key constants
const KEYS = {
  SELECTED_PEST: "pcs_selected_pest",
  VIEWED_SERVICES: "pcs_viewed_services",
  SUBMITTED: "pcs_submitted",
  VISIT_COUNT: "pcs_visit_count",
  LAST_VISIT: "pcs_last_visit",
} as const;

// sessionStorage flag to prevent double-counting visits within a session
const SESSION_COUNTED_KEY = "pcs_session_counted";

const MAX_VIEWED_SERVICES = 10;

function readString(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function readJson<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    if (raw === null) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function writeString(key: string, value: string): void {
  try {
    localStorage.setItem(key, value);
  } catch {
    // localStorage may be full or unavailable
  }
}

function writeJson(key: string, value: unknown): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // localStorage may be full or unavailable
  }
}

export function usePersonalisation() {
  const [selectedPest, setSelectedPestState] = useState<string | null>(() =>
    readString(KEYS.SELECTED_PEST)
  );
  const [viewedServices, setViewedServicesState] = useState<string[]>(() =>
    readJson<string[]>(KEYS.VIEWED_SERVICES, [])
  );
  const [hasSubmitted, setHasSubmittedState] = useState<boolean>(() =>
    readJson<boolean>(KEYS.SUBMITTED, false)
  );
  const [visitCount, setVisitCountState] = useState<number>(() =>
    readJson<number>(KEYS.VISIT_COUNT, 0)
  );

  // Increment visit count once per session on mount
  useEffect(() => {
    try {
      const alreadyCounted = sessionStorage.getItem(SESSION_COUNTED_KEY);
      if (!alreadyCounted) {
        const current = readJson<number>(KEYS.VISIT_COUNT, 0);
        const next = current + 1;
        writeJson(KEYS.VISIT_COUNT, next);
        writeJson(KEYS.LAST_VISIT, Date.now());
        setVisitCountState(next);
        sessionStorage.setItem(SESSION_COUNTED_KEY, "1");
      }
    } catch {
      // sessionStorage may be unavailable
    }
  }, []);

  const setSelectedPest = useCallback((slug: string) => {
    writeString(KEYS.SELECTED_PEST, slug);
    setSelectedPestState(slug);
  }, []);

  const trackServiceView = useCallback((slug: string) => {
    setViewedServicesState((prev) => {
      // Remove duplicate if already in list, then prepend
      const filtered = prev.filter((s) => s !== slug);
      const next = [slug, ...filtered].slice(0, MAX_VIEWED_SERVICES);
      writeJson(KEYS.VIEWED_SERVICES, next);
      return next;
    });
  }, []);

  const setHasSubmitted = useCallback(() => {
    writeJson(KEYS.SUBMITTED, true);
    setHasSubmittedState(true);
  }, []);

  const isReturningVisitor = visitCount > 1;

  return {
    selectedPest,
    setSelectedPest,
    viewedServices,
    trackServiceView,
    hasSubmitted,
    setHasSubmitted,
    isReturningVisitor,
    visitCount,
  };
}
