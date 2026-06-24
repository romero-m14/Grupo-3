import { useState } from "react"

export default function Header() {
    const [show, setShow] = useState(false);

    return (
        <header className="min-h-12.5 fixed z-5000 w-full bg-navbar text-fondo 
                           p-6">

            <div className="relative flex flex-col gap-4 justify-between">
                {/* Logo principal */}                
                <img className="rounded-full bg-fondo w-13" src="/images/logoTransparent.png" alt="Logo de la pagina principal" />
                
                {/*  Botón Hamburger */}
                <button onClick={() => setShow(!show)} 
                        className="cursor-pointer absolute top-4 right-6 md:hidden flex flex-col gap-2"
                >
                    <span className={`bg-fondo w-8 h-1 rounded-full transition-all duration-300 ease-in-out ${show ? "opacity-0" : ""}`}></span>
                    <span className={`bg-fondo w-8 h-1 rounded-full transition-all duration-300 ease-in-out ${show ? "rotate-45" : ""}`}></span>
                    <span className={`bg-fondo w-8 h-1 rounded-full transition-all duration-300 ease-in-out ${show ? "-rotate-45 -translate-y-2.5": ""}`}></span>
                </button>

                {/*  Barra de navegación */}
                <nav className={`${show ? "flex" : "hidden"} flex-col items-center gap-4 text-base`}>
                    <a className="hover:bg-boton px-20 py-3" href="#">Recipes</a>
                    <a className="hover:bg-boton px-20 py-3" href="#">Collections</a>
                    <a className="hover:bg-boton px-20 py-3" href="#">Techniques</a>
                    <a className="hover:bg-boton px-20 py-3" href="#">Journal</a>
                </nav>
            </div>
        </header>
    )
}