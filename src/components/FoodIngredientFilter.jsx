import { useMemo } from "react";

function FoodIngredientFilter({ comidas  }) {
  

  return (
    <section className="flex flex-col gap-2 w-full max-w-sm p-4">
      <label htmlFor="comidaFiltro" className="font-medium">
        Buscar por ingrediente
      </label>
      
      <select id="comidaFiltro" className="p-2 rounded-md bg-[#FDF8F2]  shadow-sm  outline-none">
        <option value="Todas">Todas</option>
        
        {/* El .map va EXCLUSIVAMENTE aquí adentro para generar las opciones */}
        {ingredientes.map((platillo) => (
          <option key={platillo.idMeal} value={platillo.strMeal}>
            {platillo.strMeal}
          </option>
        ))}
      </select>
    </section>
  );
}

export default FoodIngredientFilter;