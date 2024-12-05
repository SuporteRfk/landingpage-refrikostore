import Logo from "../assets/logo.png"

const Header = () => {
    return (
        <header className="w-full max-w-container mx-auto p-4">
            <img src={Logo} alt="imagem da logo da refriko store" className="w-[100px] h-[40px] lg:w-[150px] lg:h-[50px]" />
        </header>
    )
}

export {Header}