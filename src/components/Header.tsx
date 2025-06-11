import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export default function Header({ activeSection, onNavigate }: HeaderProps) {
  const [hideHeader, setHideHeader] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Lógica para mostrar o header SOMENTE no topo da página
  useEffect(() => {
    const handleScroll = () => {
      // Header aparece apenas quando scroll está no topo (0-10px)
      const isAtTop = window.scrollY <= 10;
      setHideHeader(!isAtTop);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // chama na montagem para definir estado inicial

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fechar menu mobile ao clicar em um item
  const handleMobileNavigate = (section: string) => {
    onNavigate(section);
    setIsMobileMenuOpen(false);
  };

  // Fechar menu mobile ao redimensionar para desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    { id: "inicio", label: "Início" },
    { id: "sobre", label: "Sobre mim" },
    { id: "projetos", label: "Projetos" },
    { id: "conhecimentos", label: "Conhecimentos" },
    { id: "contato", label: "Contato" },
  ];

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
                        : "group-hover:border-purple-600"
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
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
        <div className="lg:hidden fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-b from-purple-900/95 to-black/95 backdrop-blur-lg shadow-2xl">
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
}
