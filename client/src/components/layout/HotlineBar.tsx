import { Clock, ArrowRight } from "lucide-react";
import { useQuoteModal } from "@/hooks/useQuoteModal";

export default function HotlineBar() {
  const { openQuoteModal } = useQuoteModal();
  return (
    <div className="bg-slate-900 text-white py-2 text-sm" style={{ paddingTop: 'calc(env(safe-area-inset-top, 0px) + 0.5rem)' }}>
      <div className="container-width flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="hidden sm:inline text-slate-300">Available Now</span>
          </div>
          <div className="hidden md:flex items-center gap-1.5 text-slate-300">
            <Clock className="h-3.5 w-3.5" />
            <span>Mon-Fri 7am-6pm | Sat 8am-2pm</span>
          </div>
        </div>
        <button
          onClick={() => openQuoteModal()}
          className="flex items-center gap-2 font-semibold hover:text-blue-400 transition-colors"
        >
          <span className="relative flex h-2 w-2 emergency-pulse">
            <span className="inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          Get a Free Quote
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
