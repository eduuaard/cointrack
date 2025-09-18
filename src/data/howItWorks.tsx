import React from "react";
import { Download, Wallet, BarChart4 } from "lucide-react";

export const steps = [
    {
      number: "01",
      icon: <Download className="h-6 w-6" />,
      title: "Crie Sua Conta",
      description: "Cadastre-se em minutos com nosso processo simplificado. Sem formulários complicados ou longas verificações."
    },
    {
      number: "02",
      icon: <Wallet className="h-6 w-6" />,
      title: "Adicione Fundos",
      description: "Deposite facilmente suas criptomoedas ou dinheiro tradicional com múltiplas opções de pagamento e sem taxas de depósito."
    },
    {
      number: "03",
      icon: <BarChart4 className="h-6 w-6" />,
      title: "Comece a Monitorar",
      description: "Acompanhe suas criptomoedas e investimentos em tempo real com ferramentas intuitivas e dados atualizados."
    }
];
