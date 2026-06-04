import { motion, useReducedMotion } from "framer-motion";

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
  { num: "1", title: "Введение в Таро: база, смысл и подход" },
  { num: "2", title: "Структура колоды и логика Арканов" },
  { num: "3", title: "Старшие Арканы: путь героя" },
  { num: "4", title: "Младшие Арканы: структура и смысл повседневности" },
  { num: "5", title: "Масти: стихии и характер процессов" },
  { num: "6", title: "Придворные карты: люди, роли и проявления" },
  { num: "7", title: "Ситуационные карты: от Туза до Десятки" },
  { num: "8", title: "Каждая карта отдельно: авторские значения, наработки и опыт" },
  { num: "9", title: "Как читать карты: символы, детали и смысл" },
  { num: "10", title: "Интуиция и собственный стиль чтения" },
  { num: "11", title: "Практика раскладов" },
  { num: "12", title: "Разбор готовых раскладов" },
  { num: "13", title: "Систематизация и путь дальше" },
  { num: "★", title: "Особый блок: Логика, ритуальная часть и профессиональная практика" },
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

function ModuleItem({ mod }: { mod: typeof modules[0] }) {
  return (
    <div
      className="flex items-center gap-4 py-4 border-b"
      style={{ borderColor: "rgba(201,168,76,0.15)" }}
    >
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
          {mod.num === "★" ? "Особый блок" : `${mod.num} часть`}
        </div>
        <div className="text-base font-medium" style={{ color: TEXT_PRIMARY }}>
          {mod.title}
        </div>
      </div>
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
        <SectionTitle>Это для тебя, если..</SectionTitle>

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

      {/* СОДЕРЖАНИЕ */}
      <section
        id="program"
        className="px-6 py-20 max-w-2xl mx-auto"
        style={{ borderTop: "1px solid rgba(27,94,75,0.2)" }}
      >
        <SectionTitle>Содержание:</SectionTitle>

        <div className="space-y-0">
          {modules.map((mod, i) => (
            <ModuleItem key={i} mod={mod} />
          ))}
        </div>
      </section>
    </div>
  );
}