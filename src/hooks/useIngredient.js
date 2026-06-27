import { useEffect, useState } from "react";

export function useIngredient(ingredient) {
    const [filterIngredient, setFilterIngredient] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getArrayIngredient() {
            try {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)

                if (!response.ok) {
                    throw new Error("Fallo la solicitud con el servidor")
                }

                const data = await response.json()
                setFilterIngredient(data.meals)
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        getArrayIngredient();
    }, [ingredient])

    return { filterIngredient, error, loading }
}