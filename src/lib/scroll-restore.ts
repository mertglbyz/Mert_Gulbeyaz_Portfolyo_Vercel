export const SCROLL_Y_KEY = "mg:scroll-y";
export const RELOAD_HASH_KEY = "mg:reload-hash";

export const scrollRestoreBootScript = `(() => {
  try { history.scrollRestoration = "manual"; } catch {}
  try {
    var nav = performance.getEntriesByType("navigation")[0];
    var reload = (nav && nav.type === "reload") || (performance.navigation && performance.navigation.type === 1);
    if (!reload) return;
    if (location.hash) {
      sessionStorage.setItem("${RELOAD_HASH_KEY}", location.hash);
      history.replaceState(null, "", location.pathname + location.search);
    }
    var raw = sessionStorage.getItem("${SCROLL_Y_KEY}");
    if (raw == null) return;
    var y = +raw;
    if (!(y >= 0)) return;
    var apply = function () { scrollTo(0, y); };
    apply();
    addEventListener("DOMContentLoaded", apply);
    addEventListener("load", apply);
  } catch {}
})();`;

export function readSavedScrollY() {
  try {
    const raw = sessionStorage.getItem(SCROLL_Y_KEY);
    if (raw == null) return null;
    const y = Number(raw);
    return Number.isFinite(y) && y >= 0 ? y : null;
  } catch {
    return null;
  }
}

export function writeSavedScrollY(y: number) {
  try {
    sessionStorage.setItem(SCROLL_Y_KEY, String(Math.round(Math.max(0, y))));
  } catch {
    // ignore private-mode quota
  }
}

export function isReloadNavigation() {
  const nav = performance.getEntriesByType("navigation")[0] as
    | PerformanceNavigationTiming
    | undefined;
  if (nav?.type === "reload") return true;
  const legacy = (performance as Performance & { navigation?: { type: number } })
    .navigation?.type;
  return legacy === 1;
}
