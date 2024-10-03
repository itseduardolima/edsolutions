import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { portfolioItems } from '@/mock/portfolio'
import Image from 'next/image'

const PortfolioSection = () => {
  return (
    <section id="portfólio" className="container mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400 mb-12">
        Nosso Portfólio
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioItems.map((item) => (
          <motion.div
            key={item.id}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative">
              <Image 
                src={item.image} 
                alt={item.title} 
                className="w-full h-48 object-cover"
                width={400}
                height={200}
                placeholder="blur"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a 
                  href={item.link} 
                  className="bg-indigo-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-indigo-700 transition-colors duration-300 transform hover:scale-110"
                >
                  Ver Projeto
                </a>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-indigo-300">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
              <div className="mt-2 flex items-center">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
                <span className="ml-2 text-gray-400">({item.rating}.0)</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default PortfolioSection