import type { ComponentType } from "react";
import { Search, Shield, Building, ClipboardCheck, Rat, Bird, Bed } from "lucide-react";

// ─── Shared SVG Props ────────────────────────────────────────────────────────

interface IconProps {
  className?: string;
}

const defaultSvgProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

// ─── 1. CockroachIcon ────────────────────────────────────────────────────────
// Oval body, antennae, 6 legs

export function CockroachIcon({ className }: IconProps) {
  return (
    <svg {...defaultSvgProps} className={className}>
      {/* Body - oval */}
      <ellipse cx="12" cy="13" rx="3.5" ry="5" />
      {/* Head */}
      <circle cx="12" cy="7" r="1.5" />
      {/* Left antenna */}
      <path d="M11 6 C10 4 8 3 6 2" />
      {/* Right antenna */}
      <path d="M13 6 C14 4 16 3 18 2" />
      {/* Left legs */}
      <path d="M8.5 10 L5 8" />
      <path d="M8.5 13 L4 13" />
      <path d="M8.5 16 L5 18" />
      {/* Right legs */}
      <path d="M15.5 10 L19 8" />
      <path d="M15.5 13 L20 13" />
      <path d="M15.5 16 L19 18" />
    </svg>
  );
}

// ─── 2. SpiderIcon ───────────────────────────────────────────────────────────
// Round body, 8 legs radiating outward

export function SpiderIcon({ className }: IconProps) {
  return (
    <svg {...defaultSvgProps} className={className}>
      {/* Abdomen */}
      <circle cx="12" cy="14" r="3" />
      {/* Cephalothorax */}
      <circle cx="12" cy="10" r="2" />
      {/* Left legs (4) */}
      <path d="M10 10 L6 5 L4 3" />
      <path d="M10 11 L5 8 L3 7" />
      <path d="M10 12 L5 14 L3 16" />
      <path d="M10 13 L6 17 L4 20" />
      {/* Right legs (4) */}
      <path d="M14 10 L18 5 L20 3" />
      <path d="M14 11 L19 8 L21 7" />
      <path d="M14 12 L19 14 L21 16" />
      <path d="M14 13 L18 17 L20 20" />
    </svg>
  );
}

// ─── 3. AntIcon ──────────────────────────────────────────────────────────────
// 3-segment body, 6 legs, antennae

export function AntIcon({ className }: IconProps) {
  return (
    <svg {...defaultSvgProps} className={className}>
      {/* Head */}
      <circle cx="12" cy="5" r="2" />
      {/* Thorax */}
      <ellipse cx="12" cy="10" rx="1.5" ry="2" />
      {/* Abdomen */}
      <ellipse cx="12" cy="16" rx="2.5" ry="3" />
      {/* Left antenna */}
      <path d="M10.5 3.5 L7 1" />
      {/* Right antenna */}
      <path d="M13.5 3.5 L17 1" />
      {/* Left legs */}
      <path d="M10.5 9 L7 7" />
      <path d="M10.5 10 L6 10" />
      <path d="M10.5 11 L7 13" />
      {/* Right legs */}
      <path d="M13.5 9 L17 7" />
      <path d="M13.5 10 L18 10" />
      <path d="M13.5 11 L17 13" />
    </svg>
  );
}

// ─── 4. TermiteIcon ──────────────────────────────────────────────────────────
// Elongated body with pincers/mandibles, antennae

export function TermiteIcon({ className }: IconProps) {
  return (
    <svg {...defaultSvgProps} className={className}>
      {/* Head with mandibles */}
      <circle cx="12" cy="5.5" r="2" />
      {/* Left mandible */}
      <path d="M10.5 4 L9 2 L8 1.5" />
      {/* Right mandible */}
      <path d="M13.5 4 L15 2 L16 1.5" />
      {/* Left antenna */}
      <path d="M10.5 5 L8 3.5" />
      {/* Right antenna */}
      <path d="M13.5 5 L16 3.5" />
      {/* Thorax */}
      <ellipse cx="12" cy="9.5" rx="2" ry="2" />
      {/* Abdomen - elongated */}
      <ellipse cx="12" cy="16" rx="2.5" ry="4.5" />
      {/* Body segments */}
      <path d="M9.5 14 L14.5 14" />
      <path d="M9.5 16 L14.5 16" />
      <path d="M9.5 18 L14.5 18" />
      {/* Left legs */}
      <path d="M10 9 L7 7.5" />
      <path d="M10 10 L7 11" />
      {/* Right legs */}
      <path d="M14 9 L17 7.5" />
      <path d="M14 10 L17 11" />
    </svg>
  );
}

