import { Link } from "react-router-dom";

export function FeaturedGrid({ comidas }) {
  return (
    <>
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-amber-50/30">
        {comidas.length <= 0 ? (
          <p className="text-2xl text-center">
            No se encontraron Recetas disponibles
          </p>
        ) : (
          comidas.map((comida) => (
            <article
              key={comida.idMeal}
              className="bg-fondo border border-texto/10 rounded-2xl overflow-hidden hover:shadow-md transition-all group flex flex-col justify-between"
            >
              {/* Contenedor de la Imagen */}
              <div className="relative overflow-hidden">
                <span className="absolute top-3 left-3 bg-premium text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow">
                  {comida.strCategory || "unknown"}
                </span>

                <img
                  src={comida.strMealThumb}
                  alt={`Plato de ${comida.strMeal}`}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Cuerpo de la Tarjeta */}
              <div className="p-5 flex-1 flex flex-col justify-between h-full">
                <h3 className="font-bold text-lg mb-3 line-clamp-2">
                  {comida.strMeal}
                </h3>

                <div className="flex items-center gap-3 text-xs opacity-75">
                  <span>⏱️ 20 min</span>
                  <span>🌍 Origin: {comida.strArea || "Unknown"}</span>
                </div>
                <Link
                  to={`/recipe-details/${comida.idMeal}`}
                  className="text-gray-400 text-xs text-center font-semibold px-3 py-1.5 rounded-lg hover:opacity-90"
                >
                  Ver receta
                </Link>
              </div>
            </article>
          ))
        )}
      </section>
    </>
  );
}
