import { useEffect, useRef, useState } from "react";
import {
  Download,
  Mail,
  Instagram,
  Phone,
  MapPin,
  Calendar,
  ExternalLink,
  Copy,
  CheckCircle,
  Briefcase,
  Github,
} from "lucide-react";

export default function ContactIcons() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [visibleCards, setVisibleCards] = useState(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  const contacts = [
    {
      id: 1,
      icon: Download,
      title: "Currículo",
      subtitle: "Download PDF",
      description: "Veja minha experiência completa",
      link: "/MatheusQuintanilha_Curriculo_DesenvolvedorFrontend.pdf",
      external: false,
      download: true,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/20",
      hoverColor: "hover:bg-blue-500/10",
    },
    {
      id: 2,
      icon: Mail,
      title: "E-mail",
      subtitle: "matheussantos.quintanilha@gmail.com",
      description: "Envie uma mensagem direta",
      link: "mailto:matheussantos.quintanilha@gmail.com",
      external: false,
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-500/20",
      hoverColor: "hover:bg-red-500/10",
      copyable: true,
    },
    {
      id: 3,
      icon: Instagram,
      title: "Instagram",
      subtitle: "@matheus_quintanilha",
      description: "Acompanhe meu trabalho",
      link: "https://instagram.com/matheus_quintanilha",
      external: true,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/20",
      hoverColor: "hover:bg-purple-500/10",
    },
    {
      id: 4,
      icon: Github,
      title: "GitHub",
      subtitle: "@MatheusQuintanilhaa",
      description: "Veja meus projetos e código",
      link: "https://github.com/MatheusQuintanilhaa",
      external: true,
      color: "from-gray-600 to-gray-800",
      bgColor: "bg-gray-600/20",
      hoverColor: "hover:bg-gray-600/10",
    },
  ];

  const additionalInfo = [
    {
      id: 5,
      icon: Phone,
      title: "WhatsApp",
      subtitle: "(22) 99255-3397",
      description: "Fale comigo diretamente",
      link: "https://wa.me/5522992553397?text=Olá%20Matheus!%20Gostei%20do%20seu%20trabalho%20e%20gostaria%20de%20conversar%20sobre%20uma%20oportunidade.",
      external: true,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/20",
      hoverColor: "hover:bg-green-500/10",
    },
    {
      id: 6,
      icon: MapPin,
      title: "Localização",
      subtitle: "Rio de Janeiro - RJ",
      description:
        "Trabalho remotamente com clientes do Brasil. Disponível para reuniões presenciais na região.",
      color: "from-orange-500 to-red-500",
    },
    {
      id: 7,
      icon: Calendar,
      title: "Tempo de Resposta",
      subtitle: "Até 24 horas",
      description:
        "Respondo todas as mensagens em até 24 horas. Para urgências, prefira o WhatsApp.",
      color: "from-[#964CF0] to-purple-500",
    },
    {
      id: 8,
      icon: Briefcase,
      title: "Aberto a Oportunidades",
      subtitle: "Crescimento profissional",
      description: "Disponível para início imediato (remoto ou híbrido).",
      color: "from-emerald-500 to-teal-500",
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

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(
        "matheussantos.quintanilha@gmail.com"
      );
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (err) {
      console.error("Erro ao copiar email:", err);
    }
  };

  type Contact = {
    id: number;
    icon: React.ElementType;
    title: string;
    subtitle: string;
    description: string;
    link: string;
    external?: boolean;
    download?: boolean;
    color: string;
    bgColor?: string;
    hoverColor?: string;
    copyable?: boolean;
  };

  const handleContactClick = (contact: Contact) => {
    if (contact.copyable) {
      handleCopyEmail();
    } else if (contact.download) {
      window.open(contact.link, "_blank");
    } else {
      window.open(contact.link, contact.external ? "_blank" : "_self");
    }
  };

  return (
    <section id="contato" className="relative py-32 overflow-hidden bg-black">
      {/* Gradientes e eclipse igual ao Projects */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-black to-transparent z-10" />
      <div className="absolute top-1/2 left-1/2 w-[1000px] h-[3000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#964CF0] blur-[700px] opacity-30 z-0" />
      <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-black to-transparent z-10" />

      <div className="relative z-20 container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16 opacity-0 animate-fade-in">
          <span className="inline-flex items-center justify-center w-[160px] h-[48px] px-[32px] py-[12px] rounded-[6px] border-[2px] border-[#964CF0] bg-[#101010] text-white font-inter font-semibold text-[20px] leading-[100%] text-center align-middle mb-4">
            Contato
          </span>

          <h2 className="text-[32px] md:text-[48px] leading-[100%] font-semibold text-center text-white mx-auto mt-7">
            Vamos{" "}
            <span className="bg-gradient-to-r from-[#C28FFF] via-[#964CF0] to-[#8B4FE6] bg-clip-text text-transparent">
              conversar
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mt-6">
            Estou sempre aberto a novas oportunidades e parcerias. Entre em
            contato através dos canais abaixo.
          </p>

          {/* Availability Status */}
          <div className="inline-flex items-center gap-2 mt-8 px-4 py-2 bg-green-500/20 text-green-400 rounded-full border border-green-500/30">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">
              Disponível para novos projetos
            </span>
          </div>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 max-w-6xl mx-auto mt-[81px]">
          {contacts.map((contact, index) => {
            const IconComponent = contact.icon;
            return (
              <div
                key={contact.id}
                data-card-id={contact.id}
                className={`w-full max-w-[280px] mx-auto h-[240px] rounded-[12px] p-[2px] transition-all duration-500 ease-out group cursor-pointer relative
                  ${
                    visibleCards.has(contact.id)
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
                onClick={() => handleContactClick(contact)}
              >
                <div className="flex flex-col justify-start h-full rounded-[10px] bg-[#101010] relative overflow-hidden p-6">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${contact.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-white group-hover:text-[#964CF0] transition-colors duration-300">
                        {contact.title}
                      </h3>
                      {contact.external && (
                        <ExternalLink className="w-4 h-4 text-white group-hover:text-gray-300 transition-colors" />
                      )}
                      {contact.copyable && (
                        <div className="flex items-center">
                          {copiedEmail ? (
                            <CheckCircle className="w-4 h-4 text-green-500" />
                          ) : (
                            <Copy className="w-4 h-4 text-gray-400 group-hover:text-gray-300 transition-colors" />
                          )}
                        </div>
                      )}
                    </div>

                    <p className="text-sm font-medium text-gray-200 break-all group-hover:text-white transition-colors duration-300">
                      {contact.subtitle}
                    </p>

                    <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {contact.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info Section - Layout igual aos cards principais */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 max-w-6xl mx-auto mt-16">
          {additionalInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <div
                key={info.id}
                data-card-id={info.id}
                className={`w-full max-w-[280px] mx-auto h-[240px] rounded-[12px] p-[2px] transition-all duration-500 ease-out group cursor-pointer relative
                  ${
                    visibleCards.has(info.id)
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }
                  hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20
                  bg-gradient-to-b from-[#964CF0] to-[#170033]
                  overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-1000 before:ease-out
                `}
                style={{
                  animationDelay: `${(index + 4) * 150}ms`,
                }}
                onClick={() =>
                  info.link &&
                  window.open(info.link, info.external ? "_blank" : "_self")
                }
              >
                <div className="flex flex-col justify-start h-full rounded-[10px] bg-[#101010] relative overflow-hidden p-6">
                  {/* Icon - igual aos cards principais */}
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>

                  {/* Content - mesmo layout dos cards principais */}
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-white group-hover:text-[#964CF0] transition-colors duration-300">
                        {info.title}
                      </h3>
                      {info.external && (
                        <ExternalLink className="w-4 h-4 text-white group-hover:text-gray-300 transition-colors" />
                      )}
                    </div>
                    <p className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors duration-300">
                      {info.subtitle}
                    </p>
                    <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {info.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="w-full max-w-6xl mx-auto mt-20 px-4">
          <div
            data-card-id={9}
            className={`w-full max-w-[280px] sm:max-w-[400px] mx-auto h-auto min-h-[240px] rounded-[12px] p-[2px] transition-all duration-500 ease-out group cursor-pointer relative
              ${
                visibleCards.has(9)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }
              hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20
              bg-gradient-to-b from-[#964CF0] to-[#170033]
              overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-1000 before:ease-out
            `}
            style={{
              animationDelay: "1200ms",
            }}
            onClick={() =>
              window.open(
                "https://wa.me/5522992553397?text=Olá%20Matheus!%20Gostei%20do%20seu%20trabalho%20e%20gostaria%20de%20conversar%20sobre%20uma%20oportunidade.",
                "_blank"
              )
            }
          >
            <div className="flex flex-col justify-center items-center h-full min-h-[236px] rounded-[10px] bg-[#101010] relative overflow-hidden p-6 text-center">
              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#964CF0] transition-colors duration-300">
                  Pronto para começar seu projeto?
                </h3>

                <p className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300 leading-relaxed">
                  Vamos transformar suas ideias em realidade. Entre em contato e
                  vamos discutir como posso ajudar você.
                </p>

                <div className="inline-flex items-center gap-2 text-xs font-medium text-[#964CF0] group-hover:text-purple-400 transition-colors duration-300 mt-4">
                  <ExternalLink className="w-3 h-3" />
                  Conversar no WhatsApp
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