// ─── 5. WaspIcon ─────────────────────────────────────────────────────────────
// Narrow waist, wings, stinger

export function WaspIcon({ className }: IconProps) {
  return (
    <svg {...defaultSvgProps} className={className}>
      {/* Head */}
      <circle cx="12" cy="4" r="2" />
      {/* Left antenna */}
      <path d="M10.5 2.5 L8 1" />
      {/* Right antenna */}
      <path d="M13.5 2.5 L16 1" />
      {/* Thorax */}
      <ellipse cx="12" cy="8.5" rx="2.5" ry="2" />
      {/* Narrow waist */}
      <path d="M12 10.5 L12 12.5" />
      {/* Abdomen - pointed for stinger */}
      <path d="M9.5 13 Q9 15.5 12 20 Q15 15.5 14.5 13 Z" />
      {/* Stinger */}
      <path d="M12 20 L12 22" />
      {/* Left wing */}
      <path d="M10 7.5 Q5 4 4 7 Q5 10 10 9" />
      {/* Right wing */}
      <path d="M14 7.5 Q19 4 20 7 Q19 10 14 9" />
      {/* Body stripes */}
      <path d="M10.2 14.5 L13.8 14.5" />
      <path d="M10 16 L14 16" />
      {/* Left legs */}
      <path d="M10 8 L7 10" />
      <path d="M10 9 L7 11.5" />
      {/* Right legs */}
      <path d="M14 8 L17 10" />
      <path d="M14 9 L17 11.5" />
    </svg>
  );
}

// ─── 6. FleaIcon ─────────────────────────────────────────────────────────────
// Small round body, large hind legs for jumping

export function FleaIcon({ className }: IconProps) {
  return (
    <svg {...defaultSvgProps} className={className}>
      {/* Head - small */}
      <circle cx="10" cy="8" r="1.5" />
      {/* Body - oval, laterally compressed */}
      <ellipse cx="13" cy="10" rx="3" ry="4" />
      {/* Antenna */}
      <path d="M9 7 L7 5" />
      {/* Piercing mouthpart */}
      <path d="M8.5 8.5 L6 10" />
      {/* Front leg */}
      <path d="M11 12 L8 14 L7 16" />
      {/* Middle leg */}
      <path d="M13 14 L11 17 L10 19" />
      {/* Large hind leg (for jumping) */}
      <path d="M15 13 L17 16 L18 14 L19 18 L17 20" />
    </svg>
  );
}

// ─── 7. SilverfishIcon ───────────────────────────────────────────────────────
// Elongated teardrop body, bristle tail, antennae

export function SilverfishIcon({ className }: IconProps) {
  return (
    <svg {...defaultSvgProps} className={className}>
      {/* Teardrop body - wider at head, tapering to tail */}
      <path d="M8 8 Q7 12 8 16 Q9 19 12 20 Q15 19 16 16 Q17 12 16 8 Q14 5 12 5 Q10 5 8 8 Z" />
      {/* Left antenna */}
      <path d="M10 5 L7 2" />
      {/* Right antenna */}
      <path d="M14 5 L17 2" />
      {/* Body segments */}
      <path d="M9 9 L15 9" />
      <path d="M8.5 11 L15.5 11" />
      <path d="M8.5 13 L15.5 13" />
      <path d="M9 15 L15 15" />
      <path d="M10 17 L14 17" />
      {/* Left bristle tail */}
      <path d="M10 20 L7 23" />
      {/* Center bristle tail */}
      <path d="M12 20 L12 23" />
      {/* Right bristle tail */}
      <path d="M14 20 L17 23" />
    </svg>
  );
}

// ─── 8. TickIcon ─────────────────────────────────────────────────────────────
// Round body, 8 short legs, small head

