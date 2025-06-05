export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex relative hero-background font-sans pt-44 md:pt-16"
    >
      {/* Pontinhos animados */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-purple-300 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse delay-500"></div>
      <div className="absolute top-32 right-40 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-700"></div>
      <div className="absolute bottom-60 right-32 w-1.5 h-1.5 bg-purple-300 rounded-full animate-pulse delay-300"></div>

      <div className="w-full relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
        <div className="relative flex flex-col items-center md:items-start text-center md:text-left">
          <p className="text-white text-[24px] sm:text-[28px] md:text-[32px] font-sans not-italic font-medium leading-normal">
            Olá, eu sou
          </p>
          <h1
            className="text-[#C28FFF] font-sans not-italic leading-normal font-semibold whitespace-nowrap
            text-[28px] sm:text-[40px] md:text-[56px]"
          >
            Matheus Quintanilha
          </h1>
          <p
            className="text-white font-sans font-medium leading-normal
            text-[20px] sm:text-[24px] md:text-[32px]"
          >
            Desenvolvedor Frontend
          </p>

          <div className="relative inline-block mt-8 sm:mt-10 md:mt-12">
            <a
              href="https://www.linkedin.com/in/matheus-quintanilhadev/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-6 sm:px-8 py-3 sm:py-4 justify-center items-center gap-2.5 rounded-[6px] bg-[#964CF0] relative z-20 text-sm sm:text-base"
            >
              Acessar LinkedIn
            </a>

            <span
              className="inline-flex items-center justify-center
                bg-[#101010] text-white text-xs sm:text-sm font-semibold
                rounded-[6px] border-2 border-[#964CF0]
                px-6 sm:px-8 py-2 sm:py-3 w-[140px] sm:w-[168px] h-[40px] sm:h-[48px]
                absolute z-10"
              style={{
                top: "335px",
                left: "6px",
              }}
            >
              Sobre mim
            </span>
          </div>
        </div>

        <div className="flex max-w-[220px] sm:max-w-[320px] md:max-w-[500px] h-[220px] sm:h-[320px] md:h-[500px] rotate-[4deg] p-0 justify-center items-center relative mb-3">
          <img
            src="/images/icon.svg"
            alt="Ícone"
            className="max-w-[180px] sm:max-w-[280px] md:max-w-[400px] w-full h-auto transform rotate-[14deg] drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
