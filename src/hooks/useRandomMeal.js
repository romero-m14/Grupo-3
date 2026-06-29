import { useState } from "react";

export function useRandomMeal() {
    const [loadingRandom, setLoadingRandom] = useState(false);

    const obtenerPlatosRandomDeApi = async () => {
        setLoadingRandom(true);
        try {
            // 🌟 Al igual que en useFilters, hacemos peticiones simultáneas con Promise.all
            const [res1, res2, res3] = await Promise.all([
                fetch("https://www.themealdb.com/api/json/v1/1/random.php"),
                fetch("https://www.themealdb.com/api/json/v1/1/random.php"),
                fetch("https://www.themealdb.com/api/json/v1/1/random.php")
            ]);

            if (!res1.ok || !res2.ok || !res3.ok) {
                throw new Error("Fallo la conexión con la API Random");
            }

            const [data1, data2, data3] = await Promise.all([
                res1.json(),
                res2.json(),
                res3.json()
            ]);

            // Extraemos el plato de cada una de las respuestas
            const plato1 = data1.meals?.[0];
            const plato2 = data2.meals?.[0];
            const plato3 = data3.meals?.[0];

            // Juntamos los 3 platos en un solo arreglo (filtrando por si acaso alguno vino vacío)
            const tresPlatos = [plato1, plato2, plato3].filter(Boolean);

            return tresPlatos; 

        } catch (error) {
            console.error("Error al obtener platos random:", error);
            return [];
        } finally {
            setLoadingRandom(false);
        }
    };

    return { obtenerPlatosRandomDeApi, loadingRandom };
}