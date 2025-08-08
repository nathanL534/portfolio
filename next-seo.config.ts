import { type NextSeoProps } from "next-seo";

export const defaultSEO: NextSeoProps = {
  title: "Nathaniel Lee — Portfolio",
  description: "Full‑stack developer portfolio: projects, experience, and contact.",
  openGraph: {
    type: "website",
    url: "https://yourdomain.com",
    title: "Nathaniel Lee — Portfolio",
    description: "Full‑stack developer portfolio: projects, experience, and contact.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Portfolio" }]
  },
  twitter: {
    cardType: "summary_large_image",
    site: "@yourhandle"
  }
};


