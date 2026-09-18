export const GA_MEASUREMENT_ID = "G-RZL02R4SCL";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackHashView() {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;

  const pagePath =
    window.location.pathname + window.location.search + window.location.hash;

  window.gtag("event", "page_view", {
    page_path: pagePath,
    page_location: window.location.href,
    page_title: document.title,
  });
}
