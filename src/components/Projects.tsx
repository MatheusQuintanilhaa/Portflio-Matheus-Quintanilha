import { useEffect, useRef, useState } from "react";

export default function Projects() {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  const projects = [
    {
      id: 1,
      name: "LinkShort - URL Shortener",
      description:
        "Uma aplicação moderna para encurtamento de URLs com analytics integrados e design responsivo.",
      image: "/images/projects/encurtador.png",
      tech: ["React", "Vite", "TailwindCSS", "JavaScript"],
      liveUrl: "https://url-shortener-wine-psi.vercel.app/",
      githubUrl: "https://github.com/MatheusQuintanilhaa/url-shortener",
    },
    {
      id: 2,
      name: "Fashion-Ecommerce",
      description:
        "E-commerce completo com carrinho funcional e busca em tempo real",
      image: "/images/projects/fashion-ecommerce.PNG",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Context API"],
      liveUrl: "https://fashion-ecommerce-blue.vercel.app/",
    },
    {
      id: 3,
      name: "WeatherPro",
      description:
        "Uma aplicação para previsão do tempo com dados em tempo real.",
      image: "images/projects/weatherpro.PNG",
      tech: ["React", "JavaScript", "Tailwind CSS", "OpenWeather API"],
      liveUrl: "https://weather-pro-omega.vercel.app/",
    },
    {
      id: 4,
      name: "Crypto Dashboard",
      description:
        "Dashboard para monitoramento de criptomoedas com gráficos e portfolio tracker.",
      image: "/images/projects/crypto-dash.PNG",
      tech: ["React", "TypeScript", "React Query", "Recharts"],
      liveUrl: "https://crypto-dashboard.vercel.app/",
    },
    {
      id: 5,
      name: "Feira de trocas comunitária",
      description:
        "Uma plataforma para troca de itens entre usuários, promovendo a sustentabilidade.",
      image: "/images/projects/feira-trocas.PNG",
      tech: ["React", "Node.js", "Express", "PostgreSQL"],
      liveUrl: "https://feira-de-trocas-comunitaria.vercel.app/",
    },
    {
      id: 6,
      name: "PetHelpful",
      description:
        "Chatbot inteligente com IA Gemini para orientações sobre cuidados com pets.",
      image: "/images/projects/chatbot-pethelful.PNG",
      tech: ["Python", "Google Gemini AI", "IA Generativa", "API Integration"],
      liveUrl: "https://github.com/MatheusQuintanilhaa/chatbot-pethelful",
    },
  ];

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = parseInt(
              (entry.target as HTMLElement).dataset.cardId || "0"
            );
            setVisibleCards((prev) => new Set([...prev, cardId]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll("[data-card-id]");
    cards.forEach((card) => observerRef.current?.observe(card));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <section id="projetos" className="relative py-32 overflow-hidden bg-black">
      {/* Gradientes e eclipse mantidos igual */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-black to-transparent z-10" />
      <div className="absolute top-1/2 left-1/2 w-[1000px] h-[3000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#964CF0] blur-[700px] opacity-30 z-0" />
      <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-black to-transparent z-10" />

      <div className="relative z-20 container mx-auto px-4">
        <div className="text-center mb-16 opacity-0 animate-fade-in">
          <span className="inline-flex items-center justify-center w-[160px] h-[48px] px-[32px] py-[12px] rounded-[6px] border-[2px] border-[#964CF0] bg-[#101010] text-white font-inter font-semibold text-[20px] leading-[100%] text-center align-middle mb-4">
            Trabalhos
          </span>

          <h2 className="w-full max-w-[332px] h-[58px] text-[32px] md:text-[48px] leading-[100%] font-semibold text-center text-white mx-auto mt-7">
            Meus{" "}
            <span className="bg-gradient-to-r from-[#C28FFF] via-[#964CF0] to-[#8B4FE6] bg-clip-text text-transparent">
              projetos
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 md:gap-x-14 md:gap-y-14 max-w-6xl mx-auto mt-[81px]">
          {projects.map((project, index) => (
            <div
              key={project.id}
              data-card-id={project.id}
              onClick={() => {
                if (project.liveUrl) {
                  window.open(project.liveUrl, "_blank");
                }
              }}
              className={`w-full max-w-[384px] mx-auto md:w-[384px] h-[380px] rounded-[12px] p-[2px] transition-all duration-500 ease-out group cursor-pointer relative
                ${
                  visibleCards.has(project.id)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }
                hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20
                bg-gradient-to-b from-[#964CF0] to-[#170033]
                overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-1000 before:ease-out
              `}
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              <div className="flex flex-col justify-start h-full rounded-[10px] bg-[#101010] relative overflow-hidden">
                {/* Imagem do projeto com overlay de hover */}
                <div className="relative w-[calc(100%-32px)] max-w-[352px] h-[156px] rounded-[8px] bg-gradient-to-br from-[#964CF0] to-[#6B46C1] mx-auto mt-4 overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  {/* Se houver imagem, mostrar ela, senão mostrar o gradiente */}
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover brightness-90 group-hover:brightness-100 transition-all duration-300"
                    />
                  ) : null}

                  {/* Overlay com efeito de zoom */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white font-semibold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      Ver Projeto
                    </div>
                  </div>
                </div>

                <div className="w-[calc(100%-32px)] max-w-[352px] h-[156px] gap-4 p-1 flex flex-col mx-auto mt-4">
                  <h3
                    className="w-full text-white font-inter font-semibold text-[20px] md:text-[24px] leading-[120%]
                                group-hover:text-[#964CF0] transition-colors duration-300"
                  >
                    {project.name}
                  </h3>

                  <p
                    className="w-full text-gray-300 font-inter font-medium text-[16px] md:text-[18px] leading-[140%]
                              group-hover:text-white transition-colors duration-300"
                  >
                    {project.description}
                  </p>

                  {/* Tags de tecnologia que aparecem no hover */}
                  <div className="flex flex-wrap gap-2 mt-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs bg-[#964CF0]/20 text-[#964CF0] rounded border border-[#964CF0]/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
