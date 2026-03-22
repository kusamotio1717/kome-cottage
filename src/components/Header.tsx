"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const NAV_ITEMS = [
  { label: "Concept", href: "#concept" },
  { label: "Space", href: "#space" },
  { label: "Experience", href: "#experience" },
  { label: "Gallery", href: "#gallery" },
  { label: "Information", href: "#information" },
];

const AIRBNB_URL =
  "https://www.airbnb.jp/rooms/1546821316360796611";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#2D2D2D]/80 backdrop-blur-md"
            : "bg-gradient-to-b from-black/50 to-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-12 lg:px-16">
          {/* Logo */}
          <a href="#" className="relative z-50">
            <Image
              src="/logo-white.png"
              alt="KOMÉ"
              width={200}
              height={72}
              className="w-[100px] md:w-[130px]"
              priority
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-10 md:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-[family-name:var(--font-serif)] text-[11px] tracking-[0.2em] text-white/80 transition-colors duration-300 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Reserve Button (Desktop) */}
          <a
            href={AIRBNB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden border border-white/70 px-6 py-2 font-[family-name:var(--font-serif)] text-[11px] tracking-[0.25em] text-white transition-all duration-300 hover:bg-white hover:text-[#2D2D2D] md:inline-block"
          >
            RESERVE
          </a>

          {/* Hamburger (Mobile) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-label="Menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block h-[1px] w-5 bg-white"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block h-[1px] w-5 bg-white"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block h-[1px] w-5 bg-white"
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#2D2D2D]/95 backdrop-blur-lg"
          >
            <nav className="flex flex-col items-center gap-8">
              {NAV_ITEMS.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="font-[family-name:var(--font-serif)] text-lg tracking-[0.2em] text-white/80"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href={AIRBNB_URL}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-4 border border-[#C4A87C] px-10 py-3 font-[family-name:var(--font-serif)] text-xs tracking-[0.25em] text-[#C4A87C]"
              >
                RESERVE
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
