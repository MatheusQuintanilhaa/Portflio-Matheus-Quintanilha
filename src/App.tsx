import { useEffect, useState, useCallback, lazy, Suspense } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";

// Code Splitting - Carregar componentes sob demanda
const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const Contact = lazy(() => import("./components/Contact"));

// Função debounce para otimizar scroll handler
function debounce<T extends (...args: unknown[]) => void>(
  func: T,
  wait: number
) {
  let timeout: number;
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Componente de Loading otimizado
const SectionLoader = () => (
  <div className="h-96 bg-black/20 flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  const [activeSection, setActiveSection] = useState("inicio");

  // Scroll handler otimizado com debounce
  const handleScroll = useCallback(
    debounce(() => {
      const sections = [
        "inicio",
        "sobre",
        "projetos",
        "conhecimentos",
        "contato",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    }, 16), // 60fps
    []
  );

  useEffect(() => {
    // Adicionar passive: true para melhor performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div
      className="min-h-screen text-white"
      style={{
        // Usar WebP otimizado e remover background-attachment: fixed
        backgroundImage: "url(/images/background-optimized.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        // Removido background-attachment: "fixed" para melhor performance mobile
      }}
    >
      <Header activeSection={activeSection} onNavigate={scrollToSection} />
      <main>
        {/* Hero sempre carregado - seção crítica */}
        <section id="inicio">
          <Hero />
        </section>

        {/* Seções carregadas sob demanda com Suspense */}
        <Suspense fallback={<SectionLoader />}>
          <section id="sobre">
            <About />
          </section>
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <section id="projetos">
            <Projects />
          </section>
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <section id="conhecimentos">
            <Skills />
          </section>
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <section id="contato">
            <Contact />
          </section>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
