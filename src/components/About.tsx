export default function About() {
  return (
    <section id="sobre" className="pt-[50px] pb-20 relative">
      <div className="container mx-auto px-4 relative">
        <div className="mx-auto text-left pl-[6px] sm:pl-[8px] md:pl-[216px]">
          {" "}
          {/* Alinhamento ajustado */}
          <h2 className="text-[48px] leading-[100%] font-semibold text-white mb-12 mt-12 max-w-[481px]">
            Matheus Quintanilha
          </h2>
          <div className="space-y-6 text-white text-[24px] leading-[160%] font-medium max-w-[1216px]">
            <p>
              Sou um desenvolvedor front-end com experiência na criação e
              manutenção de aplicações web escaláveis. Possuo habilidades
              sólidas em HTML, CSS, JavaScript, TypeScript, React, NextJS e
              Angular, além de conhecimento em UI/UX com TailwindCSS, Bootstrap
              e Figma.
            </p>

            <p>
              Tenho experiência prática no desenvolvimento de interfaces
              dinâmicas e reutilizáveis, seguindo boas práticas de código,
              versionamento com Git/GitHub e metodologias ágeis como Scrum e
              Kanban. Além disso, possuo conhecimento em SQL e ferramentas como
              Storybook e VSCode.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
