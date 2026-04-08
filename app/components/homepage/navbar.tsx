"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
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
      <div className="relative mx-auto w-full max-w-screen-2xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex w-full min-w-0 items-center justify-between gap-4">
          <div className="flex min-w-0 shrink-0 items-center">
            <Link href="/" className="truncate whitespace-nowrap text-xl font-semibold tracking-[0.14em] text-[#16f2b3] sm:text-3xl sm:tracking-[0.2em]">
              PIASH ISLAM
            </Link>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
            className="inline-flex h-10 w-10 items-center justify-center p-0 text-[#16f2b3] lg:hidden"
          >
            {isMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </button>

          <ul className="hidden flex-wrap items-center gap-x-1 gap-y-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-200 sm:text-sm lg:flex lg:justify-end">
            {navItems.map((item, index) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block rounded-full py-2 transition-colors duration-300 hover:text-pink-400 ${
                    index === navItems.length - 1 ? "pl-3 pr-0" : "px-3"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div
          className={`absolute left-4 right-4 top-full overflow-hidden rounded-2xl bg-[#0f1624]/95 transition-all duration-300 sm:left-6 sm:right-6 lg:hidden ${
            isMenuOpen
              ? "mt-2 max-h-96 border border-[#2d2b55] opacity-100 shadow-[0_20px_50px_rgba(2,6,23,0.45)]"
              : "mt-0 max-h-0 border border-transparent opacity-0 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col gap-1 p-3 text-sm font-medium uppercase tracking-[0.16em] text-slate-200">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-between rounded-xl px-4 py-3 transition-colors duration-300 hover:bg-white/5 hover:text-[#16f2b3]"
                >
                  <span>{item.label}</span>
                  <span className="h-2 w-2 rounded-full bg-[#16f2b3] opacity-70" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}