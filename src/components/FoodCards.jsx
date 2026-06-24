function FoodCards({ comidas }) {
  return (
    <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-amber-50/30">
      {comidas.map((comida) => (
        <article
          key={comida.idMeal}
          className="bg-[#FDF8F2] border border-black/5 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
        >
          {/* Contenedor de la Imagen*/}
          <div className="relative aspect-video w-full overflow-hidden bg-stone-100">
            <span className="absolute top-3 left-3 z-10 bg-[#D97706] text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
              {comida.strCategory}
            </span>

            <img
              src={comida.strMealThumb}
              alt={`Plato de ${comida.strMeal}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Cuerpo de la Tarjeta */}
          <div className="p-5 flex flex-col grow justify-between gap-4">
            {/* Título y Detalles */}
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold text-stone-900 leading-tight">
                {comida.strMeal}
              </h3>

              <div className="flex flex-row gap-5 text-sm text-stone-600 mt-1">
                <p className="flex items-center gap-1.5">
                  ⏱️ <span className="font-medium">20 min</span>
                </p>
                <p className="flex items-center gap-1.5">
                  🌍 <span className="font-semibold">Origin:</span>{" "}
                  {comida.strArea}
                </p>
              </div>
              <button className="bg-botón text-gray-400 text-xs font-semibold px-3 py-1.5 rounded-lg hover:opacity-90">
                Ver receta
              </button>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}

export default FoodCards;
