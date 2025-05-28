export default function Skills() {
  const skills = [
    { name: "HTML", icon: "🌐", color: "from-orange-500 to-red-500" },
    { name: "CSS", icon: "🎨", color: "from-blue-500 to-blue-600" },
    { name: "JavaScript", icon: "⚡", color: "from-yellow-400 to-yellow-500" },
    { name: "TypeScript", icon: "📘", color: "from-blue-600 to-blue-700" },
    { name: "React", icon: "⚛️", color: "from-cyan-400 to-cyan-500" },
    { name: "Next.js", icon: "▲", color: "from-gray-700 to-gray-800" },
    { name: "Angular", icon: "🅰️", color: "from-red-600 to-red-700" },
    { name: "Tailwind", icon: "💨", color: "from-teal-400 to-teal-500" },
    { name: "Bootstrap", icon: "🅱️", color: "from-purple-600 to-purple-700" },
    { name: "Figma", icon: "🎯", color: "from-pink-500 to-purple-500" },
    { name: "Git", icon: "📚", color: "from-orange-600 to-red-600" },
    { name: "Storybook", icon: "📖", color: "from-pink-600 to-red-500" },
  ];

  return (
    <section id="conhecimentos" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Tecnologias
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">Habilidades</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group relative border border-gray-700 rounded-lg p-6 hover:transform hover:scale-110 transition-all duration-300 cursor-pointer"
            >
              <div
                className={`w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center text-2xl`}
              >
                {skill.icon}
              </div>
              <p className="text-center text-sm font-semibold">{skill.name}</p>

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
