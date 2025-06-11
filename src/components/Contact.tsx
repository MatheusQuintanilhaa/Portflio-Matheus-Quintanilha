import { Download, Mail, Instagram, Phone } from "lucide-react";

export default function ContactIcons() {
  const contacts = [
    {
      icon: Download,
      title: "Currículo",
      subtitle: "Download PDF",
      link: "/curriculo-matheus-quintanilha.pdf", // Substitua pelo caminho do seu PDF
      external: false,
      download: true,
    },
    {
      icon: Mail,
      title: "E-mail",
      subtitle: "matheussantos.quintanilha@gmail.com",
      link: "mailto:matheussantos.quintanilha@gmail.com",
      external: false,
    },
    {
      icon: Instagram,
      title: "Instagram",
      subtitle: "@matheus_quintanilha",
      link: "https://instagram.com/matheus_quintanilha",
      external: true,
    },
    {
      icon: Phone,
      title: "WhatsApp",
      subtitle: "(22) 99255-3397",
      link: "https://wa.me/5522992553397?text=Olá%20Matheus!%20Gostei%20do%20seu%20trabalho%20e%20gostaria%20de%20conversar%20sobre%20uma%20oportunidade.",
      external: true,
    },
  ];

  return (
    <div id="contato" className="bg-black py-20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center justify-center w-[142px] h-[48px] px-[32px] py-[12px] rounded-[6px] border-2 border-[#964CF0] bg-[#101010] text-white font-inter font-semibold text-[20px] leading-[100%] text-center align-middle mb-4 mt-8">
            Contato
          </span>

          <h2 className="font-medium text-[48px] leading-[100%] tracking-[0%] text-center font-inter mt-7 text-white">
            Fale comigo
          </h2>
        </div>

        {/* Contact Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mt-[78px]">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              target={contact.external ? "_blank" : "_self"}
              rel={contact.external ? "noopener noreferrer" : ""}
              download={
                contact.download
                  ? "Curriculo-Matheus-Quintanilha.pdf"
                  : undefined
              }
              className="flex flex-col items-center text-center group cursor-pointer transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Ícone circular */}
              <div className="w-[62px] h-[62px] rounded-full border-2 border-[#964CF0] bg-transparent flex items-center justify-center mb-4 group-hover:bg-[#964CF0] group-hover:shadow-lg group-hover:shadow-[#964CF0]/25 transition-all duration-300">
                <contact.icon className="w-6 h-6 text-[#964CF0] group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Título */}
              <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-[#964CF0] transition-colors duration-300">
                {contact.title}
              </h3>

              {/* Subtítulo */}
              <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">
                {contact.subtitle}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
