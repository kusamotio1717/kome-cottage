"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AIRBNB_URL =
  "https://www.airbnb.jp/rooms/1546821316360796611";

export default function Booking() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#2D2D2D] py-20 md:py-44 lg:py-52"
    >
      {/* Background image with heavy overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{ backgroundImage: "url(/images/IMG_4596.jpg)" }}
      />
      <div className="absolute inset-0 bg-[#2D2D2D]/40" />

      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="font-[family-name:var(--font-serif)] text-[10px] tracking-[0.4em] text-white/50"
        >
          RESERVATION
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 font-[family-name:var(--font-serif)] text-xl leading-[2] tracking-[0.15em] text-[#F5F0E8] md:text-3xl"
        >
          あなただけの時間を、
          <br />
          ここで。
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mx-auto my-8 h-[1px] w-12 bg-[#C4A87C]/40"
        />

        <motion.a
          href={AIRBNB_URL}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="inline-block border border-[#C4A87C] px-8 py-4 font-[family-name:var(--font-serif)] text-[11px] tracking-[0.25em] text-[#C4A87C] transition-all duration-300 hover:bg-[#C4A87C] hover:text-[#2D2D2D] md:px-12 md:text-xs md:tracking-[0.3em]"
        >
          RESERVE ON AIRBNB
        </motion.a>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-8 font-[family-name:var(--font-sans)] text-[10px] tracking-wider text-white/40"
        >
          ※ Airbnbの予約ページに移動します
        </motion.p>
      </div>
    </section>
  );
}
