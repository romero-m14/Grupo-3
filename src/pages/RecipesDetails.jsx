import { useRecipe } from "../hooks/useRecipe";
import {Link} from "react-router-dom";

export default function RecipeDetails() {
  const { receta, loading, error, ingredientes, youtubeEmbedUrl } = useRecipe();

  if (loading) {
    return (
      <div className="text-center py-20 font-bold">Cargando receta...</div>
    );
  }
 
  if (error || !receta) {
    return (
      <div className="text-center py-20 font-bold text-red-500">
        {error || "Receta no encontrada."}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF7ED]">
      {/*sección hero*/}
      <section className="relative h-96 overflow-hidden">
        <img
          src={receta.strMealThumb}
          alt={receta.strMeal}
          className="w-full h-full object-cover"
        />

        {/*capa oscura sobre imagen*/}
        <div className="absolute inset-0 bg-black/35"></div>

        <div className="absolute top-6 left-6 z-10">
          <Link to="/" className="flex items-center gap-1.5 bg-black/40 text-white backdrop-blur-sm border border-white/10 hover:bg-black/60 px-3 py-1.5 rounded-xl text-sm transition-all">
            <span className="material-symbols-outlined text-base">arrow_back</span>
            <span>Volver</span>
          </Link>
        </div>

        {/*etiquetas filtros*/}
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <div className="flex gap-2 mb-2">
            <span className="bg-[#65A30D] text-white text-xs font-medium px-3 py-1 rounded-full">
              {receta.strCategory}
            </span>
            <span className="bg-[#D97706] text-white text-xs font-medium px-3 py-1 rounded-full">
              {receta.strArea}
            </span>
          </div>
          

          {/*título*/}
          <h1
            className="text-3xl font-bold text-white mb-3"
          >
            {receta.strMeal}
          </h1>

          {/*info*/}
          <div className="flex gap-6 text-white text-sm">
            <div>
              <span>Categoría: {receta.strCategory}</span>
            </div>
            <div>
              <span>Origen: {receta.strArea}</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10">
          {/*sección ingredientes*/}
          <section className="mt-10">
            <h2
              className="text-2xl font-bold text-[#1C1917] mb-5"
            >
              Ingredientes
            </h2>
            <ul className="space-y-4">
              {ingredientes.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-4 h-4 border-2 border-[#1C1917] rounded-sm shrink-0"></div>
                  <span className="text-[#1C1917]">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/*sección preparación*/}
          <section className="mt-10">
            <h2
              className="text-2xl font-bold text-[#1C1917] mb-5"
            >
              Preparación
            </h2>
            <div className="mb-6">
              <p className="text-[#1C1917] leading-7 whitespace-pre-line">
                {receta.strInstructions}
              </p>
            </div>
          </section>
        </div>

        {/*sección video*/}

        {receta.strYoutube && (
          <section className="mt-10">
            <h2
              className="text-2xl font-bold text-[#1C1917] mb-5"
            >
              Video paso a paso
            </h2>
            <div className="rounded-2xl overflow-hidden">
              <iframe
                className="w-full aspect-video"
                src={youtubeEmbedUrl}
                title="video de la receta"
                allowFullScreen
              ></iframe>
            </div>
          </section>
        )}
      </div>
    </div>
  );
  
}
