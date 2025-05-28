export default function Contact() {
  const contactInfo = [
    {
      icon: "👤",
      label: "Nome",
      value: "Matheus Quintanilha",
      link: null,
    },
    {
      icon: "✉️",
      label: "E-mail",
      value: "email@gmail.com",
      link: "mailto:email@gmail.com",
    },
    {
      icon: "📸",
      label: "Instagram",
      value: "@username",
      link: "https://instagram.com/username",
    },
    {
      icon: "📱",
      label: "Telefone",
      value: "(14) 99999-9999",
      link: "tel:+5514999999999",
    },
  ];

  return (
    <section id="contato" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Contato
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Fale comigo</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {contactInfo.map((contact) => {
            const content = (
              <div
                key={contact.label}
                className="border border-gray-700 rounded-lg p-6 text-center hover:border-gray-600 transition-colors duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-2xl">{contact.icon}</span>
                </div>
                <h3 className="font-semibold mb-2">{contact.label}</h3>
                <p className="text-gray-400 text-sm">{contact.value}</p>
              </div>
            );

            return contact.link ? (
              <a
                key={contact.label}
                href={contact.link}
                target={contact.link.startsWith("http") ? "_blank" : undefined}
                rel={
                  contact.link.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="block hover:transform hover:scale-105 transition-transform duration-300"
              >
                {content}
              </a>
            ) : (
              <div
                key={contact.label}
                className="hover:transform hover:scale-105 transition-transform duration-300"
              >
                {content}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-400">Feito com muito amor e café ☕</p>
        </div>
      </div>
    </section>
  );
}
