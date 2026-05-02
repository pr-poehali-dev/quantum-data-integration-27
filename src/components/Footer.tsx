export default function Footer() {
  return (
    <div
      className="relative h-[400px] sm:h-[600px] lg:h-[800px] max-h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+400px)] sm:h-[calc(100vh+600px)] lg:h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[400px] sm:h-[600px] lg:h-[800px] sticky top-[calc(100vh-400px)] sm:top-[calc(100vh-600px)] lg:top-[calc(100vh-800px)]">
          <div
            className="py-4 sm:py-6 lg:py-8 px-4 sm:px-6 h-full w-full flex flex-col justify-between"
            style={{
              background: "linear-gradient(135deg, var(--color-emerald-deep) 0%, var(--color-obsidian) 50%)",
            }}
          >
            {/* Верхняя навигация */}
            <div className="flex shrink-0 gap-8 sm:gap-12 lg:gap-20">
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3
                  className="mb-1 sm:mb-2 uppercase text-xs sm:text-sm tracking-widest"
                  style={{ color: "rgba(201,168,76,0.6)" }}
                >
                  Курс
                </h3>
                <a href="#program" className="text-white/60 hover:text-white transition-colors duration-300 text-sm sm:text-base">
                  Программа
                </a>
                <a href="#access" className="text-white/60 hover:text-white transition-colors duration-300 text-sm sm:text-base">
                  Получить доступ
                </a>
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3
                  className="mb-1 sm:mb-2 uppercase text-xs sm:text-sm tracking-widest"
                  style={{ color: "rgba(201,168,76,0.6)" }}
                >
                  Контакт
                </h3>
                <a href="#" className="text-white/60 hover:text-white transition-colors duration-300 text-sm sm:text-base">
                  Telegram
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors duration-300 text-sm sm:text-base">
                  Instagram
                </a>
              </div>
            </div>

            {/* Большой заголовок и копирайт */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0">
              <h1
                className="font-serif font-bold text-[20vw] sm:text-[18vw] lg:text-[15vw] leading-[0.85] mt-4 sm:mt-6 lg:mt-10"
                style={{ color: "#F5EFE0" }}
              >
                ТАРО
              </h1>
              <div className="flex flex-col items-end gap-1">
                <p className="text-white/40 text-xs tracking-widest uppercase">
                  {new Date().getFullYear()}
                </p>
                <p className="text-white/30 text-xs">
                  Онлайн-курс по Таро
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}