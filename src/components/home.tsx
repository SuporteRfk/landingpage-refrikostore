import { motion } from "framer-motion";
import MockupOne from "../assets/mockup.png"
import { Header } from "./header";
import { FcAndroidOs as IconAndroid} from "react-icons/fc";



const HomeSection = () => {

    const scrollEffect = (id:string) => {
        const section = document.getElementById(id);
        if(section){
            section.scrollIntoView({behavior: "smooth"});
        }
    };


    const handleStyleSection = ():string =>{
        const isIos = /iPad|iPhone|iPod/.test(navigator.userAgent);
        const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        if(isIos || isSafari){
            return 'w-full min-h-screen flex flex-col justify-between bg-home_ios overflow-hidden'
        }else{
            return 'w-full min-h-screen flex flex-col justify-between bg-home bg-background bg-blend-color-burn overflow-hidden'
        }
    } 

   

    return (
        <div className={handleStyleSection()}>
            <Header/>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="w-full max-w-container mx-auto p-4 md:flex md:justify-between md:items-center md:my-auto"
            >
                {/* {home text} */}
                <div className="flex flex-col justify-center mb-5 sm:items-center md:items-start md:w-full">
                    <p className="text-4xl mb-1 md:text-5xl">Baixe agora</p>
                    <p className="text-accent font-medium font-main_text text-6xl mb-4 md:text-7xl">RefrikoStore</p>
                    <p className="text-lg">Faça seus pedidos online e com facilidade.</p>
                    <div className="flex gap-4 ">
                        {/* button donwload apk */}
                    
                            <button
                                onClick={() => scrollEffect("download-section")}
                                className="mt-4 bg-accent rounded-md p-2 font-medium shadow-md shadow-[rgb(176_253_1_/_35%)] text-secundary"
                            >
                                Baixe o App agora
                            </button>
                    
                        {/* button instructions */}
                    
                            <button
                                onClick={() => scrollEffect("instruction-section")}
                                className="mt-4 bg-cyan-600 rounded-md p-2 font-medium shadow-md shadow-slate-600 text-neutral"
                            >
                                Ajuda para Instalar
                            </button>
                        
                    </div>
                </div>

                {/* {section mockup home} */}
                <div className="relative w-full flex justify-center items-center">
                    <motion.div
                        className="relative w-full max-w-[304px] md:max-w-[500px]"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.5, delay: 0.6 }}
                    >
                
                        <svg
                            viewBox="0 0 200 200"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[338px] z-0 md:h-[500px]"
                        >
                            <path 
                                fill="#ffffffd1"
                                d="M48.5,-50.2C61.2,-35.8,68.7,-17.9,71.2,2.6C73.8,23,71.4,46,58.7,61.9C46,77.7,23,86.3,1.6,84.7C-19.8,83,-39.5,71.2,-54.6,55.4C-69.8,39.5,-80.2,19.8,-80.3,0C-80.3,-19.8,-69.9,-39.6,-54.7,-54C-39.6,-68.5,-19.8,-77.5,-1,-76.5C17.9,-75.5,35.8,-64.6,48.5,-50.2Z" 
                                transform="translate(100 100)" 
                            />
                        </svg>


                        {/* Mockup image */}
                        <img  src={MockupOne} className="relative z-10 w-full"/>
                    </motion.div>
                </div>
            </motion.div>
            <section className="max-w-container mx-auto">
                <p className="p-1 text-center">Exclusivo para funcionários do Grupo Refriko.</p>
                <p className="pb-4 flex items-center justify-center"> <IconAndroid className="text-[30px]"/> Apenas para Android. <IconAndroid className="text-[30px]"/> </p>
            </section>
            
        </div>
    );
};

export { HomeSection };
