import { motion } from "framer-motion";
import { MessageSquare, Zap, Layout } from "lucide-react";
import { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

const ContactSection = () => {
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setIsLoading(true);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        form,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID || ""
      );

      toast.success("Mensagem enviada com sucesso!");
      form.reset();
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      toast.error("Erro ao enviar a mensagem. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section id="contato" className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-2xl overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-1 p-8">
            <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">
              Vamos Conversar
            </h2>
            <p className="text-gray-300 mb-6">
              Estamos prontos para criar a landing page perfeita para o seu
              negócio.
            </p>
            <form className="space-y-4" onSubmit={sendEmail}>
              <input
                required
                type="text"
                placeholder="Seu Nome"
                name="name"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-shadow duration-300 text-white"
              />
              <input
                required
                type="email"
                name="email"
                placeholder="Seu Email"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-shadow duration-300 text-white"
              />
              <textarea
                required
                name="message"
                placeholder="Sua Mensagem"
                rows={4}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-shadow duration-300 text-white"
              ></textarea>
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-indigo-700 hover:to-blue-700 transition duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isLoading}
              >
                Enviar Mensagem
              </motion.button>
            </form>
          </div>
          <div className="md:flex-1 bg-gradient-to-br from-indigo-900 to-blue-900 text-white p-8 flex items-center justify-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Informações de Contato
              </h3>
              <motion.p
                className="mb-2 flex items-center"
                whileHover={{ scale: 1.05, originX: 0 }}
              >
                <MessageSquare className="mr-2 w-5 h-5" />{" "}
                eduardolima2417@gmail.com
              </motion.p>
              <motion.p
                className="mb-2 flex items-center"
                whileHover={{ scale: 1.05, originX: 0 }}
              >
                <Zap className="mr-2 w-5 h-5" /> +55 (92) 99188-7687
              </motion.p>
              <motion.p
                className="flex items-center"
                whileHover={{ scale: 1.05, originX: 0 }}
              >
                <Layout className="mr-2 w-5 h-5" /> Manaus, AM - Brasil
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
