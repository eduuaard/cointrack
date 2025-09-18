// pricingPlansData.ts

export const pricingPlans = [
  {
    name: "Básico",
    price: { monthly: "R$49", annual: "R$29" },
    description: "Perfeito para iniciantes que querem acompanhar criptomoedas.",
    features: [
      "Acesso a 20+ criptomoedas",
      "Ferramentas básicas de gráficos",
      "Dados de mercado com atraso de 15 minutos",
      "Suporte por e-mail",
      "Acesso ao app mobile"
    ],
    buttonText: "Começar"
  },
  {
    name: "Pro",
    price: { monthly: "R$197", annual: "R$117" },
    description: "Ideal para traders ativos que buscam ferramentas avançadas.",
    features: [
      "Acesso a 50+ criptomoedas",
      "Ferramentas avançadas de gráficos",
      "Dados de mercado em tempo real",
      "Suporte prioritário por e-mail",
      "Taxas de negociação reduzidas (0,1%)",
      "Acesso à API",
      "Análises de portfólio"
    ],
    highlighted: true,
    buttonText: "Teste grátis de 7 dias"
  },
  {
    name: "Enterprise",
    price: { monthly: "R$497", annual: "R$297" },
    description: "Solução completa para traders profissionais.",
    features: [
      "Acesso a todas as criptomoedas",
      "Gráficos profissionais",
      "Dados de mercado em tempo real",
      "Suporte dedicado 24/7",
      "Taxas de negociação zero",
      "Acesso avançado à API",
      "Segurança institucional",
      "Relatórios personalizados",
      "Gerenciamento de equipe"
    ],
    buttonText: "Fale com vendas"
  }
];
