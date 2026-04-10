import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: "Portfolio of Piash Islam- Software Engineer",
  description: "Portfolio project powered by Next.js and TypeScript",
  icons: {
    icon: "/Favicon.png",
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
