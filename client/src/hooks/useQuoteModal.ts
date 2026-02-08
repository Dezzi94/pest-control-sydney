import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";
import React from "react";

interface QuoteModalContextValue {
  isOpen: boolean;
  defaultPestType: string | undefined;
  openQuoteModal: (pestType?: string) => void;
  closeQuoteModal: () => void;
}

const QuoteModalContext = createContext<QuoteModalContextValue | null>(null);

export function QuoteModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [defaultPestType, setDefaultPestType] = useState<string | undefined>(undefined);

  // Auto-open from URL query param ?quote=open&pest=termite-control
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("quote") === "open") {
      const pest = params.get("pest") || undefined;
      setDefaultPestType(pest);
      setIsOpen(true);
    }
  }, []);

  const openQuoteModal = useCallback((pestType?: string) => {
    setDefaultPestType(pestType);
    setIsOpen(true);
  }, []);

  const closeQuoteModal = useCallback(() => {
    setIsOpen(false);
    setDefaultPestType(undefined);
  }, []);

  return React.createElement(
    QuoteModalContext.Provider,
    { value: { isOpen, defaultPestType, openQuoteModal, closeQuoteModal } },
    children
  );
}

export function useQuoteModal(): QuoteModalContextValue {
  const context = useContext(QuoteModalContext);
  if (!context) {
    throw new Error("useQuoteModal must be used within a QuoteModalProvider");
  }
  return context;
}