export function TickIcon({ className }: IconProps) {
  return (
    <svg {...defaultSvgProps} className={className}>
      {/* Body - flat, round */}
      <ellipse cx="12" cy="12" rx="5" ry="5.5" />
      {/* Head / capitulum */}
      <ellipse cx="12" cy="5.5" rx="1.5" ry="1" />
      {/* Scutum shield on back */}
      <path d="M9.5 9 Q12 7.5 14.5 9" />
      {/* Left legs (4) */}
      <path d="M7 9 L4.5 7" />
      <path d="M7 11 L4 10.5" />
      <path d="M7 13 L4 14" />
      <path d="M7.5 15 L5 17" />
      {/* Right legs (4) */}
      <path d="M17 9 L19.5 7" />
      <path d="M17 11 L20 10.5" />
      <path d="M17 13 L20 14" />
      <path d="M16.5 15 L19 17" />
    </svg>
  );
}

// ─── 9. MiteIcon ─────────────────────────────────────────────────────────────
// Tiny round body, 8 legs, smaller than tick

export function MiteIcon({ className }: IconProps) {
  return (
    <svg {...defaultSvgProps} className={className}>
      {/* Body - small oval */}
      <ellipse cx="12" cy="12" rx="3.5" ry="4" />
      {/* Head nub */}
      <ellipse cx="12" cy="7.5" rx="1" ry="0.8" />
      {/* Left legs (4) */}
      <path d="M8.5 9 L5 6 L3 5" />
      <path d="M8.5 11 L4 9.5 L2 9" />
      <path d="M8.5 13 L4 14.5 L2 15" />
      <path d="M8.5 15 L5 18 L3 19" />
      {/* Right legs (4) */}
      <path d="M15.5 9 L19 6 L21 5" />
      <path d="M15.5 11 L20 9.5 L22 9" />
      <path d="M15.5 13 L20 14.5 L22 15" />
      <path d="M15.5 15 L19 18 L21 19" />
    </svg>
  );
}

// ─── 10. BeeIcon ─────────────────────────────────────────────────────────────
// Round fuzzy body, wings, stripes

export function BeeIcon({ className }: IconProps) {
  return (
    <svg {...defaultSvgProps} className={className}>
      {/* Head */}
      <circle cx="12" cy="5" r="2.5" />
      {/* Eyes */}
      <circle cx="10.8" cy="4.5" r="0.5" />
      <circle cx="13.2" cy="4.5" r="0.5" />
      {/* Left antenna */}
      <path d="M10 3 L8 1" />
      {/* Right antenna */}
      <path d="M14 3 L16 1" />
      {/* Body - round/plump */}
      <ellipse cx="12" cy="13" rx="4" ry="5.5" />
      {/* Body stripes */}
      <path d="M8.5 11 L15.5 11" />
      <path d="M8 13 L16 13" />
      <path d="M8.5 15 L15.5 15" />
      {/* Stinger */}
      <path d="M12 18.5 L12 20" />
      {/* Left wing */}
      <path d="M9 9 Q4 5 5 8 Q5 11 9 10.5" />
      {/* Right wing */}
      <path d="M15 9 Q20 5 19 8 Q19 11 15 10.5" />
      {/* Left legs */}
      <path d="M8.5 13 L6 15" />
      <path d="M8.5 15 L6 17.5" />
      {/* Right legs */}
      <path d="M15.5 13 L18 15" />
      <path d="M15.5 15 L18 17.5" />
    </svg>
  );
}

// ─── 11. DrainFlyIcon ────────────────────────────────────────────────────────
// Moth/fly with large fuzzy wings

export function DrainFlyIcon({ className }: IconProps) {
  return (
    <svg {...defaultSvgProps} className={className}>
      {/* Body - elongated */}
      <ellipse cx="12" cy="14" rx="1.5" ry="4" />
      {/* Head */}
      <circle cx="12" cy="9" r="1.5" />
      {/* Left antenna */}
      <path d="M10.5 8 L8 5 L7 4" />
      {/* Right antenna */}
      <path d="M13.5 8 L16 5 L17 4" />
      {/* Left wing - large, leaf-shaped with vein detail */}
      <path d="M10.5 11 Q5 7 3 10 Q2 14 6 16 Q8 17 10.5 15" />
      <path d="M10.5 12 Q7 10 5 12" />
      <path d="M10.5 13 Q8 13 6 14.5" />
      {/* Right wing - large, leaf-shaped with vein detail */}
      <path d="M13.5 11 Q19 7 21 10 Q22 14 18 16 Q16 17 13.5 15" />
      <path d="M13.5 12 Q17 10 19 12" />
      <path d="M13.5 13 Q16 13 18 14.5" />
      {/* Legs */}
      <path d="M11 16 L9 19" />
      <path d="M12 18 L12 20" />
      <path d="M13 16 L15 19" />
    </svg>
  );
}

