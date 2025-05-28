export default function About() {
  return (
    <section id="sobre" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="inline-block bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Sobre mim
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Matheus Quintanilha
          </h2>

          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
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
