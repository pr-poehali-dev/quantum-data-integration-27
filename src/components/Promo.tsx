import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="https://cdn.poehali.dev/projects/d3eb11a1-1c27-44d1-b140-7a765845e189/files/ea266067-d923-4830-8b17-700d76dc525a.jpg"
            alt="Мистические символы Таро"
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.5) saturate(1.2)" }}
          />
          {/* Изумрудный градиент поверх */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, rgba(15,61,46,0.4) 0%, rgba(11,11,11,0.6) 70%)",
            }}
          />
        </motion.div>
      </div>

      <h3
        className="absolute top-12 right-6 uppercase z-10 text-xs md:text-sm tracking-[0.3em] opacity-60"
        style={{ color: "var(--color-gold)" }}
      >
        Закрытое пространство
      </h3>

      <p
        className="absolute bottom-12 right-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl z-10 font-serif font-light leading-tight"
        style={{ color: "#F0EAD8" }}
      >
        Таро — это не предсказание будущего.{" "}
        <em style={{ color: "var(--color-gold)" }}>
          Это разговор с той частью себя, которая уже знает.
        </em>
      </p>
    </div>
  );
}
