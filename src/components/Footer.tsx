import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#12141C] pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-4">
              Coin<span className="text-crypto-purple">Track</span>
            </h2>
            <p className="text-gray-400 mb-6 max-w-xs">
              A plataforma mais confiável para acompanhar suas criptomoedas, oferecendo insights inteligentes e segurança incomparável.
            </p>
            <div className="flex space-x-4">
              <a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Produtos</h3>
            <ul className="space-y-2">
              <li><a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">Dashboard</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">Carteira</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">API</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">Mercados</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">Alertas de Preço</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li><a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">Blog</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">Tutoriais</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">Dados de Mercado</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">Documentação</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">Central de Ajuda</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li><a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">Sobre Nós</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">Carreiras</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">Imprensa</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">Legal & Privacidade</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">Contato</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} CoinTrack. Todos os direitos reservados. Desenvolvido por Eduardo Marques
            </p>
            <div className="flex space-x-6">
              <a href="#!" className="text-gray-400 hover:text-crypto-purple text-sm transition-colors">Termos de Serviço</a>
              <a href="#!" className="text-gray-400 hover:text-crypto-purple text-sm transition-colors">Política de Privacidade</a>
              <a href="#!" className="text-gray-400 hover:text-crypto-purple text-sm transition-colors">Política de Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
