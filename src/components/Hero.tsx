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

  const y = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? ["0vh", "0vh"] : ["0vh", "40vh"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ backgroundColor: "var(--color-obsidian)" }}
    >
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
          style={{ filter: "brightness(0.55) saturate(0.9)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(11,11,11,0.25) 0%, rgba(11,11,11,0.05) 35%, rgba(11,11,11,0.65) 75%, rgba(11,11,11,1) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 60%, rgba(15,61,46,0.3) 0%, transparent 65%)",
          }}
        />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 text-center px-6 max-w-lg mx-auto w-full">
        <div
          className="font-serif text-4xl sm:text-5xl font-bold tracking-[0.18em] uppercase mb-2"
          style={{ color: "#F5EFE0", textShadow: "0 2px 20px rgba(0,0,0,0.6)" }}
        >
          Искусство Таро
        </div>

        <div
          className="flex items-center justify-center gap-3 mb-8"
          style={{ color: "var(--color-gold)" }}
        >
          <div className="h-px flex-1 opacity-50" style={{ backgroundColor: "var(--color-gold)" }} />
          <span className="text-xs uppercase tracking-[0.3em] opacity-80">Онлайн-курс</span>
          <div className="h-px flex-1 opacity-50" style={{ backgroundColor: "var(--color-gold)" }} />
        </div>

        <p
          className="text-base sm:text-lg leading-relaxed mb-10 font-light"
          style={{ color: "rgba(245,239,224,0.88)" }}
        >
          Раскрой интуицию<br />
          и <strong style={{ color: "#F5EFE0" }}>научись видеть больше, чем другие</strong><br />
          с помощью карт Таро
        </p>

        <a
          href="#access"
          className="inline-block w-full max-w-xs px-8 py-4 text-sm uppercase tracking-[0.2em] font-bold transition-all duration-300 hover:brightness-110 text-center"
          style={{
            background: "linear-gradient(135deg, #c9a84c 0%, #e8c84a 50%, #c9a84c 100%)",
            color: "#0b0b0b",
            boxShadow: "0 4px 30px rgba(201,168,76,0.4)",
            letterSpacing: "0.2em",
          }}
        >
          Смотреть тарифы
        </a>

        <div className="mt-8 flex flex-col items-center gap-2 opacity-40">
          <div
            className="w-px h-10"
            style={{
              background: "linear-gradient(to bottom, transparent, var(--color-gold))",
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}