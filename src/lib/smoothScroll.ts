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
  const target = id ? document.getElementById(id) : null;
  if (!target) return;
  event.preventDefault();

  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  target.scrollIntoView({
    behavior: prefersReduced ? "auto" : "smooth",
    block: "start",
  });

  // Keep the URL hash in sync without triggering the browser's
  // default instant jump.
  if (window.history && window.history.replaceState) {
    window.history.replaceState(null, "", `#${id}`);
  }
}