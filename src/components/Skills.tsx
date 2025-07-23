import { useState, memo } from "react";

const Skills = memo(() => {
  const [isPaused, setIsPaused] = useState(false);

  const skills = [
    { name: "HTML", icon: "/images/logos/html.svg", color: "#E34F26" },
    { name: "CSS", icon: "/images/logos/css.svg", color: "#1572B6" },
    { name: "JavaScript", icon: "/images/logos/js.svg", color: "#F7DF1E" },
    { name: "TypeScript", icon: "/images/logos/ts.svg", color: "#3178C6" },
    { name: "React", icon: "/images/logos/react.svg", color: "#61DAFB" },
    { name: "Next.js", icon: "/images/logos/next.svg", color: "#000000" },
    { name: "Angular", icon: "/images/logos/angular.svg", color: "#DD0031" },
    { name: "Tailwind", icon: "/images/logos/tailwind.svg", color: "#06B6D4" },
    {
      name: "Bootstrap",
      icon: "/images/logos/bootstrap.svg",
      color: "#7952B3",
    },
    { name: "Figma", icon: "/images/logos/figma.svg", color: "#EA3D4A" },
    { name: "Git", icon: "/images/logos/git.svg", color: "#F05032" },
    { name: "Node.js", icon: "/images/logos/node.svg", color: "#21A265" },
    {
      name: "Storybook",
      icon: "/images/logos/storybook.svg",
      color: "#FF4785",
    },
  ];

  // Duplica as skills para criar o efeito infinito
  const duplicatedSkills = [...skills, ...skills];

  type Skill = {
    name: string;
    icon: string;
    color: string;
  };

  interface SkillCardProps {
    skill: Skill;
    index: number;
  }

  const SkillCard = memo(({ skill, index }: SkillCardProps) => (
    <div
      className="group relative flex-shrink-0 w-[160px] h-[160px] rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] p-6 border border-gray-800/50 hover:border-purple-500/50 transition-all duration-500 cursor-pointer hover:shadow-2xl hover:shadow-purple-500/20"
      style={{
        animationDelay: `${index * 0.1}s`,
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Glow effect no hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/0 via-purple-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:via-purple-500/5 group-hover:to-purple-500/10 transition-all duration-500"></div>

      {/* Borda superior colorida */}
      <div
        className="absolute top-0 left-4 right-4 h-1 rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-300"
        style={{ backgroundColor: skill.color }}
      ></div>

      {/* Ícone */}
      <div className="relative z-10 w-16 h-16 mx-auto mb-4 rounded-xl bg-gray-800/50 flex items-center justify-center group-hover:scale-110 group-hover:bg-gray-700/50 transition-all duration-300">
        <img
          src={skill.icon}
          alt={skill.name}
          className="w-10 h-10 filter group-hover:brightness-110 transition-all duration-300"
        />
      </div>

      {/* Nome */}
      <p className="relative z-10 text-center text-sm font-semibold text-white/90 group-hover:text-white transition-colors duration-300">
        {skill.name}
      </p>

      {/* Tooltip melhorado */}
      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900/95 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none border border-gray-700/50 shadow-xl">
        <span className="relative z-10">{skill.name}</span>
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900/95"></div>
      </div>

      {/* Efeito de brilho sutil */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </div>
  ));
  SkillCard.displayName = "SkillCard";

  return (
    <>
      <section id="conhecimentos" className="py-20 bg-black overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center px-8 py-3 rounded-lg border-2 border-[#964CF0] bg-gradient-to-r from-[#101010] to-[#1a1a1a] text-white font-sans font-semibold text-lg mb-6 shadow-lg">
              Tecnologias
            </div>

            <h2 className="font-medium text-4xl md:text-5xl leading-tight text-center font-inter text-white mb-4">
              Minhas{" "}
              <span className="bg-gradient-to-r from-[#C28FFF] via-[#964CF0] to-[#8B4FE6] bg-clip-text text-transparent">
                Habilidades
              </span>
            </h2>

            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Tecnologias e ferramentas que domino para criar experiências
              incríveis
            </p>
          </div>

          {/* Scroll Container 1 - Esquerda para Direita */}
          <div className="relative mb-8">
            {/* Gradientes nas bordas */}
            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

            <div className="overflow-hidden">
              <div
                className={`flex gap-6 ${
                  isPaused
                    ? "animate-scroll-left paused"
                    : "animate-scroll-left"
                }`}
              >
                {duplicatedSkills.slice(0, 8).map((skill, index) => (
                  <SkillCard
                    key={`first-${skill.name}-${index}`}
                    skill={skill}
                    index={index}
                  />
                ))}
                {duplicatedSkills.slice(0, 8).map((skill, index) => (
                  <SkillCard
                    key={`first-dup-${skill.name}-${index}`}
                    skill={skill}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Scroll Container 2 - Direita para Esquerda */}
          <div className="relative">
            {/* Gradientes nas bordas */}
            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

            <div className="overflow-hidden">
              <div
                className={`flex gap-6 ${
                  isPaused
                    ? "animate-scroll-right paused"
                    : "animate-scroll-right"
                }`}
              >
                {duplicatedSkills.slice(4).map((skill, index) => (
                  <SkillCard
                    key={`second-${skill.name}-${index}`}
                    skill={skill}
                    index={index}
                  />
                ))}
                {duplicatedSkills.slice(4).map((skill, index) => (
                  <SkillCard
                    key={`second-dup-${skill.name}-${index}`}
                    skill={skill}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Indicador de interação */}
          <div className="text-center mt-12">
            <p className="text-gray-500 text-sm">
              <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse"></span>
              Passe o mouse sobre as tecnologias para pausar a animação
            </p>
          </div>

          {/* Stats section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50">
              <div className="text-3xl font-bold text-white mb-2">
                {skills.length}+
              </div>
              <div className="text-gray-400 text-sm">Tecnologias</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50">
              <div className="text-3xl font-bold text-white mb-2">2+</div>
              <div className="text-gray-400 text-sm">Anos na Área</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50">
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-400 text-sm">Projetos Concluídos</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50">
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-gray-400 text-sm">Dedicação</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

Skills.displayName = "Skills";

export default Skills;
