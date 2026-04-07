"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type NavItem = {
  href: string;
  label: string;
};

const navItems: NavItem[] = [
  { href: "/#about", label: "ABOUT" },
  { href: "/#experience", label: "EXPERIENCE" },
  { href: "/#skills", label: "SKILLS" },
  { href: "/#projects", label: "PROJECTS" },
  { href: "/#education", label: "EDUCATION" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-120 transition-colors duration-300 ${
        isScrolled
          ? "bg-[#0d1224]/70 shadow-[0_10px_30px_rgba(2,6,23,0.28)] backdrop-blur-md"
          : "bg-transparent shadow-none backdrop-blur-0"
      }`}
    >
      <div
        className="flex w-full flex-col items-start justify-between gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:px-8"
      >
        <div className="flex shrink-0 items-center">
          <Link href="/" className="text-2xl font-semibold tracking-[0.2em] text-[#16f2b3] sm:text-3xl">
            PIASH ISLAM
          </Link>
        </div>

        <ul className="flex flex-wrap items-center gap-x-1 gap-y-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-200 sm:text-sm lg:justify-end">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block rounded-full px-3 py-2 transition-colors duration-300 hover:text-pink-400"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}