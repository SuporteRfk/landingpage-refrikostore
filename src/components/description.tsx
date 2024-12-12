import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";
import { FaMapMarkedAlt as IconMap } from "react-icons/fa";
import { GrCatalog as IconCatalog} from "react-icons/gr";
import { FaClock as IconClock , FaUsers as IconUsers} from "react-icons/fa6";


const Description = () => {
  // useRef cria uma referência para a seção que queremos observar o scroll.
  // Essa referência é usada para vincular o comportamento da barra ao elemento correto.  
  const sectionRef = useRef(null);

  // Estado para controlar a altura da barra.
  // `barHeight` começa com 0 e é atualizado dinamicamente com base no progresso do scroll.
  const [barHeight, setBarHeight] = useState(0);
  const maxProgress = 0.95;  // Limite máximo de progresso da barra (95% para criar a margem de 40px do final da sessão).

  // Hook `useScroll` do Framer Motion:
  // Monitora o progresso do scroll dentro do elemento referenciado.
  const { scrollYProgress } = useScroll({
    target: sectionRef, // Observa o progresso apenas dentro do `sectionRef`.
    offset: ["start start", "end end"], // Define quando o scroll começa e termina:
    // "start end" significa: quando o topo da seção tocar a base da viewport.
    // "end start" significa: quando o final da seção tocar o topo da viewport.
  });
   let newHeight = 0;
  // Hook `useMotionValueEvent`:
  // Escuta mudanças no valor do `scrollYProgress` e executa ações com base nele.
  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    // Calcula a altura da barra com base no progresso.
    // `Math.min` limita a altura máxima ao valor definido por `maxProgress`.
    newHeight = Math.min(progress * 100, maxProgress*100); // Limita a altura ao máximo permitido
    // `Math.max` garante que a barra só cresça, nunca diminua.
    setBarHeight((prevHeigth)=>Math.max(prevHeigth,newHeight)); // Garante que a barra só aumente
  });


  const cards = [
    { 
      id: 1, 
      side: "left", 
      content: "Faça seus pedidos diretamente do celular, sem precisar ir até a recepção. Praticidade para você!", 
      title: "Pedidos Onde Você Estiver", 
      icon: IconMap ,
    },
    { 
      id: 2, 
      side: "right", 
      content: "Tenha acesso a todos os produtos fabricados pela Refriko diretamente no seu smartphone.", 
      title: "Acesso Completo a Todos os Produtos", 
      icon: IconCatalog,
    },
    { 
      id: 3, 
      side: "left", 
      content: "O app é exclusivo para você, colaborador da Refriko. Garantimos a privacidade e segurança dos seus pedidos.", 
      title: "Exclusivo para Funcionários", 
      icon: IconUsers,
    },
    { 
      id: 4, 
      side: "right", 
      content: "Realize seu pedido em poucos cliques, economizando tempo e agilizando sua rotina.", 
      title: "Rápido e Sem Complicação", 
      icon: IconClock,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="min-h-[180vh] bg-description bg-blend-multiply overflow-hidden flex flex-col"
    >
      {/* Título */}
      <div className="w-full max-w-container mx-auto p-4 flex flex-col items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, scale: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-primary font-bold mt-9 text-3xl lg:text-4xl text-center md:text-5xl"
          viewport={{ once: true }}
        >
          Facilidade na Palma da Sua Mão
        </motion.h1>
        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-center text-lg lg:text-2xl text-gray-600"
          viewport={{ once: true }}
        >
          Descubra como o app exclusivo facilita sua rotina e economiza seu tempo.
        </motion.span>
      </div>

      {/* Cards e barra */}
      <div className="flex flex-col items-center relative max-w-container mx-auto h-[140vh] max-h-full">
        {/* Barra vertical animada */}
        <motion.div
          className="absolute w-2 bg-background top-0 rounded-lg shadow-2xl shadow-black"
          style={{ height: `${barHeight}%` }} // Altura controlada dinamicamente
        />

        {/* Cards */}
        <div className="max-w-container mx-auto flex flex-col relative">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              className={`
                  w-64 h-56 bg-white rounded-2xl p-4 shadow-lg shadow-gray-500
                  flex flex-col items-center justify-center gap-2 absolute
                  ${
                    card.side === "left"
                      ? "left-[-150px] sm:left-[-270px] lg:left-[-300px]"
                      : "right-[-150px] sm:right-[-270px] lg:right-[-300px]"
                  }
                  
              `}
                
              initial={{ opacity: 0, x: card.side === "left" ? -100 : 100 }} // Fora do viewport
              whileInView={{ opacity: 1, x: 0 }} // Animação ao entrar na viewport
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.5 }} // Ativa quando 50% do card está visível
              style={{
                top: `${index * 250}px`, // Posição vertical dinâmica
              }}
            >
              <h4 className="font-bold text-base text-primary text-center">{card.title}</h4>
              <card.icon className="h-16 w-16 text-neutral"/>
              <p className="text-gray-700 text-center text-sm">{card.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Description };
