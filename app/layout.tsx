import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import PersonSchema from "./components/seo/PersonSchema";


export const metadata: Metadata = {
  metadataBase: new URL("https://piash-islam.vercel.app"),
  title: {
    default: "Piash Islam | Full Stack Web Developer Portfolio",
    template: "%s | Piash Islam",
  },
  description:
    "Piash Islam is a Full Stack Web Developer and Software Engineer with a portfolio featuring React, Next.js, TypeScript, Node.js, API development, database design, and modern web applications.",
  keywords: [
    "Piash Islam",
    "Piash Islam Portfolio",
    "Piash Islam Portfolio Website",
    "Piash Islam Software Engineer",
    "Piash Islam Full Stack Developer",
    "Piash Islam Web Developer",
    "Full Stack Developer Bangladesh",
    "Software Engineer Bangladesh",
    "React Developer",
    "Next.js Developer",
    "Web Developer Portfolio",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/Favicon.png",
  },
  openGraph: {
    title: "Piash Islam | Full Stack Web Developer Portfolio",
    description:
      "Portfolio website of Piash Islam showcasing projects, skills, and experience in modern web development.",
    url: "https://piash-islam.vercel.app",
    siteName: "Piash Islam Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/card.png",
        width: 1200,
        height: 630,
        alt: "Piash Islam Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Piash Islam | Full Stack Web Developer Portfolio",
    description:
      "Portfolio website of Piash Islam showcasing modern web development expertise and projects.",
    images: ["/card.png"],
    creator: "@PiashIslam2K",
  },
  verification: {
    google: "vTVqt-ZUMRh92B5F61s7AtgS2Dpq6Q1vd3lwi2xIqIU",
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