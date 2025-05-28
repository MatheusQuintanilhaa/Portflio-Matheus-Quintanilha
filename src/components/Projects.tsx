export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "E-commerce Platform",
      description:
        "Plataforma de e-commerce desenvolvida com React e TypeScript, com integração de pagamentos.",
      link: "#",
    },
    {
      id: 2,
      name: "Dashboard Analytics",
      description:
        "Dashboard para análise de dados com gráficos interativos usando Chart.js e React.",
      link: "#",
    },
    {
      id: 3,
      name: "Task Manager App",
      description:
        "Aplicativo de gerenciamento de tarefas com drag & drop e notificações em tempo real.",
      link: "#",
    },
    {
      id: 4,
      name: "Portfolio Website",
      description:
        "Site de portfólio responsivo com animações suaves e design moderno.",
      link: "#",
    },
    {
      id: 5,
      name: "Weather App",
      description:
        "Aplicativo de previsão do tempo com geolocalização e interface intuitiva.",
      link: "#",
    },
    {
      id: 6,
      name: "Social Media Dashboard",
      description:
        "Dashboard para gerenciamento de redes sociais com métricas e agendamento de posts.",
      link: "#",
    },
  ];

  return (
    <section id="projetos" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Trabalhos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">Meus projetos</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border border-gray-700 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-purple-600 to-purple-800"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.name}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300"
                >
                  Ver mais
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
