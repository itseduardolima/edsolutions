import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="início"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 opacity-50"></div>
        <div className="absolute inset-0 bg-[url('/circuit-board.svg')] opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <motion.h1
          className="text-6xl md:text-8xl font-extrabold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
            Transforme Ideias em
          </span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">
            Conversões Poderosas
          </span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Desbloqueie o potencial máximo do seu negócio com landing pages que
          não apenas impressionam, mas convertem. Seja bem-vindo à revolução
          digital.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.a
            href="#contato"
            className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-indigo-700 hover:to-blue-700 transition duration-300 shadow-lg hover:shadow-xl inline-flex items-center transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Inicie sua Jornada <ArrowRight className="ml-2 w-5 h-5" />
          </motion.a>
          <motion.a
            href="#portfólio"
            className="bg-transparent border-2 border-indigo-400 text-indigo-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-400 hover:text-white transition duration-300 shadow-lg hover:shadow-xl inline-flex items-center transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Nosso Trabalho
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <a
          href="#serviços"
          className="text-white opacity-75 hover:opacity-100 transition-opacity duration-300"
        >
          <ArrowRight className="w-8 h-8 rotate-90" />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
