import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { ScrollProgress } from "@/components/ui/scroll-progress";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"),
  title: {
    default: "Nathaniel Lee — Portfolio",
    template: "%s — Nathaniel Lee",
  },
  description: "Full‑stack developer portfolio: projects, experience, and contact.",
  openGraph: {
    type: "website",
    url: "/",
    title: "Nathaniel Lee — Portfolio",
    description: "Full‑stack developer portfolio: projects, experience, and contact.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nathaniel Lee — Portfolio",
    description: "Full‑stack developer portfolio: projects, experience, and contact.",
    images: ["/og.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased bg-gradient-to-b from-white via-violet-50 to-sky-50 dark:from-zinc-900 dark:via-zinc-900/60 dark:to-zinc-900 min-h-screen`}>
        <ThemeProvider>
          <ScrollProgress />
          <SiteHeader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
