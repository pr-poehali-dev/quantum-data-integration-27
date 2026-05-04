import { motion, useReducedMotion } from "framer-motion";

const tariffs = [
  {
    name: "Королева Чаш",
    features: [
      "4 обучающих модуля",
      "Доступ к платформе 3 месяца",
      "Сертификат об окончании обучения",
      "Методические материалы курса",
    ],
    price: "24 990 ₽",
    accent: false,
  },
  {
    name: "Верховная Жрица",
    features: [
      "5 обучающих модулей (полный курс)",
      "Доступ к платформе 6 месяцев",
      "Сертификат об окончании обучения",
      "Методические материалы курса",
      "2 групповых разбора раскладов",
      "Закрытый чат с куратором",
    ],
    price: "39 990 ₽",
    accent: true,
  },
  {
    name: "Звезда",
    features: [
      "5 обучающих модулей (полный курс)",
      "Доступ к платформе 12 месяцев",
      "Сертификат об окончании обучения",
      "Методические материалы курса",
      "4 групповых разбора раскладов",
      "Закрытый чат с куратором",
      "3 личных сессии с автором",
    ],
    price: "69 990 ₽",
    accent: false,
  },
];

const TEXT_PRIMARY = "#F5EFE0";
const TEXT_BODY = "rgba(245,239,224,0.88)";

export default function Promo() {
  const prefersReducedMotion = useReducedMotion();

  const fadeIn = (i: number) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { delay: i * 0.1, duration: 0.5 },
          viewport: { once: true, margin: "-40px" },
        };

  return (
    <section
      id="access"
      className="px-6 py-20 max-w-2xl mx-auto"
      style={{ borderTop: "1px solid rgba(27,94,75,0.2)" }}
    >
      <h2
        className="font-serif font-bold text-center mb-12 uppercase tracking-[0.08em]"
        style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", color: TEXT_PRIMARY }}
      >
        Тарифы:
      </h2>

      <div className="space-y-6">
        {tariffs.map((t, i) => (
          <motion.div
            key={i}
            {...fadeIn(i)}
            className="relative p-8"
            style={{
              background: t.accent
                ? "linear-gradient(135deg, rgba(15,61,46,0.5) 0%, rgba(27,94,75,0.2) 100%)"
                : "rgba(255,255,255,0.03)",
              border: t.accent
                ? "1px solid rgba(201,168,76,0.5)"
                : "1px solid rgba(201,168,76,0.15)",
            }}
          >
            {t.accent && (
              <div
                className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs uppercase tracking-widest font-bold"
                style={{ background: "var(--color-gold)", color: "#0b0b0b" }}
              >
                Популярный
              </div>
            )}

            <div className="flex items-center gap-3 mb-6">
              <span style={{ color: "var(--color-gold)", fontSize: "20px" }}>◎</span>
              <h3
                className="font-serif font-bold uppercase tracking-widest text-lg"
                style={{ color: TEXT_PRIMARY }}
              >
                {t.name}
              </h3>
            </div>

            <ul className="space-y-3 mb-8">
              {t.features.map((f, j) => (
                <li key={j} className="flex gap-3 items-start text-sm" style={{ color: TEXT_BODY }}>
                  <span style={{ color: "var(--color-gold)", flexShrink: 0 }}>✦</span>
                  {f}
                </li>
              ))}
            </ul>

            <div
              className="h-px mb-6"
              style={{ backgroundColor: "rgba(201,168,76,0.15)" }}
            />

            <div className="mb-6">
              <div
                className="text-xs uppercase tracking-widest mb-1"
                style={{ color: "var(--color-gold)", opacity: 0.6 }}
              >
                Стоимость:
              </div>
              <div
                className="font-serif font-bold"
                style={{ fontSize: "clamp(1.8rem, 5vw, 2.4rem)", color: TEXT_PRIMARY }}
              >
                {t.price}
              </div>
            </div>

            <a
              href="#"
              className="block w-full text-center py-4 text-sm uppercase tracking-[0.2em] font-bold transition-all duration-300 hover:brightness-110"
              style={
                t.accent
                  ? {
                      background: "linear-gradient(135deg, #c9a84c 0%, #e8c84a 50%, #c9a84c 100%)",
                      color: "#0b0b0b",
                      boxShadow: "0 4px 30px rgba(201,168,76,0.35)",
                    }
                  : {
                      background: "transparent",
                      color: "var(--color-gold)",
                      border: "1px solid rgba(201,168,76,0.5)",
                    }
              }
            >
              Купить
            </a>
          </motion.div>
        ))}
      </div>

      <p
        className="text-center text-sm mt-8 opacity-50"
        style={{ color: TEXT_BODY }}
      >
        Возможна оплата частями · Доступ сразу после оплаты
      </p>
    </section>
  );
}
