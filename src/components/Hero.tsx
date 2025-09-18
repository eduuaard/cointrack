import { ArrowRight, ArrowUpRight, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-hero hero-glow">
      {/* Elementos de fundo animados */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-crypto-purple/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-crypto-light-purple/10 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Texto e CTA */}
          <div className="lg:w-1/2 animate-fade-in-left">
            <div className="inline-flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-6">
              <span className="text-xs font-medium text-crypto-purple mr-2">Novos Recursos</span>
              <span className="text-xs text-gray-300">- Monitoramento em tempo real de criptomoedas</span>
              <ChevronRight className="h-4 w-4 text-gray-400 ml-1" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-gradient">CoinTrack</span> {`acompanhe seus investimentos`}
            </h1>

            <p className="text-lg text-gray-300 mb-8 max-w-lg">
              {`Fique por dentro do mercado de criptomoedas com atualizações em tempo real, gráficos interativos e insights inteligentes para tomar decisões seguras.`}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-crypto-purple hover:bg-crypto-dark-purple text-white px-8 py-6">
                Comece Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-gray-700 text-white hover:bg-white/5 py-6">
                Ver Funcionalidades
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="mt-8 flex items-center space-x-6">
              <div>
                <p className="text-2xl font-bold text-white">10K+</p>
                <p className="text-sm text-gray-400">Criptomoedas Monitoradas</p>
              </div>
              <div className="h-12 w-px bg-gray-700"></div>
              <div>
                <p className="text-2xl font-bold text-white">500K+</p>
                <p className="text-sm text-gray-400">Transações Processadas</p>
              </div>
              <div className="h-12 w-px bg-gray-700"></div>
              <div>
                <p className="text-2xl font-bold text-white">120+</p>
                <p className="text-sm text-gray-400">Mercados Globais</p>
              </div>
            </div>
          </div>

          {/* Imagem com indicadores */}
          <div className="lg:w-1/2 mt-12 lg:mt-0 animate-fade-in-right">
            <div className="relative max-w-md mx-auto animate-float">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&h=800"
                alt="Dashboard CoinTrack"
                className="rounded-xl shadow-2xl border border-white/10"
              />

              <div className="absolute -right-6 -bottom-6 bg-crypto-purple/20 backdrop-blur-md rounded-lg p-4 border border-crypto-purple/30 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 bg-green-500/20 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Variação 24h</p>
                    <p className="text-lg font-bold text-green-500">+12,34%</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
