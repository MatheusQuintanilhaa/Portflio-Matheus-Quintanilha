import { useState, useEffect, useRef } from "react";

interface HeaderProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export default function Header({ activeSection, onNavigate }: HeaderProps) {
  const [, setIsScrolled] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);
  const [scrollingDown, setScrollingDown] = useState(false); // novo estado
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 10);

      if (currentScrollY > lastScrollY.current) {
        setScrollingDown(true);
      } else {
        setScrollingDown(false);
      }

      if (scrollingDown && currentScrollY > 50) {
        setHideHeader(true);
      } else {
        setHideHeader(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollingDown]);

  const menuItems = [
    { id: "inicio", label: "Início" },
    { id: "sobre", label: "Sobre mim" },
    { id: "projetos", label: "Projetos" },
    { id: "conhecimentos", label: "Conhecimentos" },
    { id: "contato", label: "Contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        hideHeader ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex justify-center space-x-8">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onNavigate(item.id)}
                className="relative px-6 py-3 rounded-full overflow-hidden group text-gray-300 hover:text-white hover:bg-black font-semibold text-xl"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "20px",
                  fontWeight: 600,
                  lineHeight: "auto",
                  letterSpacing: "0%",
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
    </header>
  );
}