// ─── 12. PossumIcon ──────────────────────────────────────────────────────────
// Possum face - pointed snout, large ears, round eyes

export function PossumIcon({ className }: IconProps) {
  return (
    <svg {...defaultSvgProps} className={className}>
      {/* Face outline - rounded with pointed chin */}
      <path d="M6 10 Q6 6 9 5 L12 4 L15 5 Q18 6 18 10 Q18 14 15 17 L12 20 L9 17 Q6 14 6 10 Z" />
      {/* Left ear */}
      <path d="M7 7 Q6 2 9 4" />
      {/* Right ear */}
      <path d="M17 7 Q18 2 15 4" />
      {/* Left eye */}
      <circle cx="9.5" cy="10" r="1.2" />
      {/* Right eye */}
      <circle cx="14.5" cy="10" r="1.2" />
      {/* Nose */}
      <ellipse cx="12" cy="13.5" rx="1" ry="0.7" />
      {/* Mouth line */}
      <path d="M12 14.2 L12 15.5" />
      <path d="M11 15.5 Q12 16.5 13 15.5" />
      {/* Whiskers left */}
      <path d="M10.5 13.5 L7 12.5" />
      <path d="M10.5 14 L7 14.5" />
      {/* Whiskers right */}
      <path d="M13.5 13.5 L17 12.5" />
      <path d="M13.5 14 L17 14.5" />
    </svg>
  );
}

// ─── 13. PantryPestIcon ──────────────────────────────────────────────────────
// Small moth above a wheat grain shape

export function PantryPestIcon({ className }: IconProps) {
  return (
    <svg {...defaultSvgProps} className={className}>
      {/* Moth body */}
      <ellipse cx="12" cy="7" rx="1" ry="2" />
      {/* Moth head */}
      <circle cx="12" cy="4.5" r="0.8" />
      {/* Left antenna */}
      <path d="M11.2 4 L9 2" />
      {/* Right antenna */}
      <path d="M12.8 4 L15 2" />
      {/* Left wing */}
      <path d="M11 6 Q7 4 6 6 Q6 8 8 9 Q10 9.5 11 8.5" />
      {/* Right wing */}
      <path d="M13 6 Q17 4 18 6 Q18 8 16 9 Q14 9.5 13 8.5" />
      {/* Wheat grain - elongated oval */}
      <path d="M9 16 Q9 13 12 12 Q15 13 15 16 Q15 19 12 21 Q9 19 9 16 Z" />
      {/* Grain line detail */}
      <path d="M12 12.5 L12 20.5" />
      {/* Grain cross lines */}
      <path d="M10 15 L14 15" />
      <path d="M9.5 17 L14.5 17" />
      <path d="M10 19 L14 19" />
    </svg>
  );
}

// ─── 14. TermiteSearchIcon ───────────────────────────────────────────────────
// Magnifying glass with termite inside

export function TermiteSearchIcon({ className }: IconProps) {
  return (
    <svg {...defaultSvgProps} className={className}>
      {/* Magnifying glass circle */}
      <circle cx="10" cy="10" r="7" />
      {/* Handle */}
      <path d="M15 15 L21 21" />
      {/* Mini termite inside the glass */}
      {/* Head */}
      <circle cx="10" cy="6.5" r="1" />
      {/* Mandibles */}
      <path d="M9.3 5.8 L8.5 5" />
      <path d="M10.7 5.8 L11.5 5" />
      {/* Thorax */}
      <ellipse cx="10" cy="9" rx="1.2" ry="1.2" />
      {/* Abdomen */}
      <ellipse cx="10" cy="12.5" rx="1.5" ry="2" />
      {/* Body segments */}
      <path d="M8.5 12 L11.5 12" />
      <path d="M8.5 13 L11.5 13" />
      {/* Mini legs */}
      <path d="M8.8 8.5 L7.5 7.5" />
      <path d="M8.8 9.5 L7.5 10" />
      <path d="M11.2 8.5 L12.5 7.5" />
      <path d="M11.2 9.5 L12.5 10" />
    </svg>
  );
}

