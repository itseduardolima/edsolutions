import { Service } from "@/types/Service";
import { Code, Layout, Zap } from "lucide-react";

export const services: Service[] = [
  {
    icon: <Layout className="w-12 h-12 text-indigo-400" />,
    title: "Design Personalizado",
    description:
      "Criamos layouts únicos que refletem a sua marca e cativam seu público-alvo.",
  },
  {
    icon: <Code className="w-12 h-12 text-indigo-400" />,
    title: "Desenvolvimento Ágil",
    description:
      "Codificação rápida e eficiente para lançamento imediato, sem comprometer a qualidade.",
  },
  {
    icon: <Zap className="w-12 h-12 text-indigo-400" />,
    title: "Otimização de Conversão",
    description:
      "Estratégias comprovadas e testes A/B para aumentar suas taxas de conversão.",
  },
];
