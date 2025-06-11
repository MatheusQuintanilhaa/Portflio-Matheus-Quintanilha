export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "E-commerce Platform",
      description:
        "Aqui vai uma pequena descrição sobre o projeto e as ferramentas utilizadas.",
      image: "",
    },
    {
      id: 2,
      name: "Dashboard Analytics",
      description:
        "Aqui vai uma pequena descrição sobre o projeto e as ferramentas utilizadas.",
      image: "",
    },
    {
      id: 3,
      name: "Task Manager App",
      description:
        "Aqui vai uma pequena descrição sobre o projeto e as ferramentas utilizadas.",
      image: "",
    },
    {
      id: 4,
      name: "Portfolio Website",
      description:
        "Aqui vai uma pequena descrição sobre o projeto e as ferramentas utilizadas.",
      image: "",
    },
    {
      id: 5,
      name: "Weather App",
      description:
        "Aqui vai uma pequena descrição sobre o projeto e as ferramentas utilizadas.",
      image: "",
    },
    {
      id: 6,
      name: "Social Media Dashboard",
      description:
        "Aqui vai uma pequena descrição sobre o projeto e as ferramentas utilizadas.",
      image: "",
    },
  ];

  return (
    <section id="projetos" className="relative py-32 overflow-hidden bg-black">
      {/* Gradiente preto em cima (mais alto e suave) */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-black to-transparent z-10" />

      {/* Eclipse roxo central, maior e mais suave */}
      <div className="absolute top-1/2 left-1/2 w-[1000px] h-[3000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#964CF0] blur-[700px] opacity-30 z-0" />

      {/* Gradiente preto embaixo (começando mais abaixo) */}
      <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-black to-transparent z-10" />

      {/* Conteúdo da seção */}
      <div className="relative z-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-flex items-center justify-center w-[160px] h-[48px] px-[32px] py-[12px] rounded-[6px] border-[2px] border-[#964CF0] bg-[#101010] text-white font-inter font-semibold text-[20px] leading-[100%] text-center align-middle mb-4">
            Trabalhos
          </span>

          <h2 className="w-[332px] h-[58px] text-[48px] leading-[100%] font-semibold text-center text-white mx-auto mt-7">
            Meus projetos
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-14 max-w-6xl mx-auto mt-[81px]">
          {projects.map((project) => (
            <div
              key={project.id}
              className="w-[384px] h-[327px] rounded-[12px] p-[2px] transition-all duration-300 hover:scale-105 bg-gradient-to-b from-[#964CF0] to-[#170033]"
            >
              <div className="flex flex-col justify-start h-full rounded-[10px] bg-[#101010]">
                <div className="w-[352px] h-[156px] rounded-[8px] bg-[#964CF0] mx-auto mt-4"></div>
                <div className="w-[352px] h-[103px] gap-4 p-1 flex flex-col mx-auto mt-4">
                  <h3 className="w-[344px] h-[29px] text-white font-inter font-semibold text-[24px] leading-[120%]">
                    {project.name}
                  </h3>
                  <p className="w-[344px] h-[50px] text-white font-inter font-medium text-[18px] leading-[140%]">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
