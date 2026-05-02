import { motion, useReducedMotion } from "framer-motion";

const CARD_IMG =
  "https://cdn.poehali.dev/projects/d3eb11a1-1c27-44d1-b140-7a765845e189/files/41796228-d3d9-49af-bf0e-f0d105e2f3e0.jpg";
const SPEAKER_IMG =
  "https://cdn.poehali.dev/projects/d3eb11a1-1c27-44d1-b140-7a765845e189/files/2ade5d25-9c25-4740-a56d-9098c6ce43ab.jpg";

const painPoints = [
  "Учишь значения карт, но не чувствуешь их — знания есть, ощущения нет",
  "Сомневаешься в себе при каждом раскладе — «а вдруг я ошибаюсь?»",
  "Расклады не дают точности — видишь карты, но не видишь смысл",
  "Боишься ошибиться и навредить — себе или тому, кому раскидываешь",
];

const results = [
  "Читаешь карты без шаблонов — через ощущение, а не заучивание",
  "Доверяешь себе и своей интуиции без страха и сомнений",
  "Видишь глубже — за символами открывается живая система",
  "Можешь зарабатывать на Таро, помогая другим",
];

const modules = [
  { num: "01", title: "Основы Таро", desc: "Структура колоды, история, принципы работы с картами" },
  { num: "02", title: "Старшие и Младшие Арканы", desc: "Глубокое погружение в символику и архетипы" },
  { num: "03", title: "Расклады", desc: "Классические и авторские расклады для разных запросов" },
  { num: "04", title: "Интуиция", desc: "Развитие чувствования — как слышать карты, а не читать их" },
  { num: "05", title: "Энергетика", desc: "Работа с энергией карт, пространством и клиентом" },
  { num: "06", title: "Ритуалы", desc: "Очищение колоды, подготовка к сессии, защитные практики" },
  { num: "07", title: "Заработок на Таро", desc: "Как монетизировать знания и выстроить практику" },
];

const TEXT_PRIMARY = "#F5EFE0";
const TEXT_BODY = "rgba(245,239,224,0.88)";
const TEXT_MUTED = "rgba(245,239,224,0.6)";

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="h-px w-10" style={{ backgroundColor: "var(--color-gold)" }} />
      <span className="text-xs uppercase tracking-widest font-bold" style={{ color: "var(--color-gold)" }}>
        {children}
      </span>
    </div>
  );
}

function CenterLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center justify-center gap-4 mb-6">
      <div className="h-px w-16 opacity-60" style={{ backgroundColor: "var(--color-gold)" }} />
      <span className="text-xs uppercase tracking-[0.3em] font-bold" style={{ color: "var(--color-gold)" }}>
        {children}
      </span>
      <div className="h-px w-16 opacity-60" style={{ backgroundColor: "var(--color-gold)" }} />
    </div>
  );
}

