import { useState, useEffect, useRef, memo, useCallback } from "react";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

// Função debounce para otimizar scroll handlers
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

// Memoizar o array de items para evitar re-criações
const menuItems = [
  { id: "inicio", label: "Início" },
  { id: "sobre", label: "Sobre mim" },
  { id: "projetos", label: "Projetos" },
  { id: "conhecimentos", label: "Conhecimentos" },
  { id: "contato", label: "Contato" },
];

// Componente memoizado
export default memo(function Header({
  activeSection,
  onNavigate,
}: HeaderProps) {
  const [hideHeader, setHideHeader] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  // Handler de scroll otimizado com debounce
  const handleScroll = useCallback(
    debounce(() => {
      const currentScrollY = window.scrollY;

      // Lógica simplificada para hide/show header
      if (currentScrollY <= 10) {
        setHideHeader(false); // Sempre mostrar no topo
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setHideHeader(true); // Esconder ao scrollar para baixo
      } else if (currentScrollY < lastScrollY.current) {
        setHideHeader(false); // Mostrar ao scrollar para cima
      }

      lastScrollY.current = currentScrollY;
    }, 16), // 60fps
    []
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Handler memoizado para navegação mobile
  const handleMobileNavigate = useCallback(
    (section: string) => {
      onNavigate(section);
      setIsMobileMenuOpen(false);
    },
    [onNavigate]
  );

  // Handler memoizado para toggle do menu
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  // Handler memoizado para fechar menu mobile
  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  // Fechar menu mobile ao redimensionar para desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        // lg breakpoint
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
          hideHeader ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        {/* Desktop Navigation */}
        <nav className="hidden lg:block px-4 md:px-[100px] lg:px-[200px] xl:px-[300px] 2xl:px-[566px] pt-10 pb-10">
          <ul className="flex justify-center space-x-8">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => onNavigate(item.id)}
                  className="relative px-6 py-3 rounded-full overflow-hidden group text-gray-300 hover:text-white hover:bg-black font-semibold text-xl whitespace-nowrap"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "20px",
                    fontStyle: "normal",
                    fontWeight: 600,
                    lineHeight: "normal",
                  }}
                >
                  <span
                    className={`absolute inset-0 rounded-full border-2 border-transparent ${
                      activeSection === item.id
                        ? "border-purple-600"
                        : "group-hover:animate-border-grow"
                    }`}
                  ></span>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <nav className="lg:hidden px-4 sm:px-6 pt-6 pb-6">
          <div className="flex justify-between items-center">
            {/* Logo/Brand */}
            <div className="text-white font-bold text-xl">MQ</div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-sm"
          onClick={closeMobileMenu} // Fechar ao clicar no overlay
        >
          <div
            className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-b from-purple-900/95 to-black/95 backdrop-blur-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()} // Prevenir fechamento ao clicar no menu
          >
            <div className="h-full flex flex-col pt-20 px-6">
              <ul className="space-y-4 flex-1">
                {menuItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleMobileNavigate(item.id)}
                      className={`w-full text-left px-6 py-4 rounded-xl text-lg font-semibold transition-all duration-200 ${
                        activeSection === item.id
                          ? "bg-purple-600 text-white shadow-lg"
                          : "text-gray-300 hover:text-white hover:bg-white/10"
                      }`}
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 600,
                      }}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>

              {/* Footer Elements */}
              <div className="pb-8 pt-8 border-t border-gray-700">
                <div className="text-center text-gray-400 text-sm">
                  Desenvolvedor Frontend
                </div>
                <div className="mt-4 flex justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center">
                    <span className="text-white font-bold text-xl">MQ</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
});
