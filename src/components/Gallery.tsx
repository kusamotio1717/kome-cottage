"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useCallback, useEffect } from "react";

const GALLERY_IMAGES = [
  { src: "/images/DSC02088.jpg", alt: "開放的なリビング・ダイニング", span: "col-span-2 md:col-span-2", aspect: "aspect-[3/2]" },
  { src: "/images/IMG_4593.jpg", alt: "コテージ外観", span: "", aspect: "aspect-square" },
  { src: "/images/DSC02090.jpg", alt: "ステンドグラスのあるリビング", span: "", aspect: "aspect-square" },
  { src: "/images/IMG_4597.jpg", alt: "テラスと山の眺望", span: "", aspect: "aspect-square" },
  { src: "/images/DSC02087.jpg", alt: "薪ストーブのディテール", span: "", aspect: "aspect-square" },
  { src: "/images/IMG_4595.jpg", alt: "コテージ外観 — 赤い屋根", span: "", aspect: "aspect-square" },
  { src: "/images/DSC02105.jpg", alt: "自然光の差し込むダイニング", span: "", aspect: "aspect-square" },
  { src: "/images/DSC02091.jpg", alt: "ダイニングとキッチン", span: "col-span-2 md:col-span-2", aspect: "aspect-[3/2]" },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [lightbox, setLightbox] = useState<number | null>(null);

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (lightbox === null) return;
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight")
        setLightbox((prev) =>
          prev !== null ? (prev + 1) % GALLERY_IMAGES.length : null
        );
      if (e.key === "ArrowLeft")
        setLightbox((prev) =>
          prev !== null
            ? (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length
            : null
        );
    },
    [lightbox]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  return (
    <section
      id="gallery"
      ref={ref}
      className="relative bg-[#FAF9F6] py-20 md:py-44 lg:py-52"
    >
      {/* Section title */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="mb-8 text-center md:mb-16"
      >
        <p className="font-[family-name:var(--font-serif)] text-[10px] tracking-[0.4em] text-[#2D2D2D]/40">
          GALLERY
        </p>
      </motion.div>

      {/* Bento Grid */}
      <div className="mx-auto max-w-[1200px] px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3">
          {GALLERY_IMAGES.map((img, i) => (
            <motion.button
              key={img.src}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
              onClick={() => setLightbox(i)}
              className={`group relative overflow-hidden ${img.aspect} ${img.span}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={() => setLightbox(null)}
          >
            {/* Close button */}
            <button
              onClick={() => setLightbox(null)}
              className="absolute right-6 top-6 font-[family-name:var(--font-sans)] text-sm text-white/60 transition-colors hover:text-white"
            >
              ✕
            </button>

            {/* Image */}
            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative h-[80vh] w-[90vw] max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={GALLERY_IMAGES[lightbox].src}
                alt={GALLERY_IMAGES[lightbox].alt}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </motion.div>

            {/* Navigation */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightbox(
                  (lightbox - 1 + GALLERY_IMAGES.length) %
                    GALLERY_IMAGES.length
                );
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-4 text-2xl text-white/40 transition-colors hover:text-white"
            >
              ‹
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightbox((lightbox + 1) % GALLERY_IMAGES.length);
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-4 text-2xl text-white/40 transition-colors hover:text-white"
            >
              ›
            </button>

            {/* Counter */}
            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 font-[family-name:var(--font-sans)] text-xs text-white/30">
              {lightbox + 1} / {GALLERY_IMAGES.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
