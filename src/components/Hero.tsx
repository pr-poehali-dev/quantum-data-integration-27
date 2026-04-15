import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ backgroundColor: "var(--color-obsidian)" }}
    >
      {/* Фоновое изображение с параллаксом */}
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
        <img
          src="https://cdn.poehali.dev/projects/d3eb11a1-1c27-44d1-b140-7a765845e189/files/41796228-d3d9-49af-bf0e-f0d105e2f3e0.jpg"
          alt="Таро — мистическая атмосфера"
          className="w-full h-full object-cover"
        />
        {/* Многослойный тёмный оверлей */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(11,11,11,0.3) 0%, rgba(11,11,11,0.1) 40%, rgba(11,11,11,0.7) 80%, rgba(11,11,11,1) 100%)",
          }}
        />
        {/* Изумрудное туманное свечение */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 60%, rgba(15,61,46,0.35) 0%, transparent 65%)",
          }}
        />
      </motion.div>

      {/* Контент */}
      <motion.div style={{ opacity }} className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Декоративная линия */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px w-16 opacity-50" style={{ backgroundColor: "var(--color-gold)" }} />
          <span
            className="text-xs uppercase tracking-[0.3em] opacity-70"
            style={{ color: "var(--color-gold)" }}
          >
            Онлайн-курс
          </span>
          <div className="h-px w-16 opacity-50" style={{ backgroundColor: "var(--color-gold)" }} />
        </div>

        <h1
          className="font-serif font-light mb-6 leading-[1.1]"
          style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)", color: "#F0EAD8" }}
        >
          Ты чувствуешь больше,
          <br />
          <em>чем видишь.</em>
          <br />
          <span style={{ color: "var(--color-gold)" }}>Научись читать это.</span>
        </h1>

        <p
          className="text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light"
          style={{ color: "rgba(240,234,216,0.65)" }}
        >
          Не просто карты. Система, которая открывает доступ к интуиции,
          <br className="hidden md:block" /> энергии и реальности.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#access"
            className="px-10 py-4 text-sm uppercase tracking-widest transition-all duration-500 font-medium hover:opacity-90"
            style={{
              background: "linear-gradient(135deg, var(--color-emerald-deep), var(--color-emerald-mid))",
              color: "#F0EAD8",
              boxShadow: "0 0 30px rgba(27,94,75,0.4)",
            }}
          >
            Получить доступ
          </a>
          <a
            href="#program"
            className="px-10 py-4 text-sm uppercase tracking-widest border transition-all duration-300 hover:bg-white/5"
            style={{ borderColor: "rgba(201,168,76,0.4)", color: "rgba(201,168,76,0.8)" }}
          >
            Программа курса
          </a>
        </div>

        {/* Скролл-индикатор */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <div className="w-px h-12" style={{ background: "linear-gradient(to bottom, transparent, var(--color-gold))" }} />
        </div>
      </motion.div>
    </div>
  );
}
