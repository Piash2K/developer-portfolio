import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import PersonSchema from "./components/seo/PersonSchema";


export const metadata: Metadata = {
  title: "Piash Islam | Software Engineer & Web Developer",
  description:
    "Piash Islam is a Software Engineer and Web Developer specializing in React, Next.js, TypeScript, Node.js, and modern web development.",
  keywords: [
    "Piash Islam",
    "Piash Islam Software Engineer",
    "Piash Islam Web Developer",
    "Software Engineer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
  ],
  icons: {
    icon: "/Favicon.png",
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