import React from 'react';
import { Activity, Lock, Zap, Compass, LineChart, Shield } from 'lucide-react';

export const features = [
  {
    icon: <Activity className="h-6 w-6" />,
    title: "Análises em Tempo Real",
    description: "Acompanhe os movimentos do mercado com gráficos avançados e indicadores atualizados em tempo real."
  },
  {
    icon: <Lock className="h-6 w-6" />,
    title: "Segurança de Nível Bancário",
    description: "Seus ativos são protegidos com criptografia de padrão militar e autenticação multifator."
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Execução Instantânea",
    description: "Execute operações em milissegundos com nosso motor de trading de alta performance."
  },
  {
    icon: <Compass className="h-6 w-6" />,
    title: "Portfólio Inteligente",
    description: "Otimize seus investimentos em criptomoedas com sugestões de portfólio baseadas em IA."
  },
  {
    icon: <LineChart className="h-6 w-6" />,
    title: "Alertas de Preço",
    description: "Nunca perca uma oportunidade com alertas e notificações personalizáveis de preços."
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Armazenamento Seguro (Cold Wallet)",
    description: "A maior parte dos ativos é armazenada offline em cold wallets para máxima segurança."
  }
];
