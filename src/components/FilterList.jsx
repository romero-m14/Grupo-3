import { useEffect, useState } from "react"
import FilterSection from "./FilterSection";

export default function FilterList() {
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
                
                const [catData, areaData, ingreData] = await Promise.all([
                                                    catRes.json(),
                                                    areaRes.json(),
                                                    ingreRes.json()
                ]);

                setCategories(catData.meals)
                setAreas(areaData.meals)
                setIngredients(ingreData.meals)

            } catch (error) {
                console.error(error);
            }
        }
        fetchDatas();
    }, [])

    return (
        <>
            <FilterSection 
                title="Categorías"
                data={categories}
                property="strCategory"/>

            <FilterSection 
                title="País"
                data={areas}
                property="strCountry"/>
                        
            <FilterSection 
                title="Ingredientes"
                data={ingredients}
                property="strIngredient"/>
        </>
    )
}