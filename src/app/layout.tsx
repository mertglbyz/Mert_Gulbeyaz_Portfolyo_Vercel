import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne } from "next/font/google";
import { Providers } from "@/components/Providers";
import { scrollRestoreBootScript } from "@/lib/scroll-restore";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Mert Gülbeyaz — Portfolyo",
  description:
    "React Native ve TypeScript ile cross-platform mobil uygulamalar geliştiren yazılım mühendisi Mert Gülbeyaz'ın portfolyosu.",
  openGraph: {
    title: "Mert Gülbeyaz — Portfolyo",
    description:
      "React Native ve TypeScript ile cross-platform mobil uygulamalar geliştiren yazılım mühendisi Mert Gülbeyaz'ın portfolyosu.",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="tr"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full bg-background font-sans text-foreground"
      >
        <script
          dangerouslySetInnerHTML={{ __html: scrollRestoreBootScript }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
