import { useState } from "react"

export default function Header() {
    const [show, setShow] = useState(false);

    return (
        <header className="min-h-12.5 fixed z-5000 w-full bg-navbar text-fondo p-6">

            <div className="max-w-7xl mx-auto relative flex flex-col md:flex-row gap-4 md:justify-between">
                {/* Logo principal */}                
                <img className="rounded-full bg-fondo w-13" src="/images/logoTransparent.png" alt="Logo de la pagina principal" />
                
                {/*  Botón Hamburger */}
                <button onClick={() => setShow(!show)} 
                        className="cursor-pointer absolute top-2 right-6 md:hidden flex flex-col gap-2"
                >
                    <span className={`bg-fondo w-8 h-1 rounded-full transition-all duration-300 ease-in-out ${show ? "opacity-0" : ""}`}></span>
                    <span className={`bg-fondo w-8 h-1 rounded-full transition-all duration-300 ease-in-out ${show ? "rotate-45" : ""}`}></span>
                    <span className={`bg-fondo w-8 h-1 rounded-full transition-all duration-300 ease-in-out ${show ? "-rotate-45 -translate-y-2.5": ""}`}></span>
                </button>

                {/*  Barra de navegación */}
                <nav className={`${show ? "flex" : "hidden"} md:flex flex-col md:flex-row items-center gap-1 md:gap-4 text-base w-full md:w-auto mt-4 md:mt-0`}>
                    <a className="text-fondo hover:bg-boton/20 px-4 py-2 rounded-lg transition-colors duration-200" href="#">Recipes</a>
                    <a className="text-fondo hover:bg-boton/20 px-4 py-2 rounded-lg transition-colors duration-200" href="#">Collections</a>
                    <a className="text-fondo hover:bg-boton/20 px-4 py-2 rounded-lg transition-colors duration-200" href="#">Techniques</a>
                    <a className="text-fondo hover:bg-boton/20 px-4 py-2 rounded-lg transition-colors duration-200" href="#">Journal</a>
                </nav>
            </div>
        </header>
    )
}