"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const EXPERIENCES = [
  {
    id: "terrace",
    title: "Terrace",
    titleJa: "山を望むテラス",
    desc: "アディロンダックチェアに腰を下ろし、\n目の前に広がる山々の稜線を眺める。\n何もしない贅沢がここにあります。",
    image: "/images/IMG_4598.jpg",
    alt: "テラスからの山の眺望",
    reverse: false,
  },
  {
    id: "sauna",
    title: "Sauna",
    titleJa: "プライベートサウナで、ととのう",
    desc: "天然木に包まれたプライベートサウナ。\n誰にも邪魔されない静寂の中、\nじっくりと心身を解きほぐす時間。",
    image: "/images/IMG_4604.jpg",
    alt: "天然木のプライベートサウナ室",
    reverse: true,
  },
  {
    id: "bbq",
    title: "BBQ",
    titleJa: "仲間と囲むアウトドアダイニング",
    desc: "開放的なテラスで楽しむバーベキュー。\n山の空気と炭火の香り。\n自然の中で味わう食事は、格別です。",
    image: "/images/DSC02062.jpg",
    alt: "BBQグリルと薪",
    reverse: false,
  },
  {
    id: "cooking",
    title: "Kitchen",
    titleJa: "地の食材で、自分だけの食卓",
    desc: "フル装備のキッチンで、\n地元の新鮮な食材を使った料理を。\n近隣の直売所で手に入る新鮮な野菜や\n山梨ならではの食材をお楽しみください。",
    image: "/images/DSC02109.jpg",
    alt: "充実したキッチン設備",
    reverse: true,
  },
];

function ExperienceBlock({
  exp,
  index,
}: {
  exp: (typeof EXPERIENCES)[number];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      ref={ref}
      className={`grid items-center gap-8 md:grid-cols-2 md:gap-0`}
    >
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: exp.reverse ? 30 : -30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
        className={`relative aspect-[3/2] w-full overflow-hidden ${
          exp.reverse ? "md:order-2" : "md:order-1"
        }`}
      >
        <Image
          src={exp.image}
          alt={exp.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </motion.div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.5 }}
        className={`px-4 md:px-16 lg:px-24 ${
          exp.reverse ? "md:order-1" : "md:order-2"
        }`}
      >
        <p className="font-[family-name:var(--font-serif)] text-[10px] tracking-[0.3em] text-[#6B5A42]">
          {exp.title}
        </p>
        <h3 className="mt-3 font-[family-name:var(--font-serif)] text-lg tracking-[0.1em] text-[#2D2D2D] md:text-xl">
          {exp.titleJa}
        </h3>
        <div className="my-5 h-[1px] w-8 bg-[#C4A87C]/40" />
        <p className="whitespace-pre-line font-[family-name:var(--font-sans)] text-xs font-light leading-[2.5] tracking-wider text-[#3A3A3A]/70">
          {exp.desc}
        </p>
      </motion.div>
    </div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="experience"
      ref={ref}
      className="relative bg-[#F5F0E8] py-20 md:py-44 lg:py-52"
    >
      {/* Section title */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="mb-12 text-center md:mb-20"
      >
        <p className="font-[family-name:var(--font-serif)] text-[10px] tracking-[0.4em] text-[#2D2D2D]/40">
          EXPERIENCE
        </p>
        <h2 className="mt-4 font-[family-name:var(--font-serif)] text-xl tracking-[0.15em] text-[#2D2D2D] md:text-2xl">
          ここでしかできない体験
        </h2>
      </motion.div>

      {/* Experience blocks */}
      <div className="flex flex-col gap-16 md:gap-32">
        {EXPERIENCES.map((exp, i) => (
          <ExperienceBlock key={exp.id} exp={exp} index={i} />
        ))}
      </div>
    </section>
  );
}
