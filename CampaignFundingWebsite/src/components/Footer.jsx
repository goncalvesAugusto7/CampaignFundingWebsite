// src/components/Footer.jsx
import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#92BFB1] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-[#694A38] rounded-lg flex items-center justify-center">
                <span className="text-[#F4AC45] font-bold text-xl font-['Rubik']">
                  V
                </span>
              </div>
              <span className="text-[#694A38] font-['Rubik'] text-2xl font-bold">
                Vitrine
              </span>
            </div>
            <p className="text-[#694A38] font-['Rubik'] leading-relaxed opacity-90">
              Produtos selecionados com qualidade e estilo para você. Confira
              nossa vitrine e encontre o que procura!
            </p>
            <div className="flex space-x-4">
              {[FaInstagram, FaFacebook, FaWhatsapp].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-[#694A38] rounded-full flex items-center justify-center hover:bg-[#F4AC45] hover:text-[#694A38] transition-all duration-300 transform hover:scale-110"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-[#694A38] font-['Rubik'] text-lg font-bold mb-4">
              Links Rápidos
            </h3>
            <ul className="space-y-2">
              {[
                "Início",
                "Produtos",
                "Sobre Nós",
                "Contato",
                "Política de Privacidade",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[#694A38] font-['Rubik'] hover:text-[#F4AC45] transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#F4AC45] mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categorias */}
          <div>
            <h3 className="text-[#694A38] font-['Rubik'] text-lg font-bold mb-4">
              Categorias
            </h3>
            <ul className="space-y-2">
              {[
                "Eletrônicos",
                "Acessórios",
                "Casa & Decoração",
                "Esportes",
                "Promoções",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[#694A38] font-['Rubik'] hover:text-[#F4AC45] transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#F4AC45] mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-[#694A38] font-['Rubik'] text-lg font-bold mb-4">
              Contato
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-[#694A38] font-['Rubik']">
                <FaMapMarkerAlt className="w-5 h-5 mt-1 text-[#F4AC45] flex-shrink-0" />
                <span>
                  Rua Exemplo, 123 - Centro
                  <br />
                  São Paulo - SP, 01000-000
                </span>
              </li>
              <li className="flex items-center space-x-3 text-[#694A38] font-['Rubik']">
                <FaPhone className="w-5 h-5 text-[#F4AC45] flex-shrink-0" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center space-x-3 text-[#694A38] font-['Rubik']">
                <FaEnvelope className="w-5 h-5 text-[#F4AC45] flex-shrink-0" />
                <span>contato@vitrine.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#694A38] border-opacity-30">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-[#694A38] font-['Rubik'] text-sm text-center md:text-left">
              © 2026 Vitrine. Todos os direitos reservados.
            </p>
            <p className="text-[#694A38] font-['Rubik'] text-sm flex items-center">
              Feito com <span className="text-[#F4AC45] mx-1">❤</span> e React
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
