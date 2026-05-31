import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

const SPEAKER_IMG =
  "https://cdn.poehali.dev/projects/d3eb11a1-1c27-44d1-b140-7a765845e189/files/2ade5d25-9c25-4740-a56d-9098c6ce43ab.jpg";

const speakerStats = [
  "Таролог с 10-летним стажем",
  "Создательница и владелица эзотерического магазина и пространства в Сочи — Misteria",
  "Создатель и главный ректор Misteria University",
  "Автор закрытого Telegram-канала",
];

const forWhomPoints = [
  {
    bold: "Ты всегда находишься в поисках себя",
    rest: ", своей миссии, своего предназначения",
  },
  {
    bold: "Хочешь видеть людей насквозь",
    rest: ", чувствовать и знать, что их ждёт в будущем",
  },
  {
    bold: "С детства тебя тянуло к фильмам про магию",
    rest: ", природным местам силы, животным",
  },
  {
    bold: "Иногда ты точно знаешь, как правильно поступить",
    rest: ", но не понимаешь откуда это чувство",
  },
  {
    bold: "Тебе хочется знать, что ждёт твоих близких",
    rest: " и у тебя есть желание помогать им",
  },
  {
    bold: "Ты хочешь освоить новую профессию",
    rest: " и выйти на доход от 100.000 руб.",
  },
];

const modules = [
  { num: "1", title: "Введение в Таро: база, смысл и подход", lessons: [], bonus: [], result: "" },
  { num: "2", title: "Структура колоды и логика Арканов", lessons: [], bonus: [], result: "" },
  { num: "3", title: "Старшие Арканы: путь героя", lessons: [], bonus: [], result: "" },
  { num: "4", title: "Младшие Арканы: структура и смысл повседневности", lessons: [], bonus: [], result: "" },
  { num: "5", title: "Масти: стихии и характер процессов", lessons: [], bonus: [], result: "" },
  { num: "6", title: "Придворные карты: люди, роли и проявления", lessons: [], bonus: [], result: "" },
  { num: "7", title: "Ситуационные карты: от Туза до Десятки", lessons: [], bonus: [], result: "" },
  { num: "8", title: "Каждая карта отдельно: мои значения, наработки и опыт", lessons: [], bonus: [], result: "" },
  { num: "9", title: "Как читать карты: символы, детали и смысл", lessons: [], bonus: [], result: "" },
  { num: "10", title: "Интуиция и собственный стиль чтения", lessons: [], bonus: [], result: "" },
  { num: "11", title: "Практика раскладов", lessons: [], bonus: [], result: "" },
  { num: "12", title: "Разбор готовых раскладов", lessons: [], bonus: [], result: "" },
  { num: "13", title: "Итоговый модуль: систематизация и путь дальше", lessons: [], bonus: [], result: "" },
  { num: "★", title: "Бонусный модуль: Логика, ритуальная часть и профессиональная практика", lessons: ["Как выстраивать защиту во время просмотров", "Как делать свечу-отвод", "Как ставить непрогляд", "Как снимать непрогляд, чтобы увидеть скрытое", "Как входить в состояние, где работает интуиция"], bonus: [], result: "Особый модуль, который открывается не всем, а по определённым условиям" },
];

const TEXT_PRIMARY = "#F5EFE0";
const TEXT_BODY = "rgba(245,239,224,0.88)";

function SectionTitle({ children }: { children: string }) {
  return (
    <h2
      className="font-serif font-bold text-center mb-12 uppercase tracking-[0.08em]"
      style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", color: TEXT_PRIMARY }}
    >
      {children}
    </h2>
  );
}

function GoldDivider() {
  return (
    <div className="flex items-center justify-center gap-4 my-4">
      <div className="h-px flex-1 max-w-[80px] opacity-40" style={{ backgroundColor: "var(--color-gold)" }} />
      <span style={{ color: "var(--color-gold)", opacity: 0.6, fontSize: "10px" }}>✦</span>
      <div className="h-px flex-1 max-w-[80px] opacity-40" style={{ backgroundColor: "var(--color-gold)" }} />
    </div>
  );
}

