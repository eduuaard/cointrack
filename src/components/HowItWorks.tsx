import { Button } from "@/components/ui/button";
import { steps } from "../data/howItWorks";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-[#12141C] to-crypto-blue">
      <div className="container mx-auto px-4">
        {/* Título e descrição */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Como Funciona
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Começar a usar o CoinTrack é fácil. Siga estes passos simples para monitorar suas criptomoedas com segurança.
          </p>
        </div>

        {/* Passos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 animate-on-scroll"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <span className="absolute -top-4 -left-4 bg-crypto-blue border rounded-md border-crypto-purple/30 text-crypto-purple font-bold text-xl px-3 py-1">
                {step.number}
              </span>
              <div className="bg-crypto-purple/20 rounded-xl w-12 h-12 flex items-center justify-center mb-6 text-crypto-purple">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Button size="lg" className="bg-crypto-purple hover:bg-crypto-dark-purple text-white px-8">
            Criar Conta Gratuita
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
