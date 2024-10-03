import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">
              EdSolutions
            </h3>
            <p className="text-gray-400">
              Transformando visitantes em clientes com landing pages de alto
              desempenho.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4 text-indigo-300">
              Links Rápidos
            </h4>
            <ul className="space-y-2">
              {["Início", "Serviços", "Processo", "Portfólio", "Contato"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-indigo-400 transition duration-300"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4 text-indigo-300">
              Entre em Contato
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-indigo-400" />
                <a
                  href="mailto:eduardolima2417@gmail.com"
                  className="text-gray-400 hover:text-indigo-400 transition duration-300"
                >
                  eduardolima2417@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-indigo-400" />
                <a
                  href="tel:+551199999999"
                  className="text-gray-400 hover:text-indigo-400 transition duration-300"
                >
                  +55 (92) 99188-7687
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-indigo-400" />
                <span className="text-gray-400">Manaus, AM - Brasil</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; 2024 EdSolutions. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