export default function Featured() {
  const prefersReducedMotion = useReducedMotion();

  const fadeIn = (i: number) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          transition: { delay: i * 0.07, duration: 0.5 },
          viewport: { once: true, margin: "-40px" },
        };

  return (
    <div style={{ backgroundColor: "var(--color-obsidian)" }}>

      {/* БЛОК БОЛИ */}
      <section
        className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-20 lg:py-0"
        style={{ borderTop: "1px solid rgba(27,94,75,0.2)" }}
      >
        <div className="flex-1 h-[400px] lg:h-[800px] mb-12 lg:mb-0 lg:order-2 relative overflow-hidden">
          <img
            src={CARD_IMG}
            alt=""
            role="presentation"
            loading="lazy"
            decoding="async"
            width={960}
            height={1280}
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.6) saturate(0.8)" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to right, var(--color-obsidian) 0%, transparent 40%)",
            }}
          />
        </div>

        <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-16 lg:order-1 max-w-xl">
          <SectionLabel>Узнаёшь себя?</SectionLabel>
          <h2
            className="font-serif font-bold mb-10 leading-tight"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.8rem)", color: TEXT_PRIMARY }}
          >
            Почему у тебя<br />
            <em className="font-normal italic">не получается</em>
          </h2>
          <ul className="space-y-5">
            {painPoints.map((point, i) => (
              <motion.li key={i} {...fadeIn(i)} className="flex gap-4 items-start">
                <span
                  className="mt-1 shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs"
                  style={{
                    backgroundColor: "rgba(15,61,46,0.6)",
                    border: "1px solid rgba(27,94,75,0.5)",
                    color: "var(--color-gold)",
                  }}
                >
                  ✦
                </span>
                <span className="text-base leading-relaxed" style={{ color: TEXT_BODY }}>
                  {point}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* БЛОК РЕШЕНИЯ */}
      <section
        className="relative px-6 py-32 text-center overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, var(--color-emerald-deep) 0%, var(--color-obsidian) 60%)",
          borderTop: "1px solid rgba(27,94,75,0.3)",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(27,94,75,0.2) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <CenterLabel>Этот курс — не про карты</CenterLabel>
          <h2
            className="font-serif font-bold mb-6 leading-tight"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4.2rem)", color: TEXT_PRIMARY }}
          >
            Это про состояние,
            <br />
            <em className="font-normal italic" style={{ color: "var(--color-gold)" }}>
              в котором ты начинаешь видеть глубже
            </em>
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: TEXT_BODY }}>
            Таро — это язык. Когда ты научишься говорить на нём, карты перестают быть картинками.
            Они становятся зеркалом — точным, честным и живым.
          </p>
        </div>
      </section>

      {/* БЛОК О СПИКЕРЕ */}
      <section
        className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-20 lg:py-0"
        style={{ borderTop: "1px solid rgba(27,94,75,0.2)" }}
      >
        <div className="flex-1 h-[400px] lg:h-[700px] mb-12 lg:mb-0 relative overflow-hidden">
          <img
            src={SPEAKER_IMG}
            alt="Мастер Таро"
            loading="lazy"
            decoding="async"
            width={960}
            height={1280}
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.75)" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to left, var(--color-obsidian) 0%, transparent 40%)",
            }}
          />
        </div>

        <div className="flex-1 text-left lg:h-[700px] flex flex-col justify-center lg:ml-16 max-w-xl">
          <SectionLabel>Проводник</SectionLabel>
          <h2
            className="font-serif font-bold mb-6 leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", color: TEXT_PRIMARY }}
          >
            Я не учу Таро.
            <br />
            <em className="font-normal italic">Я открываю путь</em>
          </h2>
          <p className="text-base leading-relaxed mb-4" style={{ color: TEXT_BODY }}>
            Более 8 лет я работаю с Таро как живой системой — не как набором значений, а как способом
            читать реальность. За эти годы прошли сотни личных сессий, закрытых практик и групповых
            погружений.
          </p>
          <p className="text-base leading-relaxed mb-8" style={{ color: TEXT_BODY }}>
            Мой путь начался не с книг, а с вопросов без ответов. Таро дало мне язык для того,
            что я уже чувствовала. Теперь я передаю этот язык тебе.
          </p>
          <div
            className="border-l-2 pl-5 py-2"
            style={{ borderColor: "var(--color-emerald-mid)", color: TEXT_MUTED }}
          >
            <p className="text-sm italic">
              Закрытый канал · Личные практики · Живое сопровождение
            </p>
          </div>
        </div>
      </section>

      {/* ПРОГРАММА КУРСА */}
      <section
        id="program"
        className="px-6 py-32"
        style={{
          borderTop: "1px solid rgba(27,94,75,0.2)",
          background:
            "linear-gradient(to bottom, var(--color-obsidian), rgba(15,61,46,0.08), var(--color-obsidian))",
        }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <CenterLabel>7 модулей</CenterLabel>
            <h2
              className="font-serif font-bold"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", color: TEXT_PRIMARY }}
            >
              Программа курса
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {modules.map((module, i) => (
              <motion.div
                key={i}
                {...fadeIn(i)}
                className="p-6 transition-colors duration-300 hover:bg-white/[0.03] group cursor-default"
                style={{
                  border: "1px solid rgba(27,94,75,0.25)",
                  background: "rgba(15,61,46,0.05)",
                }}
              >
                <div
                  className="text-4xl font-serif font-bold mb-3 opacity-40 group-hover:opacity-60 transition-opacity duration-300"
                  style={{ color: "var(--color-gold)" }}
                >
                  {module.num}
                </div>
                <h3 className="font-serif font-bold text-xl mb-2" style={{ color: TEXT_PRIMARY }}>
                  {module.title}
                </h3>
                <p className="text-sm" style={{ color: TEXT_MUTED }}>
                  {module.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* РЕЗУЛЬТАТЫ */}
      <section
        className="px-6 py-32"
        style={{ borderTop: "1px solid rgba(27,94,75,0.2)" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <CenterLabel>Результат</CenterLabel>
            <h2
              className="font-serif font-bold"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", color: TEXT_PRIMARY }}
            >
              После курса ты
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
            {results.map((result, i) => (
              <motion.div
                key={i}
                {...fadeIn(i)}
                className="p-8 text-center"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(15,61,46,0.2) 0%, rgba(11,11,11,0.5) 100%)",
                  border: "1px solid rgba(27,94,75,0.3)",
                }}
              >
                <div className="text-3xl mb-4" style={{ color: "var(--color-gold)" }}>
                  ✦
                </div>
                <p className="text-base leading-relaxed font-bold" style={{ color: TEXT_PRIMARY }}>
                  {result}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div
            id="access"
            className="text-center py-16 px-8"
            style={{
              background:
                "linear-gradient(135deg, rgba(15,61,46,0.3), rgba(11,11,11,0.8))",
              border: "1px solid rgba(27,94,75,0.4)",
            }}
          >
            <h3
              className="font-serif font-bold mb-4"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", color: TEXT_PRIMARY }}
            >
              Готова войти?
            </h3>
            <p className="mb-8 text-lg" style={{ color: TEXT_MUTED }}>
              Доступ — ограничен. Места открываются редко.
            </p>
            <a
              href="#access"
              className="inline-block px-12 py-5 text-base uppercase tracking-widest font-bold transition-opacity duration-300 hover:opacity-80"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-emerald-deep), var(--color-emerald-mid))",
                color: TEXT_PRIMARY,
                boxShadow: "0 0 40px rgba(27,94,75,0.5)",
              }}
            >
              Получить доступ
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
