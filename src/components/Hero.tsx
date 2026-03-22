"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const AIRBNB_URL =
  "https://www.airbnb.jp/rooms/1546821316360796611";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Photo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/images/IMG_4597.jpg)" }}
      />
      {/* Subtle dark overlay - let the photo breathe */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/60 via-[#2D2D2D]/20 to-[#2D2D2D]/10" />

      {/* Content */}
      <div className="relative flex h-full flex-col items-center justify-center px-6">
        {/* Logo — SVG already includes YAMANASHI + THE COTTAGE, TSUKIYONE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        >
          <Image
            src="/logo-white.png"
            alt="KOMÉ — THE COTTAGE, TSUKIYONE"
            width={580}
            height={280}
            priority
            className="w-[240px] md:w-[320px] lg:w-[380px]"
          />
        </motion.div>

        {/* Gold line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-10 h-[1px] w-12 bg-[#C4A87C]/60"
        />

        {/* CTA */}
        <motion.a
          href={AIRBNB_URL}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-10 border border-white/70 px-8 py-3.5 font-[family-name:var(--font-serif)] text-[11px] tracking-[0.3em] text-white transition-all duration-300 hover:bg-white hover:text-[#2D2D2D] md:px-10"
        >
          RESERVE
        </motion.a>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 md:bottom-10"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="font-[family-name:var(--font-sans)] text-[9px] tracking-[0.3em] text-white/50">
            SCROLL
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="h-8 w-[1px] bg-white/30"
          />
        </div>
      </motion.div>
    </section>
  );
}
