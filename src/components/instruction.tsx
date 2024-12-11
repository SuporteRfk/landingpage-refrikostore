
import { motion } from "framer-motion";
import imgVideo from "../assets/placeholder.png"
const InstructionSection = () => {
    return (
        <section id="instruction-section" className="bg-background text-neutral  min-h-[115vh] py-8 lg:h-screen flex items-center">
            <div className="w-full max-w-container mx-auto px-4 ">
                {/* Título da Seção */}
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-accent font-bold text-3xl lg:text-4xl text-center "
                >
                    Guia para instalação e Uso
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-neutral mt-4 text-base text-center mb-24"
                >
                    Assista aos vídeos e veja como baixar, instalar e navegar pelo app RefrikoStore. Com poucos passos, você estará pronto para simplificar seus pedidos.
                </motion.p>

                {/* Vídeos */}
                <div className="mt-8 flex flex-col lg:flex-row gap-8">
                    {/* Vídeo 1 - Como Baixar */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center lg:items-start w-full lg:w-1/2"
                    >
                        <h2 className="text-accent font-semibold text-xl lg:text-2xl mb-4">
                            Como Baixar o App
                        </h2>
                        <div className="w-full h-64 bg-slate-400 flex items-center justify-center rounded-lg">
                        <img src={imgVideo} className="object-cover w-full max-w-[445px] " alt="" />
                        </div>
                    </motion.div>

                    {/* Vídeo 2 - Como Usar */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center lg:items-start w-full lg:w-1/2"
                    >
                        <h2 className="text-accent font-semibold text-xl lg:text-2xl mb-4">
                            Como Usar o App
                        </h2>
                        <div className="w-full h-64 bg-slate-400 flex items-center justify-center rounded-lg">
                            <img src={imgVideo} className="object-cover w-full max-w-[445px] " alt="" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export { InstructionSection }