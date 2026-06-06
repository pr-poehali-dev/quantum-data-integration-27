import { motion, useReducedMotion } from "framer-motion";

const programDescription =
  "Это практика для тех, кто хочет не просто познакомиться с таро, а научиться видеть глубже, понимать структуру расклада, развивать интуицию и работать с картами осознанно, уверенно и профессионально. Здесь вы получаете не хаотичный набор знаний, а выстроенную систему, где каждый формат ведёт вас от первых шагов к более глубокому пониманию таро.";

const results = [
  "Понятную и структурированную систему работы с картами",
  "Глубокое знакомство с таро",
  "Развитие интуиции и внутренней опоры",
  "Навык самостоятельной работы с картами",
  "Поддержку на каждом этапе пути",
  "Формат, который можно выбрать под свой темп и глубину погружения",
];

const forWhom = [
  "Для тех, кто только начинает знакомство с таро",
  "Для тех, кто уже работает с картами, но хочет больше структуры",
  "Для тех, кто хочет развить интуицию и уверенность",
  "Для тех, кому нужен не поверхностный курс, а глубокая система",
  "Для тех, кто хочет получать не только знания, но и практический результат",
];

const tariffs = [
  {
    name: "База",
    subtitle: "Подходит тем, кто хочет начать с прочной основы и двигаться самостоятельно",
    features: [
      "Полный комплект авторских материалов для самостоятельной работы",
      "Знакомство с основами и логикой системы",
      "Пошаговое погружение в тему таро",
      "Возможность работать в комфортном темпе",
      "Бессрочный доступ ко всем материалам формата",
    ],
    result: "Вы получаете уверенное базовое понимание системы, структуру для самостоятельной работы и основу, на которой можно строить дальнейший путь.",
    price: "13 000 ₽",
    payUrl: "https://payform.ru/rdbHyCQ/",
    accent: false,
  },
  {
    name: "Глубина",
    subtitle: "Подходит тем, кто хочет не просто знакомиться с картами, а действительно осваивать таро в практике",
    features: [
      "Всё из формата «База»",
      "Расширенная система погружения",
      "Домашние задания для закрепления",
      "Проверка заданий с личной обратной связью",
      "Практики по раскрытию интуиции",
      "Практики по защите в процессе работы с картами",
      "Более глубокое понимание карт, связей и внутренних процессов",
    ],
    result: "Вы начинаете чувствовать карты увереннее, глубже понимать их смысл, развивать интуицию и получать поддержку на каждом шаге.",
    price: "33 000 ₽",
    payUrl: "https://payform.ru/mqbGC3m/",
    accent: false,
  },
  {
    name: "Личное сопровождение",
    subtitle: "Подходит тем, кто хочет двигаться быстро, глубоко и с личной обратной связью",
    features: [
      "Всё из форматов «База» и «Глубина»",
      "Полный доступ ко всем авторским материалам",
      "Задания и их личная проверка",
      "Практики по раскрытию интуиции",
      "Практики по защите в процессе работы с картами",
      "4 личных созвона в месяц (раз в неделю)",
      "Углубленная персональная работа с автором",
      "Поддержка, разборы и сопровождение на каждом этапе",
      "Подарок: авторская практика по диагностике негатива на классической колоде Уэйта",
    ],
    result: "Вы проходите путь в интенсивном формате, быстрее растёте в понимании таро, получаете персональное сопровождение и движетесь к уверенной самостоятельной практике.",
    price: "69 000 ₽",
    payUrl: "https://payform.ru/bqbGBXv/",
    accent: true,
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
      <motion.div {...fadeIn(0)}>
        <h2
          className="font-serif font-bold text-center mb-6 uppercase tracking-[0.08em]"
          style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", color: TEXT_PRIMARY }}
        >
          Секреты Мистер Таро
        </h2>
        <p className="text-center text-sm leading-relaxed mb-16" style={{ color: TEXT_BODY }}>
          {programDescription}
        </p>
      </motion.div>

      <div className="space-y-6 mb-16">
        {tariffs.map((t, i) => (
          <motion.div
            key={i}
            {...fadeIn(i + 1)}
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

            <div className="flex items-center gap-3 mb-2">
              <span style={{ color: "var(--color-gold)", fontSize: "20px" }}>◎</span>
              <h3
                className="font-serif font-bold uppercase tracking-widest text-lg"
                style={{ color: TEXT_PRIMARY }}
              >
                {t.name}
              </h3>
            </div>

            <p className="text-xs italic mb-6 pl-8" style={{ color: TEXT_BODY, opacity: 0.7 }}>
              {t.subtitle}
            </p>

            <ul className="space-y-3 mb-6">
              {t.features.map((f, j) => (
                <li key={j} className="flex gap-3 items-start text-sm" style={{ color: TEXT_BODY }}>
                  <span style={{ color: "var(--color-gold)", flexShrink: 0 }}>✦</span>
                  {f}
                </li>
              ))}
            </ul>

            {t.result && (
              <div
                className="text-xs italic mb-6 p-4 leading-relaxed"
                style={{ color: TEXT_BODY, background: "rgba(201,168,76,0.06)", borderLeft: "2px solid rgba(201,168,76,0.3)" }}
              >
                <span style={{ color: "var(--color-gold)", fontStyle: "normal" }}>Результат: </span>
                {t.result}
              </div>
            )}

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
              href={t.payUrl}
              target="_blank"
              rel="noopener noreferrer"
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
              Получить доступ
            </a>
          </motion.div>
        ))}
      </div>

      <motion.div {...fadeIn(4)} className="mb-16">
        <h3
          className="font-serif font-bold uppercase tracking-widest text-base mb-6"
          style={{ color: TEXT_PRIMARY }}
        >
          Что вы получите в итоге
        </h3>
        <ul className="space-y-3">
          {results.map((r, i) => (
            <li key={i} className="flex gap-3 items-start text-sm" style={{ color: TEXT_BODY }}>
              <span style={{ color: "var(--color-gold)", flexShrink: 0 }}>✦</span>
              {r}
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div {...fadeIn(5)}>
        <h3
          className="font-serif font-bold uppercase tracking-widest text-base mb-6"
          style={{ color: TEXT_PRIMARY }}
        >
          Для кого эта программа
        </h3>
        <ul className="space-y-3">
          {forWhom.map((r, i) => (
            <li key={i} className="flex gap-3 items-start text-sm" style={{ color: TEXT_BODY }}>
              <span style={{ color: "var(--color-gold)", flexShrink: 0 }}>◎</span>
              {r}
            </li>
          ))}
        </ul>
      </motion.div>

      <p
        className="text-center text-sm mt-12 opacity-50"
        style={{ color: TEXT_BODY }}
      >
        Возможна оплата частями · Доступ сразу после оплаты
      </p>
    </section>
  );
}