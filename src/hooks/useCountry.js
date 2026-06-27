import { useEffect, useState } from "react"

export function useContry(country) {
    const [filterMeals, setFilterMeals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
      async function fetchAreas() {
        try {
          const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`)

          if(!response.ok) {
            throw new Error("Fallo la coneccion con la Api")
          }

          const datas = await response.json()
          setFilterMeals(datas.meals)

        } catch (error) {
            setError(error.message)
            console.error(error)
        } finally {
            setLoading(false);
        }
      }
      fetchAreas()
    }, [country])

    return { filterMeals, error, loading }
}