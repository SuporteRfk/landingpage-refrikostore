import { motion, useAnimationFrame } from "framer-motion";
import AguaCGas  from "../assets/carouselImgs/agua_c_gas.webp"
import AguaSGas  from "../assets/carouselImgs/agua_s_gas.webp"
import BelaRoma  from "../assets/carouselImgs/belaroma.webp"
import CervejaBamboa300  from "../assets/carouselImgs/cer_bamboa_300.webp"
import CervejaBamboa  from "../assets/carouselImgs/cerv_bamboa.webp"
import CervejaMoema  from "../assets/carouselImgs/cerv_moema.webp"
import EnergeticoFuriosoLata  from "../assets/carouselImgs/ener_furi_lata.webp"
import EnergeticoFurioso  from "../assets/carouselImgs/energ_furioso.webp"
import Guarana3l  from "../assets/carouselImgs/guarana3l.webp"
import JamesGin  from "../assets/carouselImgs/james_gin.webp"
import Tubaina2l  from "../assets/carouselImgs/tubaina2l.webp"
import JamesVodka  from "../assets/carouselImgs/vodka_james.webp"
import Vodka  from "../assets/carouselImgs/vodka_bamboa.webp"
import { useState } from "react";



const CarouselCards = () => {
  // Definindo as imagens do carrosel
  const cardsImages = [
      {
          id: 1 , image: AguaCGas , alt: "Imagem ilustrativa do produto Água Com Gás Hidratar"
      },
      {
          id: 2 , image: BelaRoma, alt: "Imagem ilustrativa do produto Bella Roma"
      },
      {
          id: 3 , image: CervejaBamboa300, alt: "Imagem ilustrativa da cerveja bamboa de 300ml"
      },
      {
          id: 4 , image: Guarana3l , alt: "Imagem ilustrativa do refrigerante guaraná de 3 litros"
      },
      {
          id: 5 , image: JamesGin, alt: "Imagem ilustrativa do gin da James Cook"
      },
      {
          id: 6 , image: EnergeticoFurioso, alt: "Imagem ilustrativa do Energétiuco Furioso Tradicional"
      },
      {
          id: 7 , image: AguaSGas , alt: "Imagem ilustrativa do produto Água Sem Gás Hidratar"
      },
      {
          id: 8 , image: Vodka , alt: "Imagem ilustratica da vodka bamboa"
      },
      {
          id: 9 , image: CervejaBamboa, alt: "Imagem ilustrativa da cerveja bamboa"
      },
      {
          id: 10 , image: JamesVodka, alt: "Imagem ilustrativa do vodka da James Cook"
      },
      {
          id: 11 , image: CervejaMoema, alt: "Imagem ilustrativa da cerveja moema"
      },
      {
          id: 12 , image: Tubaina2l , alt: "Imagem ilustrativa do refrigerante tubaina de 2 litros"
      },
      {
          id: 13 , image: EnergeticoFuriosoLata, alt: "Imagem ilustrativa do Energétiuco Furioso lata"
      },
  ]

  // **Estado inicial das posições**
  // Cada imagem é espaçada em 300px com base no índice. Isso define a posição inicial.
  // Exemplo:
  // - Imagem 1: 0px.
  // - Imagem 2: 300px.
  const [positions, setPositions] = useState(
    cardsImages.map((_, i) => i * 300) 
  );
  
 // **Variáveis de controle**
 const imageWidth = 300; // Largura fixa de cada imagem.
 const containerWidth = cardsImages.length * imageWidth; // Largura total do carrossel (número de imagens x largura da imagem).
  
  

  // **Movimento contínuo**
  // Atualiza continuamente as posições para mover as imagens da direita para a esquerda.
  // Quando uma imagem sai da tela pela esquerda (`pos <= -imageWidth`), ela é reposicionada no final do carrossel.
  useAnimationFrame(() => {
    // seta uma nova position para cada imagem
    setPositions((prev) =>
      prev.map((pos) => {
        if (pos <= -imageWidth) {
          // Reposiciona a imagem no final do contêiner.
          return containerWidth - imageWidth;
        }
        // Move a imagem para a esquerda em 2px a cada frame.
        return pos - 2;
      })
    );
    
  });
  
  
  return (
    <div className="relative w-full h-40 md:h-48 lg:h-56 overflow-hidden bg-neutral flex items-center shadow-inner shadow-black">
      {cardsImages.map((card, index) => {

        // **Lógica do Fade-in**
        // Aplica o fade-in quando a imagem está entrando pela direita.
        const fadeIn = positions[index] >= window.innerWidth-imageWidth && positions[index] <= window.innerWidth ? true : false
        const opacity = 
          fadeIn ?  
            (window.innerWidth - positions[index]) /300
          : 
            (300 + positions[index]) / 300
        
        return(
          <motion.div
            key={card.id}
            className="absolute h-full w-72 flex items-center justify-center"
            style={{
              left: positions[index], // Define a posição de cada imagem
              opacity
            }}
          >
            <img
              src={card.image}
              alt={card.alt}
              className="h-full w-auto mx-2 object-contain"
            />
          </motion.div>
        )
      })}
    </div>
  );
};


export {CarouselCards}


