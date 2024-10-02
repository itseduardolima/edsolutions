"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { process } from "@/mock/process";

const ProcessSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="processo" className="container mx-auto px-4 py-20">
      <div className="bg-gradient-to-r from-indigo-900 to-blue-900 rounded-lg p-8 md:p-12 shadow-2xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Nosso Processo
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.map((step, index) => (
            <motion.div
              key={index}
              className="text-center bg-gray-800 bg-opacity-50 p-6 rounded-lg backdrop-filter backdrop-blur-lg hover:bg-opacity-70 transition-colors duration-300 transform hover:scale-105"
              initial="hidden"
              animate={controls}
              variants={fadeIn}
              custom={index}
              ref={ref}
            >
              <div className="text-5xl font-bold mb-4 text-indigo-400">
                {step.step}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-indigo-300">
                {step.title}
              </h3>
              <p className="text-gray-300">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
