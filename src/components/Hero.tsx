export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center relative overflow-hidden hero-background "
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-purple-300 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse delay-500"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <p className="text-gray-300 text-lg mb-4">Olá, eu sou</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-c28 to-purple-500">
              Matheus Quintanilha
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Desenvolvedor Frontend
            </p>
            <a
              href="https://linkedin.com/in/matheus-quintanilha"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Acessar LinkedIn
            </a>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl transform rotate-12 animate-float-glow flex items-center justify-center shadow-2xl">
                <div className="text-white text-8xl transform -rotate-12">
                  &lt;/&gt;
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-bounce delay-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
