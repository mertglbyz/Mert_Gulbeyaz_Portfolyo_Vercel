export const navLinks = [
  { href: "#hakkimda", label: "Hakkımda" },
  { href: "#deneyim", label: "Deneyim" },
  { href: "#projeler", label: "Projeler" },
  { href: "#iletisim", label: "İletişim" },
] as const;

export type NavLink = (typeof navLinks)[number];

export function scrollOffsetFor(href: string) {
  if (href === "#top") return 0;
  return -72;
}
