
export default function SearchBar({busqueda, setBusqueda}) {
  return (
    <div className="flex flex-col md:items-center gap-2 w-full mx-auto px-6 mb-8 md:mb-0">
    
     <div className="md:w-full relative flex items-center">
      <input
          type="text"
          placeholder="Buscar una receta..."
          className="w-full bg-fondo shadow-sm border border-navbar/20 p-3 pl-10 placeholder:text-texto/30 rounded-xl outline-none text-texto transition-all focus:border-emerald-600/80 focus:shadow-md"
          value={busqueda}
          onChange={(e)=> setBusqueda(e.target.value)}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#d6d3d1"
          className="size-5 absolute left-4 text-stone-400 pointer-events-none"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div>
    </div>
  );
}
