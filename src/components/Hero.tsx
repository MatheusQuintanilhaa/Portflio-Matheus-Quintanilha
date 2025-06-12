import { useState, useEffect, memo, useCallback, useMemo, useRef } from "react";

// Constantes movidas para fora
const texts = ["Olá, eu sou", "Matheus Quintanilha", "Desenvolvedor Frontend"];
const TYPING_SPEED = 80;
const PAUSE_BETWEEN_PHASES = 800;

// Interface para props do cursor
interface TypingCursorProps {
  color?: "white" | "#C28FFF";
}

const Hero = memo(() => {
  const [currentPhase, setCurrentPhase] = useState<number>(0);
  const [displayedText, setDisplayedText] = useState<string>("");
  const [showCursor, setShowCursor] = useState<boolean>(true);
  const [isTypingComplete, setIsTypingComplete] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const sectionRef = useRef<HTMLElement>(null);
  const intervalRef = useRef<number | null>(null);
  const timeoutRef = useRef<number | null>(null);

  // Intersection Observer para detectar quando a seção está visível
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Para de observar após primeira visualização
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px 0px", // Inicia animação um pouco antes
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Limpa intervals e timeouts quando componente desmonta
  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Memoiza o callback para evitar re-criações desnecessárias
  const typeText = useCallback(
    (text: string, phaseIndex: number) => {
      if (!isVisible) return () => {}; // Não inicia se não estiver visível

      let currentIndex = 0;
      setDisplayedText("");
      setShowCursor(true);
      setIsTypingComplete(false);

      // Limpa interval anterior se existir
      if (intervalRef.current) clearInterval(intervalRef.current);

      intervalRef.current = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          if (intervalRef.current) clearInterval(intervalRef.current);
          setShowCursor(false);
          setIsTypingComplete(true);

          timeoutRef.current = setTimeout(() => {
            if (phaseIndex < texts.length - 1) {
              setCurrentPhase(phaseIndex + 1);
            }
          }, PAUSE_BETWEEN_PHASES);
        }
      }, TYPING_SPEED);

      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      };
    },
    [isVisible]
  );

  useEffect(() => {
    if (isVisible && currentPhase < texts.length) {
      const cleanup = typeText(texts[currentPhase], currentPhase);
      return cleanup;
    }
  }, [currentPhase, typeText, isVisible]);

  // Memoiza os estilos para evitar recalculos - versão mais otimizada
  const textStyles = useMemo(
    () => ({
      firstText:
        "text-white text-[24px] sm:text-[28px] md:text-[32px] font-sans font-medium leading-normal transition-opacity duration-250 will-change-auto",
      nameText:
        "text-[#C28FFF] font-sans leading-normal font-semibold text-[28px] sm:text-[40px] md:text-[56px] break-words transition-opacity duration-250 will-change-auto",
      roleText:
        "text-white font-sans font-medium leading-normal text-[20px] sm:text-[24px] md:text-[32px] transition-opacity duration-250 will-change-auto",
    }),
    []
  );

  // Componente otimizado para os pontinhos - agora só renderiza quando visível
  const AnimatedDots = memo(() => {
    if (!isVisible) return null;

    return (
      <>
        <div className="absolute top-20 left-10 w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
        <div
          className="absolute top-40 right-20 w-1 h-1 bg-purple-300 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
        <div
          className="absolute top-32 right-40 w-1 h-1 bg-purple-400 rounded-full animate-pulse"
          style={{ animationDelay: "0.7s" }}
        />
        <div
          className="absolute bottom-60 right-32 w-1.5 h-1.5 bg-purple-300 rounded-full animate-pulse"
          style={{ animationDelay: "0.3s" }}
        />
      </>
    );
  });
  AnimatedDots.displayName = "AnimatedDots";

  // Componente do cursor otimizado
  const TypingCursor = memo(({ color = "white" }: TypingCursorProps) => (
    <span
      className={`animate-pulse ${
        color === "white" ? "text-white" : "text-[#C28FFF]"
      }`}
    >
      |
    </span>
  ));
  TypingCursor.displayName = "TypingCursor";

  // Componente da imagem otimizado separadamente
  const HeroImage = memo(() => (
    <div className="hidden md:flex max-w-[220px] sm:max-w-[320px] md:max-w-[500px] h-[220px] sm:h-[320px] md:h-[500px] rotate-[4deg] p-0 justify-center items-center relative mb-3">
      <img
        src="/images/icon.svg"
        alt="Ícone Matheus Quintanilha"
        className="max-w-[180px] sm:max-w-[280px] md:max-w-[400px] w-full h-auto transform rotate-[14deg] drop-shadow-2xl"
        loading="eager" // Carrega imediatamente por ser hero image
        decoding="async"
        fetchPriority="high" // Prioridade alta para hero image
        width="400"
        height="400"
      />
    </div>
  ));
  HeroImage.displayName = "HeroImage";

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="min-h-[100vh] sm:min-h-[90vh] md:min-h-screen flex relative hero-background font-sans pt-44 md:pt-16 mb-0"
    >
      <AnimatedDots />

      <div className="w-full relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
        <div className="relative flex flex-col items-center md:items-start text-center md:text-left">
          <div className="min-h-[200px] sm:min-h-[250px] md:min-h-[300px] flex flex-col justify-center">
            {/* Primeira frase - Otimizada com content-visibility */}
            <p
              className={`${textStyles.firstText} ${
                currentPhase >= 0 ? "opacity-100" : "opacity-0"
              }`}
              style={{ contentVisibility: "auto" }}
            >
              {currentPhase === 0 ? (
                <>
                  {displayedText}
                  {showCursor && <TypingCursor />}
                </>
              ) : (
                "Olá, eu sou"
              )}
            </p>

            {/* Segunda frase - Nome - Otimizada com content-visibility */}
            <h1
              className={`${textStyles.nameText} ${
                currentPhase >= 1 ? "opacity-100" : "opacity-0"
              }`}
              style={{
                contentVisibility: "auto",
                containIntrinsicSize: "1px 80px",
              }}
            >
              {currentPhase === 1 ? (
                <>
                  {displayedText}
                  {showCursor && <TypingCursor color="#C28FFF" />}
                </>
              ) : currentPhase > 1 ? (
                "Matheus Quintanilha"
              ) : (
                ""
              )}
            </h1>

            {/* Terceira frase - Otimizada */}
            <p
              className={`${textStyles.roleText} ${
                currentPhase >= 2 ? "opacity-100" : "opacity-0"
              }`}
              style={{ contentVisibility: "auto" }}
            >
              {currentPhase === 2 ? (
                <>
                  {displayedText}
                  {showCursor && <TypingCursor />}
                </>
              ) : currentPhase > 2 ? (
                "Desenvolvedor Frontend"
              ) : (
                ""
              )}
            </p>
          </div>

          {/* Botão com otimização de carregamento */}
          <div
            className={`mt-8 sm:mt-10 md:mt-12 transition-all duration-700 ${
              currentPhase >= 2 && isTypingComplete
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <a
              href="https://www.linkedin.com/in/matheus-quintanilhadev/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-6 sm:px-8 py-3 sm:py-4 justify-center items-center gap-2.5 rounded-[6px] bg-[#964CF0] text-white font-inter font-semibold text-[20px] leading-[100%] hover:bg-[#8B4FE6] transition-colors duration-300"
              aria-label="Acessar LinkedIn de Matheus Quintanilha"
            >
              Acessar LinkedIn
            </a>
          </div>
        </div>

        <HeroImage />
      </div>
    </section>
  );
});

Hero.displayName = "Hero";

export default Hero;
