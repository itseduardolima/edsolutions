import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { reasons } from "@/mock/reasons";

const ReasonsSection = () => {
  return (
    <section className="container mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400 mb-12">
        Por que Escolher a EdSolutions?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reasons.map((item, index) => (
          <motion.div
            key={item.title}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <CheckCircle className="w-8 h-8 text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-indigo-300">
              {item.title}
            </h3>
            <p className="text-gray-400">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ReasonsSection;
