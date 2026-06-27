import { useEffect, useState } from "react"

export function useCategory(category) {
    const [filterCategory, setFilterCategory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
      async function fetchAreas() {
        try {
          const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)

          if(!response.ok) {
            throw new Error("Fallo la coneccion con la Api")
          }

          const datas = await response.json()
          setFilterCategory(datas.meals)

        } catch (error) {
            setError(error.message)
            console.error(error)
        } finally {
            setLoading(false);
        }
      }
      fetchAreas()
    }, [category])

    return { filterCategory, error, loading }
}