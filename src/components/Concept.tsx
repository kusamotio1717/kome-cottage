"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Concept() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="concept"
      ref={ref}
      className="relative bg-[#F5F0E8] py-20 md:py-44 lg:py-52"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-12 lg:px-16">
        {/* Section title - vertical on desktop */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.35 } : {}}
          transition={{ duration: 1 }}
          className="mb-8 font-[family-name:var(--font-serif)] text-[10px] tracking-[0.4em] text-[#2D2D2D] md:absolute md:left-8 md:top-44 md:mb-0 md:origin-top-left md:-rotate-90 lg:left-12"
        >
          CONCEPT
        </motion.p>

        <div className="grid gap-8 md:grid-cols-2 md:gap-16 lg:gap-24">
          {/* Left - Text */}
          <div className="flex flex-col justify-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-[family-name:var(--font-serif)] text-2xl leading-[2] tracking-[0.08em] text-[#2D2D2D] md:text-3xl lg:text-4xl"
            >
              自然に抱かれ、
              <br />
              静かに過ごす贅沢。
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="my-8 h-[1px] w-12 origin-left bg-[#C4A87C]"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="font-[family-name:var(--font-sans)] text-sm font-light leading-[2.5] tracking-wider text-[#3A3A3A]/70"
            >
              山梨県富士川町、月夜根の集落に佇む一棟貸しのコテージ。
              <br />
              薪ストーブの揺れる炎、ステンドグラスから差し込む光、
              <br />
              テラスから望む山々の稜線。
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mt-4 font-[family-name:var(--font-sans)] text-sm font-light leading-[2.5] tracking-wider text-[#3A3A3A]/70"
            >
              ここには、ただ静かに流れる時間があります。
              <br />
              最大6名。大切な人と過ごす、あなただけの場所。
            </motion.p>
          </div>

          {/* Right - Photo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative aspect-[3/2] overflow-hidden md:aspect-[4/5]"
          >
            <Image
              src="/images/DSC02094.jpg"
              alt="リビングルーム — 薪ストーブと木の温もり"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
