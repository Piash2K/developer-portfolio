import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import PersonSchema from "./components/seo/PersonSchema";

export const metadata: Metadata = {
  metadataBase: new URL("https://piash-islam.vercel.app"),
  applicationName: "Piash Islam Portfolio",
  authors: [{ name: "Piash Islam", url: "https://piash-islam.vercel.app/" }],
  creator: "Piash Islam",
  publisher: "Piash Islam",
  referrer: "origin-when-cross-origin",

  title: {
    default: "Piash Islam Portfolio | Full Stack Web Developer",
    template: "%s | Piash Islam Portfolio",
  },

  description:
    "Official portfolio website of Piash Islam, a Full Stack Web Developer and Software Engineer specializing in React, Next.js, TypeScript, Node.js, API development, database design, and modern web applications.",

  keywords: [
    "Piash Islam",
    "Piash Islam Portfolio",
    "Piash Islam Software Engineer",
    "Piash Islam Full Stack Developer",
    "Piash Islam Web Developer",
    "Full Stack Developer",
    "Software Engineer",
    "React Developer",
    "Next.js Developer",
    "Web Developer",
  ],

  alternates: {
    canonical: "/",
  },

  manifest: "/manifest.webmanifest",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/Favicon.png",
    shortcut: "/Favicon.png",
    apple: "/Favicon.png",
  },

  openGraph: {
    title: "Piash Islam Portfolio | Full Stack Web Developer",
    description:
      "Official portfolio website of Piash Islam, a Full Stack Web Developer and Software Engineer.",
    url: "https://piash-islam.vercel.app/",
    siteName: "Piash Islam Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/card.png",
        width: 1200,
        height: 630,
        alt: "Piash Islam Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Piash Islam Portfolio | Full Stack Web Developer",
    description:
      "Official portfolio website of Piash Islam, a Full Stack Web Developer and Software Engineer.",
    images: ["/card.png"],
    creator: "@PiashIslam2K",
  },

  verification: {
    google: "vTVqt-ZUMRh92B5F61s7AtgS2Dpq6Q1vd3lwi2xIqIU",
  },

  other: {
    "profile:first_name": "Piash",
    "profile:last_name": "Islam",
    "profile:username": "PiashIslam2K",
    "og:profile:first_name": "Piash",
    "og:profile:last_name": "Islam",
    "og:profile:username": "PiashIslam2K",
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <PersonSchema />
        {children}
      </body>
    </html>
  );
}
