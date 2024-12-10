
import LogoRefrikoStore from "../assets/logo.png"
import { IoLogoWhatsapp as IconWhatsApp , IoLogoInstagram  as IoLogoInstagram } from "react-icons/io";
const Footer = () => {
  return (
    <footer className="bg-background text-neutral py-8">
        {/* div content */}
        <div className="max-w-container mx-auto p-4 flex flex-col items-center gap-8 md:flex-row md:justify-between">

            {/* logo */}
            <img 
                src={LogoRefrikoStore}
                alt="Logo Refriko Store"
                className="h-12"
            />
            {/* div text main */}
            <div className="flex flex-col items-center">
                <p className="text-center font-medium md:text-left text-[15px] md:text-base">
                    Exclusivo para funcionários do Grupo Refriko. 
                </p>
                <span className="text-gray-400 text-[14px]">
                    Disponível apenas para Android.
                </span>
            </div>
            {/* div container contact and social media */}
            <div className="flex flex-col items-center">
                <h5>Suporte:</h5>
                <a
                    href="https://wa.link/nztc0r"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent font-medium text-sm flex items-center justify-between gap-1 w-[125px]"
                >
                    <IconWhatsApp className="text-[18px]"/>
                   WhatsApp
                </a>
                <h5>Redes Sociais:</h5>
                <a
                    href="https://www.instagram.com/furiosoenergydrink/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent font-medium text-sm  flex items-center justify-between gap-1 w-[125px]"
                >
                    <IoLogoInstagram  className="text-[20px]"/>
                    Furioso
                </a>
                <a
                    href="https://www.instagram.com/guaranarefriko/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent font-medium  text-sm  flex items-center justify-between gap-1 w-[125px]"
                >
                    <IoLogoInstagram className="text-[20px]"/>
                    Refriko Guaraná
                </a>
                <a
                    href="https://www.instagram.com/gruporfk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent font-medium text-sm flex items-center justify-between gap-1 w-[125px]"
                >
                    <IoLogoInstagram className="text-[20px]"/>
                    Grupo Refriko
                </a>
            </div>
        </div>
        {/* copyright */}
        <p className="p-4 text-center">
            © 2024 Grupo Refriko. Todos os direitos reservados 
        </p>
    </footer>
  );
};

export { Footer };


