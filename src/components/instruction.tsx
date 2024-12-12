
import { motion } from "framer-motion";
const InstructionSection = () => {
    return (
        <section id="instruction-section" className="bg-background text-neutral  min-h-[115vh] lg:min-h-[100vh] mpy-8 lg:h-screen flex items-center">
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
                        <a 
                            href="https://www.youtube.com/watch?v=c4A57Zjmb3Q" 
                            target="_blank" 
                            className="text-accent font-semibold text-xl lg:text-2xl mb-4"
                        >
                            Como Baixar o App
                        </a>
                        <div className="w-full h-64 bg-slate-400 flex items-center justify-center rounded-lg">
                            <iframe
                                src="https://www.youtube.com/embed/c4A57Zjmb3Q"
                                title="Como usar o App"
                                className="w-full h-64 rounded-lg"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
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
                        
                        <a 
                            href="https://www.youtube.com/watch?v=0j6gnxRiva8" 
                            target="_blank" 
                            className="text-accent font-semibold text-xl lg:text-2xl mb-4"
                        > 
                            Como Usar o App
                        </a>
                            
                        
                        <div className="w-full h-full bg-slate-400 flex items-center justify-center rounded-lg">
                            <iframe
                                src="https://www.youtube.com/embed/0j6gnxRiva8"
                                title="Como usar o App"
                                className="w-full h-64 rounded-lg"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export { InstructionSection }