function ModuleAccordion({ mod, index }: { mod: typeof modules[0]; index: number }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <div
      className="border-b"
      style={{ borderColor: "rgba(201,168,76,0.15)" }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 px-0 text-left transition-colors duration-200 hover:opacity-90"
      >
        <div className="flex items-center gap-4">
          <span
            className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold"
            style={{
              background: "linear-gradient(135deg, var(--color-emerald-deep), var(--color-emerald-mid))",
              border: "1px solid rgba(27,94,75,0.6)",
              color: "var(--color-gold)",
            }}
          >
            ✦
          </span>
          <div>
            <div className="text-xs uppercase tracking-widest mb-0.5" style={{ color: "var(--color-gold)", opacity: 0.7 }}>
              {mod.num} модуль
            </div>
            <div className="text-base font-medium" style={{ color: TEXT_PRIMARY }}>
              {mod.title}
            </div>
          </div>
        </div>
        <span
          className="text-lg transition-transform duration-300 flex-shrink-0 ml-4"
          style={{
            color: "var(--color-gold)",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          ⌄
        </span>
      </button>

      {open && (
        <div className="pb-6 px-0">
          <div
            className="text-xs uppercase tracking-widest mb-3"
            style={{ color: "var(--color-gold)", opacity: 0.6 }}
          >
            Уроки:
          </div>
          <ul className="space-y-2 mb-5">
            {mod.lessons.map((l, i) => (
              <li key={i} className="flex gap-2 items-start text-sm" style={{ color: TEXT_BODY }}>
                <span style={{ color: "var(--color-gold)", flexShrink: 0 }}>✦</span>
                {l}
              </li>
            ))}
          </ul>
          <div
            className="text-xs uppercase tracking-widest mb-3"
            style={{ color: "var(--color-gold)", opacity: 0.6 }}
          >
            Дополнительные материалы:
          </div>
          <ul className="space-y-2 mb-5">
            {mod.bonus.map((b, i) => (
              <li key={i} className="flex gap-2 items-start text-sm" style={{ color: TEXT_BODY }}>
                <span style={{ color: "var(--color-gold)", flexShrink: 0 }}>✦</span>
                {b}
              </li>
            ))}
          </ul>
          <div
            className="p-4 text-sm leading-relaxed"
            style={{
              background: "rgba(15,61,46,0.2)",
              border: "1px solid rgba(27,94,75,0.3)",
              color: TEXT_BODY,
            }}
          >
            <span
              className="text-xs uppercase tracking-widest block mb-2"
              style={{ color: "var(--color-gold)", opacity: 0.7 }}
            >
              Результаты модуля:
            </span>
            {mod.result}
          </div>
        </div>
      )}
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

      {/* ОБ АВТОРЕ */}
      <section
        className="px-6 py-20 max-w-2xl mx-auto"
        style={{ borderTop: "1px solid rgba(27,94,75,0.2)" }}
      >
        <SectionTitle>Об авторе:</SectionTitle>

        <div className="flex flex-col sm:flex-row gap-8 items-start mb-10">
          <div className="flex-shrink-0 w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden"
            style={{ border: "2px solid rgba(201,168,76,0.4)" }}>
            <img
              src={SPEAKER_IMG}
              alt="Автор"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div
              className="font-serif text-xl font-bold uppercase tracking-widest mb-1"
              style={{ color: TEXT_PRIMARY }}
            >
              Аксинья Радчевская
            </div>
            <div className="text-sm uppercase tracking-widest mb-4" style={{ color: "var(--color-gold)", opacity: 0.7 }}>
              Таролог · Основатель Misteria
            </div>
            <GoldDivider />
          </div>
        </div>

        <ul className="space-y-3">
          {speakerStats.map((stat, i) => (
            <motion.li key={i} {...fadeIn(i)} className="flex gap-3 items-start text-sm" style={{ color: TEXT_BODY }}>
              <span style={{ color: "var(--color-gold)", flexShrink: 0, marginTop: 2 }}>✦</span>
              {stat}
            </motion.li>
          ))}
        </ul>
      </section>

      {/* ЭТОТ КУРС ДЛЯ ТЕБЯ */}
      <section
        className="px-6 py-20 max-w-2xl mx-auto"
        style={{ borderTop: "1px solid rgba(27,94,75,0.2)" }}
      >
        <SectionTitle>Этот курс для тебя, если..</SectionTitle>

        <div
          className="flex items-center justify-center mb-10"
          style={{ color: "var(--color-gold)" }}
        >
          <span className="text-4xl opacity-40" role="img" aria-label="sun">☀</span>
        </div>

        <ul className="space-y-6">
          {forWhomPoints.map((p, i) => (
            <motion.li key={i} {...fadeIn(i)} className="flex gap-3 items-start text-base leading-relaxed">
              <span
                className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5 text-xs"
                style={{
                  background: "rgba(15,61,46,0.4)",
                  border: "1px solid rgba(27,94,75,0.5)",
                  color: "var(--color-gold)",
                }}
              >
                ✦
              </span>
              <span style={{ color: TEXT_BODY }}>
                <strong style={{ color: TEXT_PRIMARY }}>{p.bold}</strong>
                {p.rest}
              </span>
            </motion.li>
          ))}
        </ul>
      </section>

      {/* ПРОГРАММА */}
      <section
        id="program"
        className="px-6 py-20 max-w-2xl mx-auto"
        style={{ borderTop: "1px solid rgba(27,94,75,0.2)" }}
      >
        <SectionTitle>Программа:</SectionTitle>

        <div className="space-y-0">
          {modules.map((mod, i) => (
            <ModuleAccordion key={i} mod={mod} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}