import { useEffect, useState } from "react"

export function useFilters() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [categories, setCategories] = useState([]);
    const [areas, setAreas] = useState([]);
    const [ingredients, setIngredients] = useState([]);

    {/* Consumimos las Apis para los filtros  */}
    useEffect(() => {
        async function fetchDatas() {
            try {
                {/* Fetch a Categoria, Area (pais) e Ingredientes */}
                const [catRes, areaRes, ingreRes] = await Promise.all(
                                                    [fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list"),
                                                    fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list"),
                                                    fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list")]);
                
                if(!catRes.ok || !areaRes.ok || !ingreRes.ok ) {
                    throw new Error("Fallo la conexion con la API");
                }

                const [catData, areaData, ingreData] = await Promise.all([
                                                    catRes.json(),
                                                    areaRes.json(),
                                                    ingreRes.json()
                ]);

                setCategories(catData.meals)
                setAreas(areaData.meals)
                setIngredients(ingreData.meals)

            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }
        fetchDatas();
    }, [])

    return { loading, error, categories, areas, ingredients}
}