export default function Skills() {
  const skills = [
    {
      name: "HTML",
      icon: "/images/logos/html.svg",
    },
    { name: "CSS", icon: "/images/logos/css.svg" },
    {
      name: "JavaScript",
      icon: "/images/logos/js.svg",
    },
    {
      name: "TypeScript",
      icon: "/images/logos/ts.svg",
    },
    {
      name: "React",
      icon: "/images/logos/react.svg",
    },
    {
      name: "Next.js",
      icon: "/images/logos/next.svg",
    },
    {
      name: "Angular",
      icon: "/images/logos/angular.svg",
    },
    {
      name: "Tailwind",
      icon: "/images/logos/tailwind.svg",
    },
    {
      name: "Bootstrap",
      icon: "/images/logos/bootstrap.svg",
    },
    {
      name: "Figma",
      icon: "/images/logos/figma.svg",
    },
    {
      name: "Git",
      icon: "/images/logos/git.svg",
    },
    {
      name: "Storybook",
      icon: "/images/logos/storybook.svg",
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

        {/* Grid responsivo */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 max-w-fit mx-auto mt-[78px]">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group relative w-[176px] h-[176px] rounded-[24px] bg-[#101010] p-6 hover:transform hover:scale-110 transition-all duration-300 cursor-pointer"
              style={{ borderTop: "3px solid #964CF0" }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-lg flex items-center justify-center">
                <img src={skill.icon} alt={skill.name} className="w-12 h-12" />
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
    </section>
  );
}
