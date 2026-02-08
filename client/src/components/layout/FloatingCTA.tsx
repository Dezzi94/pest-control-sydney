import { MessageSquare } from "lucide-react";
import { useQuoteModal } from "@/hooks/useQuoteModal";

export default function FloatingCTA() {
  const { openQuoteModal } = useQuoteModal();
  return (
    <button
      onClick={() => openQuoteModal()}
      className="fixed z-50 lg:hidden flex items-center justify-center w-14 h-14 rounded-full bg-accent text-accent-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-pulse-slow"
      style={{ bottom: 'calc(1.5rem + env(safe-area-inset-bottom, 0px))', right: 'calc(1.5rem + env(safe-area-inset-right, 0px))' }}
      aria-label="Get a free quote"
    >
      <MessageSquare className="h-6 w-6" />
    </button>
  );
}
