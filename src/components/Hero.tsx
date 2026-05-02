import { useScroll, useTransform, motion, useReducedMotion } from "framer-motion";
import { useRef } from "react";

const HERO_IMG =
  "https://cdn.poehali.dev/projects/d3eb11a1-1c27-44d1-b140-7a765845e189/files/41796228-d3d9-49af-bf0e-f0d105e2f3e0.jpg";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  // При prefers-reduced-motion — статика, без параллакса
  const y = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? ["0vh", "0vh"] : ["0vh", "40vh"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ backgroundColor: "var(--color-obsidian)" }}
    >
      {/* LCP-изображение: fetchpriority=high, eager load, no lazy */}
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full will-change-transform">
        <img
          src={HERO_IMG}
          alt=""
          role="presentation"
          fetchPriority="high"
          decoding="async"
          loading="eager"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          style={{ contentVisibility: "auto" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(11,11,11,0.3) 0%, rgba(11,11,11,0.1) 40%, rgba(11,11,11,0.7) 80%, rgba(11,11,11,1) 100%)",
          }}
        />
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
          className="font-serif font-bold mb-6 leading-[1.1]"
          style={{ fontSize: "clamp(2.8rem, 7vw, 6rem)", color: "#F5EFE0" }}
        >
          Ты чувствуешь больше,
          <br />
          <em className="font-normal italic">чем видишь.</em>
          <br />
          <span style={{ color: "var(--color-gold)" }}>Научись читать это.</span>
        </h1>

        <p
          className="text-xl md:text-2xl max-w-2xl mx-auto mb-12 leading-relaxed font-light"
          style={{ color: "rgba(245,239,224,0.9)" }}
        >
          Не просто карты. Система, которая открывает доступ к интуиции,
          <br className="hidden md:block" /> энергии и реальности.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#access"
            className="px-10 py-4 text-sm uppercase tracking-widest transition-opacity duration-300 font-medium hover:opacity-80"
            style={{
              background:
                "linear-gradient(135deg, var(--color-emerald-deep), var(--color-emerald-mid))",
              color: "#F0EAD8",
              boxShadow: "0 0 30px rgba(27,94,75,0.4)",
            }}
          >
            Получить доступ
          </a>
          <a
            href="#program"
            className="px-10 py-4 text-sm uppercase tracking-widest border transition-colors duration-300 hover:bg-white/5"
            style={{ borderColor: "rgba(201,168,76,0.4)", color: "rgba(201,168,76,0.8)" }}
          >
            Программа курса
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <div
            className="w-px h-12"
            style={{
              background: "linear-gradient(to bottom, transparent, var(--color-gold))",
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}