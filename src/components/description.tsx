import { motion , useScroll, useMotionValueEvent, useAnimation} from "framer-motion"; // Importa o Framer Motion
import "./estilo.css"

const Description = () => {
    
    // Lista de cards para o storytelling
    const { scrollYProgress} = useScroll()  // Detecta o progresso do scroll vertical
    const controls = useAnimation(); // Controlador de animações
    
    useMotionValueEvent(scrollYProgress, "change", (progress) => {
        controls.start({height: `${progress*100}%`}) // Atualiza a altura da linha dinamicamente
    });
    
    const cards = [
        { id: 1, content: "Era uma vez, em uma terra distante..." },
        { id: 2, content: "Onde o sol brilhava e as flores dançavam..." },
        { id: 3, content: "Até que uma sombra ameaçadora apareceu..." },
        { id: 4, content: "Mas um herói surgiu para trazer a esperança de volta!" },
    ];



    
 
    
     return (
        <div className="relative story-scroll-container">
            {/* Linha vertical central que desce pela página */}
            <motion.div 
                className="absolute w-4 bg-accent top-0"
                initial={{ height: "0%" }} // Começa com altura 0%
                animate={controls} // Controla a altura dinamicamente
                transition={{ duration: 0.2 }} // Transição suave
            
            />

            {/* Container para os cards */}
            <div className="cards-container">
                {cards.map((card) => (
                // Cada card renderizado com animações
                <motion.div
                    key={card.id} // Chave única para cada elemento da lista
                    className="card, w-2/4 h-16 bg-slate-500 rounded-sm flex gap-24 mx-auto flex-col items-center "
                    initial={{ opacity: 0, y: 50 }} // Estado inicial antes de aparecer
                    whileInView={{ opacity: 1, y: 0 }} // Animação ao entrar na viewport
                    transition={{ duration: 0.5 }} // Duração da animação
                    viewport={{ once: true, amount: 0.5 }} // Configuração para disparar apenas uma vez e quando 50% do card estiver visível
                    
                >
                    {card.content}
                </motion.div>
                ))}
            </div>
        </div>
    );
    
};

export {Description};
