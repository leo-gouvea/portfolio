/* Shared presentational primitives used across the portfolio. */

import type { ReactNode } from "react";

/* Slanted FFXIV-style button. */
export function SkewButton({
  onClick,
  href,
  variant = "ghost",
  children,
  className = "",
}: {
  onClick?: () => void;
  href?: string;
  variant?: "solid" | "accent" | "ghost";
  children: ReactNode;
  className?: string;
}) {
  const fill =
    variant === "solid"
      ? "bg-[var(--lavender)] text-[var(--ink-black)] hover:bg-white"
      : variant === "accent"
      ? "bg-[var(--accent-red)] text-white hover:brightness-110"
      : "bg-transparent border border-[var(--lavender)]/40 text-[var(--lavender)] hover:border-[var(--accent-red)] hover:text-[var(--accent-red)]";

  const inner = (
    <span
      className={`group relative inline-flex skew-tab items-center px-6 py-3 font-ui tracking-[0.25em] uppercase text-sm transition-all ${fill} ${className}`}
    >
      <span className="skew-tab-inner flex items-center gap-2">{children}</span>
    </span>
  );

  if (href) {
    const external = href.startsWith("http");
    return (
      <a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
        {inner}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick}>
      {inner}
    </button>
  );
}

/* Section header with crimson markers. Pass natural-case label. */
export function SectionHeader({ label, id }: { label: string; id?: string }) {
  return (
    <header className="mb-12 text-center">
      <div className="inline-flex items-center gap-4">
        <span aria-hidden className="block w-12 h-[3px] bg-[var(--accent-red)]" />
        <h2 id={id} className="font-display text-5xl sm:text-6xl text-white">
          {label}
        </h2>
        <span aria-hidden className="block w-12 h-[3px] bg-[var(--accent-red)]" />
      </div>
    </header>
  );
}

/* Tiny inline SVG flags for the language toggle. */
export function FlagUS({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 40" className={className} aria-hidden>
      <rect width="60" height="40" fill="#b22234" />
      {[1, 3, 5, 7, 9].map((i) => (
        <rect key={i} y={i * 4} width="60" height="4" fill="#fff" />
      ))}
      <rect width="26" height="20" fill="#3c3b6e" />
    </svg>
  );
}

export function FlagBR({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 40" className={className} aria-hidden>
      <rect width="60" height="40" fill="#009b3a" />
      <polygon points="30,4 56,20 30,36 4,20" fill="#fedf00" />
      <circle cx="30" cy="20" r="7" fill="#002776" />
    </svg>
  );
}