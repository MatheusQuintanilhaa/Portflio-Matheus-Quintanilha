export default function Skills() {
  const skills = [
    {
      name: "HTML",
      icon: "../../public/images/logos/html.svg",
    },
    { name: "CSS", icon: "../../public/images/logos/css.svg" },
    {
      name: "JavaScript",
      icon: "../../public/images/logos/js.svg",
    },
    {
      name: "TypeScript",
      icon: "../../public/images/logos/ts.svg",
    },
    {
      name: "React",
      icon: "../../public/images/logos/react.svg",
    },
    {
      name: "Next.js",
      icon: "../../public/images/logos/next.svg",
    },
    {
      name: "Angular",
      icon: "../../public/images/logos/angular.svg",
    },
    {
      name: "Tailwind",
      icon: "../../public/images/logos/tailwind.svg",
    },
    {
      name: "Bootstrap",
      icon: "../../public/images/logos/bootstrap.svg",
    },
    {
      name: "Figma",
      icon: "../../public/images/logos/figma.svg",
    },
    {
      name: "Git",
      icon: "../../public/images/logos/git.svg",
    },
    {
      name: "Storybook",
      icon: "../../public/images/logos/storybook.svg",
    },
  ];

  return (
    <section id="conhecimentos" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-flex items-center justify-center w-[181px] h-[48px] px-[32px] py-[12px] rounded-[6px] border-2 border-[#964CF0] bg-[#101010] text-white font-sans font-semibold text-[20px] leading-[48px] mb-4">
            Tecnologias
          </span>

          <h2 className="font-medium text-[48px] leading-[100%] tracking-[0%] text-center font-inter mt-7 text-white">
            Habilidades
          </h2>
        </div>

        {/* Layout em 2 fileiras de 6 cards cada */}
        <div className="flex flex-col gap-8 max-w-fit mx-auto mt-[78px]">
          {/* Primeira fileira */}
          <div className="flex gap-8">
            {skills.slice(0, 6).map((skill) => (
              <div
                key={skill.name}
                className="group relative w-[176px] h-[176px] rounded-[24px] bg-[#101010] p-6 hover:transform hover:scale-110 transition-all duration-300 cursor-pointer"
                style={{ borderTop: "3px solid #964CF0" }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-lg flex items-center justify-center">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-12 h-12"
                  />
                </div>
                <p className="text-center text-sm font-semibold text-white">
                  {skill.name}
                </p>

                {/* Tooltip */}
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white px-3 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  {skill.name}
                </div>
              </div>
            ))}
          </div>

          {/* Segunda fileira */}
          <div className="flex gap-8">
            {skills.slice(6, 12).map((skill) => (
              <div
                key={skill.name}
                className="group relative w-[176px] h-[176px] rounded-[24px] bg-[#101010] p-6 hover:transform hover:scale-110 transition-all duration-300 cursor-pointer"
                style={{ borderTop: "3px solid #964CF0" }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-lg flex items-center justify-center">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-12 h-12"
                  />
                </div>
                <p className="text-center text-sm font-semibold text-white">
                  {skill.name}
                </p>

                {/* Tooltip */}
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white px-3 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  {skill.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
