import { StaticImageData } from "next/image";
import project1 from "@/public/assets/images/workflow-pro.png";
import project2 from "@/public/assets/images/restaurant.png";
import project3 from "@/public/assets/images/kadu-fitness.jpeg";

export interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
  rating: number;
  link: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "WorkflowPro Landing Page",
    description:
      "Modelo de landing page elegante e responsivo, projetado para mostrar ferramentas de automação de fluxo de trabalho e SaaS. Perfeito para pequenas e médias empresas, ele apresenta seções personalizáveis ​​como Recursos, Preços e FAQ. Com animações envolventes, botões de call-to-action de alta conversão e otimização de SEO, o WorkflowPro ajuda apresentar serviços forma eficaz e converter leads sem esforço.",
    image: project1,
    rating: 5,
    link: "https://workflow-pro-tau.vercel.app/",
  },
  {
    id: 2,
    title: "Restaurante Arte & Sabor Landing Page",
    description:
      "Esta é uma landing page desenvolvida para um restaurante fictício. O objetivo principal desta página é apresentar o restaurante, seu cardápio diversificado e atrair clientes por meio de um design moderno e intuitivo.",
    image: project2,
    rating: 4,
    link: "https://restaurante-sabor-e-arte.vercel.app/",
  },
  {
    id: 3,
    title: "Kadu Fitness Landing Page",
    description:
      "Landing page dedicada a apresentar as diversas aulas oferecidas na Kadu Fitness, bem como destacar os talentosos professores que as conduzem.",
    image: project3,
    rating: 3,
    link: "https://kadufitness.netlify.app/",
  },
];
