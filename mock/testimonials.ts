import { StaticImageData } from 'next/image'
import testimonial1 from '@/public/assets/images/boy1.png'
import testimonial2 from '@/public/assets/images/girl.png'
import testimonial3 from '@/public/assets/images/boy2.png'
import testimonial4 from '@/public/assets/images/girl2.png'

export interface Testimonial {
  id: number
  name: string
  company: string
  text: string
  image: StaticImageData
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "João Silva",
    company: "Tech Innovations",
    text: "A EdSolutions transformou completamente nossa presença online. Nossa taxa de conversão aumentou em 150% após o lançamento da nova landing page!",
    image: testimonial1,
    rating: 5
  },
  {
    id: 2,
    name: "Maria Santos",
    company: "Startup Dynamo",
    text: "A equipe da EdSolutions é incrivelmente talentosa. Eles entregaram uma landing page que superou todas as nossas expectativas e impulsionou nossas vendas.",
    image: testimonial2,
    rating: 5
  },
  {
    id: 3,
    name: "Carlos Mendes",
    company: "Global Solutions",
    text: "Profissionalismo, criatividade e resultados. É isso que você obtém com a EdSolutions. Altamente recomendado para qualquer empresa que queira se destacar online.",
    image: testimonial3,
    rating: 5
  },
  {
    id: 4,
    name: "Ana Rodrigues",
    company: "EcoGreen Innovations",
    text: "A landing page criada pela EdSolutions não só é visualmente impressionante, mas também altamente eficaz. Nosso engajamento de clientes aumentou significativamente.",
    image: testimonial4,
    rating: 5
  }
]