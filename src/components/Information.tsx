"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const INFO_ITEMS = [
  { label: "所在地", value: "山梨県南巨摩郡富士川町春米" },
  { label: "チェックイン", value: "15:00〜" },
  { label: "チェックアウト", value: "〜11:00" },
  { label: "定員", value: "最大6名" },
  { label: "間取り", value: "3ベッドルーム / 1バスルーム" },
  { label: "駐車場", value: "無料駐車場 1台" },
];

const FAQ_ITEMS = [
  {
    q: "チェックインの方法は？",
    a: "セルフチェックインとなります。事前にお送りするご案内に従って、キーボックスから鍵をお取りください。",
  },
  {
    q: "アメニティはありますか？",
    a: "シャンプー・コンディショナー・ボディソープ・タオル・ドライヤーをご用意しています。歯ブラシ・パジャマはお持ちください。",
  },
  {
    q: "食事は提供していますか？",
    a: "食事の提供はございませんが、フル装備のキッチンで自炊いただけます。近隣にスーパーマーケットもございます。",
  },
  {
    q: "サウナはありますか？",
    a: "プライベートサウナを完備しております。天然木のサウナ室で、ご滞在中いつでもお楽しみいただけます（7:00〜22:00）。",
  },
  {
    q: "BBQはできますか？",
    a: "テラスにBBQ設備を完備しております。機材は備え付けですので、食材をお持ちいただくだけでお楽しみいただけます（〜22:00）。",
  },
  {
    q: "周辺にスーパーはありますか？",
    a: "車で約10分の距離にスーパーマーケットがあります。チェックイン前のお買い物をおすすめします。",
  },
  {
    q: "ペットは連れて行けますか？",
    a: "申し訳ございませんが、ペットの同伴はご遠慮いただいております。",
  },
];

function FaqItem({ item, index }: { item: (typeof FAQ_ITEMS)[number]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="border-b border-[#2D2D2D]/10"
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="font-[family-name:var(--font-sans)] text-sm tracking-wider text-[#3A3A3A]/80">
          {item.q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="ml-4 flex-shrink-0 text-[#C4A87C]"
        >
          +
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: open ? "auto" : 0,
          opacity: open ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-5 font-[family-name:var(--font-sans)] text-xs font-light leading-[2.2] tracking-wider text-[#3A3A3A]/50">
          {item.a}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default function Information() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="information"
      ref={ref}
      className="relative bg-[#F5F0E8] py-20 md:py-44 lg:py-52"
    >
      <div className="mx-auto max-w-[1100px] px-6 md:px-12 lg:px-16">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-10 text-center md:mb-16"
        >
          <p className="font-[family-name:var(--font-serif)] text-[10px] tracking-[0.4em] text-[#2D2D2D]/40">
            INFORMATION
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-serif)] text-xl tracking-[0.15em] text-[#2D2D2D] md:text-2xl">
            ご利用案内
          </h2>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          {/* Left - Map + Info */}
          <div>
            {/* Google Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-[4/3] w-full overflow-hidden bg-[#2D2D2D]/5"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6500!2d138.4530!3d35.5680!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z5bGx5qKo55yM5Y2X5bei5pWp6YOh5a-M5aOr5bed55S65pil57Gz!5e0!3m2!1sja!2sjp!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="KOMÉ 所在地"
              />
            </motion.div>
            <a
              href="https://www.google.com/maps/search/山梨県南巨摩郡富士川町春米"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 font-[family-name:var(--font-sans)] text-[11px] tracking-wider text-[#6B5A42] transition-colors hover:text-[#8B7355]"
            >
              マップで開く
              <span className="text-[9px]">↗</span>
            </a>

            {/* Info list */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8"
            >
              {INFO_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="flex items-baseline justify-between border-b border-[#2D2D2D]/5 py-3"
                >
                  <span className="font-[family-name:var(--font-sans)] text-[11px] tracking-wider text-[#3A3A3A]/40">
                    {item.label}
                  </span>
                  <span className="font-[family-name:var(--font-sans)] text-sm tracking-wider text-[#3A3A3A]/70">
                    {item.value}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - FAQ */}
          <div>
            <p className="mb-6 font-[family-name:var(--font-serif)] text-[11px] tracking-[0.2em] text-[#6B5A42]">
              FAQ
            </p>
            {FAQ_ITEMS.map((item, i) => (
              <FaqItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
