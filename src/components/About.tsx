import { useEffect, useRef, useState, memo } from "react";

const About = memo(() => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    const currentSection = sectionRef.current;

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="sobre"
      className="-mt-1 pt-[50px] pb-20 relative bg-black overflow-hidden"
    >
      {/* Elementos decorativos com suas animações existentes */}
      <div
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-600/10 to-purple-400/10 
        rounded-full blur-xl animate-pulse"
      ></div>
      <div
        className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-l from-purple-500/10 to-purple-300/10 
        rounded-full blur-xl animate-pulse"
      ></div>

      {/* Elementos flutuantes */}
      <div className="absolute top-32 right-20 w-2 h-2 bg-purple-400 rounded-full animate-float"></div>
      <div
        className="absolute bottom-32 left-16 w-1.5 h-1.5 bg-c28 rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto text-left pl-[6px] sm:pl-[8px] md:pl-[216px]">
          {/* Título com animação */}
          <h2
            className={`text-[32px] sm:text-[40px] md:text-[48px] leading-[100%] font-semibold text-white 
              mb-8 sm:mb-10 md:mb-12 mt-8 sm:mt-10 md:mt-12 max-w-[481px] break-words
              transition-all duration-800 ease-out transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            style={{ transitionDelay: "100ms" }}
          >
            <span className="relative">
              Matheus Quintanilha
              {/* Efeito de sublinhado animado */}
              <span
                className={`absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-purple-500 to-c28 
                transition-all duration-1000 ease-out ${
                  isVisible ? "w-full opacity-100" : "w-0 opacity-0"
                }`}
                style={{ transitionDelay: "800ms" }}
              ></span>
            </span>
          </h2>

          {/* Container dos parágrafos */}
          <div
            className="space-y-4 sm:space-y-5 md:space-y-6 text-white text-[18px] sm:text-[20px] md:text-[24px] 
              leading-[160%] font-medium max-w-[1216px]"
          >
            {/* Primeiro parágrafo */}
            <div
              className={`transition-all duration-1000 ease-out transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              <p className="relative z-10">
                Sou um desenvolvedor front-end com experiência na criação e
                manutenção de aplicações web escaláveis. Possuo habilidades
                sólidas em{" "}
                <span className="text-c28 font-semibold hover:text-purple-300 transition-colors duration-300">
                  HTML, CSS, JavaScript, TypeScript
                </span>
                ,{" "}
                <span className="text-c28 font-semibold hover:text-purple-300 transition-colors duration-300">
                  React, NextJS
                </span>{" "}
                e{" "}
                <span className="text-c28 font-semibold hover:text-purple-300 transition-colors duration-300">
                  Angular
                </span>
                , além de conhecimento em UI/UX com{" "}
                <span className="text-c28 font-semibold hover:text-purple-300 transition-colors duration-300">
                  TailwindCSS, Bootstrap
                </span>{" "}
                e{" "}
                <span className="text-c28 font-semibold hover:text-purple-300 transition-colors duration-300">
                  Figma
                </span>
                .
              </p>
            </div>

            {/* Segundo parágrafo */}
            <div
              className={`transition-all duration-1000 ease-out transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: "900ms" }}
            >
              <p className="relative z-10">
                Tenho experiência prática no desenvolvimento de interfaces
                dinâmicas e reutilizáveis, seguindo boas práticas de código,
                versionamento com{" "}
                <span className="text-c28 font-semibold hover:text-purple-300 transition-colors duration-300">
                  Git/GitHub
                </span>{" "}
                e metodologias ágeis como{" "}
                <span className="text-c28 font-semibold hover:text-purple-300 transition-colors duration-300">
                  Scrum
                </span>{" "}
                e{" "}
                <span className="text-c28 font-semibold hover:text-purple-300 transition-colors duration-300">
                  Kanban
                </span>
                . Além disso, possuo conhecimento em{" "}
                <span className="text-c28 font-semibold hover:text-purple-300 transition-colors duration-300">
                  SQL
                </span>{" "}
                e ferramentas como{" "}
                <span className="text-c28 font-semibold hover:text-purple-300 transition-colors duration-300">
                  Storybook
                </span>{" "}
                e{" "}
                <span className="text-c28 font-semibold hover:text-purple-300 transition-colors duration-300">
                  VSCode
                </span>
                .
              </p>
            </div>
          </div>

          {/* Call to action animado */}
          <div
            className={`mt-12 transition-all duration-1200 ease-out transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "1200ms" }}
          >
            {/* Elemento decorativo ou espaço para respirar */}
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-c28 rounded-full opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
});

About.displayName = "About";

export default About;
