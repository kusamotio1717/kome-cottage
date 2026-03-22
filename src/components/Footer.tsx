"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] py-16 md:py-20">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12 lg:px-16">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <Image
            src="/logo-white.png"
            alt="KOMÉ"
            width={200}
            height={72}
            className="w-[100px] opacity-40"
          />

          {/* Address */}
          <p className="text-center font-[family-name:var(--font-sans)] text-[11px] font-light leading-[2] tracking-wider text-white/60">
            THE COTTAGE, TSUKIYONE
            <br />
            山梨県南巨摩郡富士川町春米
          </p>

          {/* Links */}
          <div className="flex gap-8">
            <a
              href="https://www.instagram.com/cottage.yamanashi/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-[family-name:var(--font-sans)] text-[10px] tracking-[0.2em] text-white/60 transition-colors duration-300 hover:text-white/60"
            >
              INSTAGRAM
            </a>
            <a
              href="https://www.airbnb.jp/rooms/1546821316360796611"
              target="_blank"
              rel="noopener noreferrer"
              className="font-[family-name:var(--font-sans)] text-[10px] tracking-[0.2em] text-white/60 transition-colors duration-300 hover:text-white/60"
            >
              AIRBNB
            </a>
          </div>

          {/* Divider */}
          <div className="h-[1px] w-8 bg-white/10" />

          {/* Copyright */}
          <p className="font-[family-name:var(--font-sans)] text-[10px] tracking-wider text-white/50">
            © {new Date().getFullYear()} KOMÉ. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
