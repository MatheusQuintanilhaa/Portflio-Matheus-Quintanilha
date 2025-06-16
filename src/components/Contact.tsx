/* eslint-disable @typescript-eslint/no-explicit-any */
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
} from "lucide-react";
import { useState } from "react";

export default function ContactIcons() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const contacts = [
    {
      icon: Download,
      title: "Currículo",
      subtitle: "Download PDF",
      description: "Veja minha experiência completa",
      link: "/curriculo-matheus-quintanilha.pdf",
      external: false,
      download: true,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/20",
      hoverColor: "hover:bg-blue-500/10",
    },
    {
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
      icon: Phone,
      title: "WhatsApp",
      subtitle: "(22) 99255-3397",
      description: "Conversa rápida e direta",
      link: "https://wa.me/5522992553397?text=Olá%20Matheus!%20Gostei%20do%20seu%20trabalho%20e%20gostaria%20de%20conversar%20sobre%20uma%20oportunidade.",
      external: true,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/20",
      hoverColor: "hover:bg-green-500/10",
    },
  ];

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

  const handleContactClick = (contact: any) => {
    if (contact.copyable) {
      handleCopyEmail();
    } else if (contact.download) {
      window.open(contact.link, "_blank");
    } else {
      window.open(contact.link, contact.external ? "_blank" : "_self");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black  to-black py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#8B45E0] to-purple-600 bg-clip-text text-transparent text-sm font-semibold tracking-wide uppercase mb-4">
            <div className="w-8 h-px bg-gradient-to-r from-[#8B45E0] to-purple-600"></div>
            Contato
            <div className="w-8 h-px bg-gradient-to-r from-[#8B45E0] to-purple-600"></div>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Vamos
            <span className="bg-gradient-to-r from-[#8B45E0] to-purple-600 bg-clip-text text-transparent">
              {" "}
              conversar
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Estou sempre aberto a novas oportunidades e parcerias. Entre em
            contato através dos canais abaixo.
          </p>

          {/* Availability Status */}
          <div className="inline-flex items-center gap-2 mt-8 px-4 py-2 bg-green-100 text-green-800 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">
              Disponível para novos projetos
            </span>
          </div>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contacts.map((contact, index) => {
            const IconComponent = contact.icon;
            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-[12px] ${contact.bgColor} ${contact.hoverColor}  transition-all duration-300 hover:shadow-xl  hover:-translate-y-1 cursor-pointer`}
                onClick={() => handleContactClick(contact)}
              >
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${contact.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                ></div>

                <div className="relative p-6">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${contact.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-white">
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

                    <p className="text-sm font-medium text-gray-200 break-all">
                      {contact.subtitle}
                    </p>

                    <p className="text-xs text-gray-300">
                      {contact.description}
                    </p>
                  </div>

                  {/* Hover indicator */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Location Card */}
          <div className="bg-[#101010] rounded-[12px] p-8  border border-[#8B45E0]  shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-[12px] flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Localização
                </h3>
                <p className="text-white">Araruama, Rio de Janeiro, BR</p>
              </div>
            </div>
            <p className="text-sm text-white">
              Trabalho remotamente com clientes do Brasil e exterior. Disponível
              para reuniões presenciais na região.
            </p>
          </div>

          {/* Response Time Card */}
          <div className="bg-[#101010] rounded-[12px] p-8 border border-[#8B45E0] shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#8B45E0] to-purple-500 rounded-xl flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Tempo de Resposta
                </h3>
                <p className="text-white">Até 24 horas</p>
              </div>
            </div>
            <p className="text-sm text-white">
              Respondo todas as mensagens em até 24 horas. Para urgências,
              prefira o WhatsApp.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-[#8B45E0]  to-purple-600 rounded-[12px] p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">
            Pronto para começar seu projeto?
          </h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Vamos transformar suas ideias em realidade. Entre em contato e vamos
            discutir como posso ajudar você.
          </p>
          <button
            onClick={() =>
              window.open(
                "https://wa.me/5522992553397?text=Olá%20Matheus!%20Gostei%20do%20seu%20trabalho%20e%20gostaria%20de%20conversar%20sobre%20uma%20oportunidade.",
                "_blank"
              )
            }
            className="bg-white text-[#8B45E0] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 inline-flex items-center gap-2"
          >
            <Phone className="w-5 h-5" />
            Conversar no WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}
