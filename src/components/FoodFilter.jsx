
function FoodFilter({busqueda, setBusqueda}) {
  return (
    <div className="flex flex-col gap-2 w-full max-w-md mx-auto p-4 ">
      {/* <span className="text-sm font-semibold text-stone-700 px-1">Busca una comida</span> */}
     <div className="relative flex items-center">
     <input
        type="text"
        placeholder="Buscar una receta..."
        className="w-full bg-[#FDF8F2] shadow-sm border border-black/5 p-3 pl-10 placeholder:text-stone-300 rounded-2xl outline-none text-stone-800 transition-all focus:border-emerald-600/80 focus:shadow-md"
        value={busqueda}
        onChange={(e)=> setBusqueda(e.target.value)}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#d6d3d1"
        className="size-5 absolute left-4 text-stone-400 pointer-events-none"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
      </div>
    </div>
  );
}

export default FoodFilter;