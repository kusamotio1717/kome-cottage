"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

const SPACES = [
  {
    id: "living",
    label: "Living",
    labelJa: "リビング",
    image: "/images/DSC02088.jpg",
    alt: "開放的なリビング・ダイニング",
    desc: "木の温もりに包まれた開放的な空間。薪ストーブの炎を眺めながら、ゆったりとした時間を。",
  },
  {
    id: "kitchen",
    label: "Kitchen",
    labelJa: "キッチン",
    image: "/images/DSC02108.jpg",
    alt: "フル装備のキッチン",
    desc: "地元の食材を使って自分だけの食卓を。調理器具・食器類を完備しています。",
  },
  {
    id: "bedroom",
    label: "Bedroom",
    labelJa: "ベッドルーム",
    image: "/images/DSC02103.jpg",
    alt: "落ち着いたベッドルーム",
    desc: "3つのベッドルーム。自然光が差し込む静かな空間で、深い眠りを。",
  },
  {
    id: "stove",
    label: "Fireplace",
    labelJa: "薪ストーブ",
    image: "/images/DSC02085.jpg",
    alt: "薪ストーブ",
    desc: "本格薪ストーブの揺れる炎。冬の夜、特別な温もりに包まれて。",
  },
];

export default function Space() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);

  return (
    <section
      id="space"
      ref={ref}
      className="relative bg-[#2D2D2D] py-20 md:py-44 lg:py-52"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-16">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-10 text-center md:mb-16"
        >
          <p className="font-[family-name:var(--font-serif)] text-[10px] tracking-[0.4em] text-white/40">
            SPACE
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-serif)] text-xl tracking-[0.15em] text-[#F5F0E8] md:text-2xl">
            空間を味わう
          </h2>
        </motion.div>

        {/* Main image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative aspect-[4/3] w-full overflow-hidden md:aspect-[16/9]"
        >
          {SPACES.map((space, i) => (
            <div
              key={space.id}
              className={`absolute inset-0 transition-opacity duration-700 ${
                i === active ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={space.image}
                alt={space.alt}
                fill
                className="object-cover"
                sizes="100vw"
                priority={i === 0}
              />
            </div>
          ))}
        </motion.div>

        {/* Tab navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 flex flex-wrap justify-center gap-4 md:mt-10 md:gap-12"
        >
          {SPACES.map((space, i) => (
            <button
              key={space.id}
              onClick={() => setActive(i)}
              className={`group flex flex-col items-center gap-2 transition-all duration-300 ${
                i === active ? "opacity-100" : "opacity-40 hover:opacity-70"
              }`}
            >
              <span className="font-[family-name:var(--font-serif)] text-[11px] tracking-[0.2em] text-[#C4A87C]">
                {space.label}
              </span>
              <span className="font-[family-name:var(--font-sans)] text-[10px] tracking-wider text-[#F5F0E8]/60">
                {space.labelJa}
              </span>
              <div
                className={`h-[1px] w-full transition-all duration-300 ${
                  i === active ? "bg-[#C4A87C]" : "bg-white/10"
                }`}
              />
            </button>
          ))}
        </motion.div>

        {/* Description */}
        <motion.p
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-5 max-w-lg px-4 text-center font-[family-name:var(--font-sans)] text-[11px] font-light leading-[2.2] tracking-wider text-[#F5F0E8]/70 md:mt-8 md:px-0 md:text-xs"
        >
          {SPACES[active].desc}
        </motion.p>
      </div>
    </section>
  );
}
