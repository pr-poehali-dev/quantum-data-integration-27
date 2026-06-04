interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-20 px-6 py-5 ${className ?? ""}`}>
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div
          className="font-serif text-xl tracking-[0.2em] uppercase"
          style={{ color: "var(--color-gold)" }}
        >
          Misteria
        </div>
        <nav className="flex gap-6 items-center">
          <a
            href="#program"
            className="text-white/60 hover:text-white transition-colors duration-300 uppercase text-xs tracking-widest hidden sm:block"
          >
            Содержание
          </a>
          <a
            href="https://t.me/Misteriasecret_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors duration-300 uppercase text-xs tracking-widest"
          >
            Telegram
          </a>
          <a
            href="https://www.instagram.com/misteria_university?igsh=NTF0ZTR6cDFmZGty"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors duration-300 uppercase text-xs tracking-widest hidden sm:block"
          >
            Instagram
          </a>
          <a
            href="#access"
            className="border px-5 py-2 text-xs uppercase tracking-widest transition-all duration-300 hover:bg-white/5"
            style={{ borderColor: "var(--color-gold)", color: "var(--color-gold)" }}
          >
            Форматы
          </a>
        </nav>
      </div>
    </header>
  );
}