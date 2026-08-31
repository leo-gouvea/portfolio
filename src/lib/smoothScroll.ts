/* =============================================================
   SMOOTH SCROLL HELPER
   -------------------------------------------------------------
   Small utility that scrolls to an in-page section identified by
   a hash (e.g. `#projects`) with a smooth animation, while:
     - respecting the user's `prefers-reduced-motion` setting
     - updating the URL hash without a full-page jump
     - accounting for the fixed navbar height via CSS
       `scroll-margin-top` (defined in src/styles.css)

   Usage:
     <a href="#projects" onClick={(e) => smoothScrollTo(e, "#projects")}>
   ============================================================= */

export function smoothScrollTo(
  event: { preventDefault: () => void },
  hash: string,
): void {
  if (typeof window === "undefined") return;
  const id = hash.startsWith("#") ? hash.slice(1) : hash;
  const targetId =
    id === "projects-dev" || id === "projects-data" ? "projects" : id;
  const target = targetId ? document.getElementById(targetId) : null;
  if (!target) return;
  event.preventDefault();

  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  // Compute target Y manually. Using window.scrollTo (rather than
  // scrollIntoView) works reliably even when `html { overflow-x: hidden }`
  // promotes <body> to the scroll container, which breaks native smooth
  // scrollIntoView in some browsers.
  const styles = window.getComputedStyle(target);
  const marginTop = parseFloat(styles.scrollMarginTop || "0") || 0;
  const rect = target.getBoundingClientRect();
  const currentY =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0;
  const top = rect.top + currentY - marginTop;

  if (prefersReduced) {
    window.scrollTo(0, top);
  } else {
    window.scrollTo({ top, behavior: "smooth" });
  }

  // Keep the URL hash in sync without triggering the browser's
  // default instant jump.
  if (window.history && window.history.replaceState) {
    window.history.replaceState(null, "", `#${id}`);
  }
}