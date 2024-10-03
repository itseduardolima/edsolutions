import { useState, useRef } from 'react'
import { motion, AnimatePresence, PanInfo } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import Image from 'next/image'
import { testimonials } from '@/mock/testimonials'

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const testimonialRef = useRef<HTMLDivElement>(null)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x > 100) {
      prevTestimonial()
    } else if (info.offset.x < -100) {
      nextTestimonial()
    }
  }

  const handleTestimonialClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (testimonialRef.current) {
      const rect = testimonialRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      if (x < rect.width / 2) {
        prevTestimonial()
      } else {
        nextTestimonial()
      }
    }
  }

  return (
    <section className="container mx-auto px-4 py-20 relative overflow-hidden">
      <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400 mb-12">
        Vozes de Sucesso
      </h2>
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTestimonial}
            ref={testimonialRef}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 p-8 rounded-2xl shadow-2xl max-w-4xl mx-auto cursor-pointer"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onDragEnd={handleDragEnd}
            onClick={handleTestimonialClick}
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="relative">
                <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg flex-shrink-0 border-4 border-indigo-700">
                  <Image 
                    src={testimonials[currentTestimonial].image} 
                    alt={testimonials[currentTestimonial].name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                    placeholder="blur"
                  />
                </div>
                <motion.div 
                  className="absolute -bottom-2 -right-2 bg-indigo-600 rounded-full p-1"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: 'spring', stiffness: 500, damping: 15 }}
                >
                  <Quote className="w-4 h-4 text-white" />
                </motion.div>
              </div>
              <div className="flex-grow">
                <motion.p 
                  className="text-gray-300 mb-4 text-lg italic leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  &ldquo;{testimonials[currentTestimonial].text}&rdquo;
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <p className="font-semibold text-xl text-indigo-400">{testimonials[currentTestimonial].name}</p>
                  <p className="text-gray-500">{testimonials[currentTestimonial].company}</p>
                  <div className="flex items-center mt-2">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="flex justify-center mt-4">
          {testimonials.map((_, index) => (
            <motion.div
              key={index}
              className={`w-3 h-3 rounded-full mx-1 ${index === currentTestimonial ? 'bg-indigo-600' : 'bg-indigo-900'}`}
              initial={{ scale: 1 }}
              animate={{ scale: index === currentTestimonial ? 1.2 : 1 }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection