import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-800 bg-opacity-90 backdrop-filter backdrop-blur-lg shadow-md z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <motion.div
            className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            EdSolutions
          </motion.div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-indigo-400 transition-colors duration-300"
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
          <ul
            className={`md:flex md:space-x-6 ${
              isMenuOpen ? "block" : "hidden"
            } md:block absolute md:relative top-full left-0 right-0 bg-gray-800 md:bg-transparent shadow-md md:shadow-none`}
          >
            {["Início", "Serviços", "Processo", "Portfólio", "Contato"].map(
              (item, index) => (
                <motion.li
                  key={item}
                  className="md:inline-block"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="block py-2 px-4 md:p-0 text-gray-300 hover:text-indigo-400 hover:bg-gray-700 md:hover:bg-transparent transition duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                </motion.li>
              )
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
