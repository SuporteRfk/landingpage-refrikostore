import { HomeSection } from "./components/home"

function App() {
  

  return (
    <>
      <HomeSection/>
      
    </>
  )
}

export default App








// const App = () => {
//   return (
//     <div className="flex flex-col min-h-screen bg-gray-50">
//       {/* Header Section */}
//       <section className="flex-1 container mx-auto py-10 px-5">
//         {/* Texto Principal */}
//         <motion.h1
//           className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           Baixe o Refrikostore Agora e Faça Seus Pedidos com Facilidade
//         </motion.h1>

//         {/* Descrição */}
//         <motion.p
//           className="text-lg sm:text-xl font-regular_text text-center text-gray-700 mb-6"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           O app exclusivo para os funcionários da Refriko. Peça com rapidez e praticidade diretamente no seu Android.
//         </motion.p>

//         {/* Imagem */}
//         <motion.div
//           className="flex justify-center mb-6"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1.5 }}
//         >
//           <img
//             src="sua-imagem-aqui.png" // Substitua com o link para sua imagem
//             alt="Imagem do App"
//             className="w-full sm:w-3/4 lg:w-1/2 object-contain"
//           />
//         </motion.div>

//         {/* Botão de Download */}
//         <motion.a
//           href="/path-do-apk"
//           className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full block mx-auto text-center"
//           initial={{ y: -50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           Baixar APK
//         </motion.a>
//       </section>
//     </div>
//   );
// };

