import { useEffect, useState } from "react";

export function useMeals() {
    const [comidas, setComidas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=> {
        async function traerComidas() {
            try{
                let response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
                
                if(!response.ok) {
                    throw new Error("Fallo al traer las comidas")
                }

                let data = await response.json()
                setComidas(data.meals);
                
            }catch(error){
                setError(error.message)
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
        traerComidas();
    },[]);

    return { comidas, loading, error }
}