// ─── 15. GeneralPestIcon ─────────────────────────────────────────────────────
// Shield with checkmark (protection icon)

export function GeneralPestIcon({ className }: IconProps) {
  return (
    <svg {...defaultSvgProps} className={className}>
      {/* Shield outline */}
      <path d="M12 2 L3 6 L3 12 Q3 18 12 22 Q21 18 21 12 L21 6 Z" />
      {/* Checkmark */}
      <path d="M8 12 L11 15 L16 9" />
    </svg>
  );
}

// ─── 16. CommercialPestIcon ──────────────────────────────────────────────────
// Building with shield

export function CommercialPestIcon({ className }: IconProps) {
  return (
    <svg {...defaultSvgProps} className={className}>
      {/* Building outline */}
      <rect x="3" y="4" width="12" height="18" rx="1" />
      {/* Building windows */}
      <rect x="5" y="6.5" width="2" height="2" />
      <rect x="9" y="6.5" width="2" height="2" />
      <rect x="5" y="11" width="2" height="2" />
      <rect x="9" y="11" width="2" height="2" />
      {/* Door */}
      <rect x="7" y="17" width="3" height="5" />
      {/* Mini shield overlay bottom-right */}
      <path d="M18 10 L14.5 11.5 L14.5 14.5 Q14.5 17 18 19 Q21.5 17 21.5 14.5 L21.5 11.5 Z" />
      {/* Shield checkmark */}
      <path d="M16 14.5 L17.5 16 L20 13" />
    </svg>
  );
}

// ─── 17. PrePurchaseIcon ─────────────────────────────────────────────────────
// Clipboard with magnifying glass

export function PrePurchaseIcon({ className }: IconProps) {
  return (
    <svg {...defaultSvgProps} className={className}>
      {/* Clipboard body */}
      <rect x="4" y="4" width="16" height="18" rx="2" />
      {/* Clipboard clip */}
      <path d="M9 2 L9 4 L15 4 L15 2" />
      <rect x="8" y="1" width="8" height="3" rx="1" />
      {/* Text lines on clipboard */}
      <path d="M7 9 L13 9" />
      <path d="M7 12 L11 12" />
      <path d="M7 15 L10 15" />
      {/* Magnifying glass overlapping bottom-right */}
      <circle cx="16" cy="16" r="3" />
      <path d="M18.2 18.2 L21 21" />
    </svg>
  );
}

// ─── PEST_ICON_MAP ───────────────────────────────────────────────────────────
// Maps the `icon` field values from ServiceData in all-routes.ts to components.
// Uses custom icons where available, falls back to lucide-react for Rat, Bed, Bird.

export const PEST_ICON_MAP: Record<string, ComponentType<{ className?: string }>> = {
  "Search": TermiteSearchIcon,
  "Bug": CockroachIcon,
  "Rat": Rat,
  "Bed": Bed,
  "Bird": Bird,
  "Shield": GeneralPestIcon,
  "Building": CommercialPestIcon,
  "ClipboardCheck": PrePurchaseIcon,
  "Cookie": PantryPestIcon,
  "Squirrel": PossumIcon,
};

// ─── SERVICE_SLUG_ICON_MAP ───────────────────────────────────────────────────
// Maps service slugs directly to the most appropriate icon component.
// For use in pest type selection grids, service cards, etc.

export const SERVICE_SLUG_ICON_MAP: Record<string, ComponentType<{ className?: string }>> = {
  "cockroach-treatment": CockroachIcon,
  "termite-inspection": TermiteSearchIcon,
  "termite-control": TermiteIcon,
  "rodent-control": Rat,
  "spider-treatment": SpiderIcon,
  "ant-control": AntIcon,
  "flea-treatment": FleaIcon,
  "bedbug-treatment": Bed,
  "wasp-removal": WaspIcon,
  "silverfish-control": SilverfishIcon,
  "bird-control": Bird,
  "pantry-pest-control": PantryPestIcon,
  "drain-fly-treatment": DrainFlyIcon,
  "possum-removal": PossumIcon,
  "bee-removal": BeeIcon,
  "tick-treatment": TickIcon,
  "mite-control": MiteIcon,
  "general-pest-control": GeneralPestIcon,
  "commercial-pest-control": CommercialPestIcon,
  "pre-purchase-inspection": PrePurchaseIcon,
};
