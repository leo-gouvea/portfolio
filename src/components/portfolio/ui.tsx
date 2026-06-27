import type { ReactNode } from "react";

/* =============================================================
   SHARED UI PRIMITIVES
   -------------------------------------------------------------
   - Tag      : small slanted label chip
   - Button   : slanted game-style button (also renders as <a>)
   - SectionHeader : numbered title used at the top of every
                     section

   Visual styles (skew, panel, scanlines, fonts) come from
   utilities defined in src/styles.css.
   ============================================================= */

type TagProps = { children: ReactNode; tone?: "primary" | "secondary" };
export function Tag({ children, tone = "primary" }: TagProps) {
  const bg =
    tone === "secondary"
      ? "bg-[color:var(--secondary)] text-[color:var(--bg)]"
      : "bg-[color:var(--primary)] text-[color:var(--bg)]";
  return (
    <span
      className={`inline-block skew-tab font-display text-[11px] tracking-widest px-3 py-1 ${bg}`}
    >
      <span className="block skew-tab-inner">{children}</span>
    </span>
  );
}

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  ariaLabel?: string;
};
export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  ariaLabel,
}: ButtonProps) {
  const fill =
    variant === "primary"
      ? "bg-[color:var(--primary)] text-[color:var(--bg)]"
      : variant === "secondary"
        ? "bg-[color:var(--secondary)] text-[color:var(--bg)]"
        : "bg-transparent border border-[color:var(--primary)] text-[color:var(--primary)]";
  const cls = `
inline-flex
skew-tab
relative
overflow-hidden
items-center
px-6
py-3
font-display
tracking-[0.2em]
text-sm
transition-all
duration-300
hover:-translate-y-0.5
group
${fill}
${className}
`;
  const inner = (
    <>
      <span className="
      absolute
      inset-0
      bg-black/80
      scale-x-0
      origin-left
      transition-transform
      duration-300
      group-hover:scale-x-100
    " />

      <span className="
      relative
      z-10
      skew-tab-inner
      flex
      items-center
      gap-2
      transition-colors
      duration-300
      group-hover:text-[color:var(--secondary)]
    ">
        {children}
      </span>;
    </>
  );

  if (href) {
    const external = href.startsWith("http");
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        aria-label={ariaLabel}
        className={cls}
      >
        {inner}
      </a>
    );
  }
  return (
    <button onClick={onClick} aria-label={ariaLabel} className={cls}>
      {inner}
    </button>
  );
}

export function SectionHeader({ index, label, id }: { index: string; label: string; id?: string }) {
  return (
    <div className="flex items-center gap-3 mb-10">
      <span className="skew-tab bg-[color:var(--secondary)] text-[color:var(--bg)] px-3 py-1 font-display text-xl">
        <span className="skew-tab-inner block">{index}</span>
      </span>
      <h2
        id={id}
        className="skew-tab bg-[color:var(--primary)] text-[color:var(--bg)] px-5 py-2 font-display text-2xl sm:text-3xl tracking-[0.15em]"
      >
        <span className="skew-tab-inner block">{label}</span>
      </h2>
      <span className="flex-1 h-[2px] bg-[color:var(--primary)] opacity-50" />
    </div>
  );
}
