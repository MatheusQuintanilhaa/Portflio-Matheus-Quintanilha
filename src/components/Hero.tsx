import { useState, useEffect } from "react";

export default function Hero() {
  const [currentPhase, setCurrentPhase] = useState<number>(0);
  const [displayedText, setDisplayedText] = useState<string>("");
  const [showCursor, setShowCursor] = useState<boolean>(true);

  const texts: string[] = [
    "Olá, eu sou",
    "Matheus Quintanilha",
    "Desenvolvedor Frontend",
  ];

  useEffect(() => {
    let timeout: number;

    const typeText = (text: string, phaseIndex: number): void => {
      let currentIndex = 0;
      setDisplayedText("");
      setShowCursor(true);

      const typingInterval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setShowCursor(false);

          // Pausa antes da próxima frase
          timeout = setTimeout(() => {
            if (phaseIndex < texts.length - 1) {
              setCurrentPhase(phaseIndex + 1);
            }
          }, 800);
        }
      }, 80); // Velocidade da digitação
    };

    if (currentPhase < texts.length) {
      typeText(texts[currentPhase], currentPhase);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [currentPhase]);

  return (
    <section
      id="inicio"
      className="min-h-[100vh] sm:min-h-[90vh] md:min-h-screen flex relative hero-background font-sans pt-44 md:pt-16 mb-0"
    >
      {/* Pontinhos animados */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-purple-300 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse delay-500"></div>
      <div className="absolute top-32 right-40 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-700"></div>
      <div className="absolute bottom-60 right-32 w-1.5 h-1.5 bg-purple-300 rounded-full animate-pulse delay-300"></div>

      <div className="w-full relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
        <div className="relative flex flex-col items-center md:items-start text-center md:text-left">
          <div className="min-h-[200px] sm:min-h-[250px] md:min-h-[300px] flex flex-col justify-center">
            {/* Primeira frase */}
            <p
              className={`text-white text-[24px] sm:text-[28px] md:text-[32px] font-sans not-italic font-medium leading-normal transition-opacity duration-500 ${
                currentPhase === 0
                  ? "opacity-100"
                  : currentPhase > 0
                  ? "opacity-100"
                  : "opacity-0"
              }`}
            >
              {currentPhase === 0 ? (
                <>
                  {displayedText}
                  {showCursor && (
                    <span className="animate-pulse text-white">|</span>
                  )}
                </>
              ) : (
                "Olá, eu sou"
              )}
            </p>

            {/* Segunda frase - Nome */}
            <h1
              className={`text-[#C28FFF] font-sans not-italic leading-normal font-semibold 
            text-[28px] sm:text-[40px] md:text-[56px] break-words transition-opacity duration-500 ${
              currentPhase === 1
                ? "opacity-100"
                : currentPhase > 1
                ? "opacity-100"
                : "opacity-0"
            }`}
            >
              {currentPhase === 1 ? (
                <>
                  {displayedText}
                  {showCursor && (
                    <span className="animate-pulse text-[#C28FFF]">|</span>
                  )}
                </>
              ) : currentPhase > 1 ? (
                "Matheus Quintanilha"
              ) : (
                ""
              )}
            </h1>

            {/* Terceira frase */}
            <p
              className={`text-white font-sans font-medium leading-normal
            text-[20px] sm:text-[24px] md:text-[32px] transition-opacity duration-500 ${
              currentPhase === 2
                ? "opacity-100"
                : currentPhase > 2
                ? "opacity-100"
                : "opacity-0"
            }`}
            >
              {currentPhase === 2 ? (
                <>
                  {displayedText}
                  {showCursor && (
                    <span className="animate-pulse text-white">|</span>
                  )}
                </>
              ) : currentPhase > 2 ? (
                "Desenvolvedor Frontend"
              ) : (
                ""
              )}
            </p>
          </div>

          <div
            className={`mt-8 sm:mt-10 md:mt-12 transition-all duration-700 ${
              currentPhase >= 2 && !showCursor
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <a
              href="https://www.linkedin.com/in/matheus-quintanilhadev/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-6 sm:px-8 py-3 sm:py-4 justify-center items-center gap-2.5 rounded-[6px] bg-[#964CF0]
    text-white font-inter font-semibold text-[20px] leading-[100%] hover:bg-[#8B4FE6] transition-colors duration-300"
            >
              Acessar LinkedIn
            </a>
          </div>
        </div>

        <div className="hidden md:flex max-w-[220px] sm:max-w-[320px] md:max-w-[500px] h-[220px] sm:h-[320px] md:h-[500px] rotate-[4deg] p-0 justify-center items-center relative mb-3">
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
