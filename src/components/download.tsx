import { motion } from "framer-motion";
import Mockup from "../assets/mockup_download.png"


import IconsAppStore from "../assets/iconStore.png"

const DownloadSection = () => {
  return (
    <section id="download-section" className="h-screen bg-primary bg-download bg-blend-multiply text-neutral py-16 flex">
      {/* Container principal */}
      <div className="w-full max-w-container mx-auto flex flex-col items-center px-4 gap-8 justify-center lg:flex-row">
        {/* Texto e botão */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-accent font-bold text-3xl lg:text-4xl"
          >
            Baixe Agora o RefrikoStore
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-neutral mt-4 text-base"
          >
            Faça o download do RefrikoStore e aproveite a praticidade de fazer
            seus pedidos diretamente do seu celular
          </motion.p>
          <motion.a
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            href="/download/refrikoStore.apk"
            download="refrikoStore.apk"
            className="mt-6 bg-accent text-secundary font-medium py-3 px-8 rounded-lg shadow-md shadow-black hover:bg-primary hover:text-white transition-all"
          >
            📥 Baixar APK
          </motion.a>

          {/* Informação sobre lojas em breve */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
            className="mt-6 flex flex-col items-center lg:items-start text-sm"
          >
            {/* Ícones das lojas */}
            <p className="text-neutral">
                Em breve disponível na Google Play Store e Apple App Store.
            </p>
            <img
                src={IconsAppStore}
                alt="Apple App Store"
                className="w-[140px] object-contain"
            />
            
          </motion.div>

          {/* Aviso adicional */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            viewport={{ once: true }}
            className="text-yellow-500 mt-4 text-sm"
          >
            * Certifique-se de permitir instalações de fontes desconhecidas no
            seu dispositivo.
          </motion.p>
        </div>

        {/* Imagem ou ilustração */}
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          src={Mockup}
          alt="Mockup do App"
          className="w-full max-w-sm lg:max-w-md"
        />
      </div>
    </section>
  );
};

export { DownloadSection };

