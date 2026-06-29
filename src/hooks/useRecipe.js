import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export function useRecipe() {
  const { id } = useParams();
  const [receta, setReceta] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function traerReceta() {
      setLoading(true);
      setError(null);

      try {
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);

        if (!response.ok) {
          throw new Error("Fallo al traer la receta");
        }

        let data = await response.json();

        if (data.meals) {
          setReceta(data.meals[0]);
        } else {
          throw new Error("Receta no encontrada");
        }
        
      } catch (error) {
        setError(error.message);
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    if (id) {
      traerReceta();
    }
  }, [id]);

  // Función para organizar los ingredientes dinámicos
  const obtenerIngredientes = () => {
    if (!receta) return [];
    let listado = [];

    for (let i = 1; i <= 20; i++) {
      const ingrediente = receta[`strIngredient${i}`];
      const medida = receta[`strMeasure${i}`];

      if (ingrediente && ingrediente.trim() !== "") {
        listado.push(`${medida ? medida : ""} ${ingrediente}`);
      }
    }

    return listado;
  };

  // Convertir el link de Youtube normal a un link de "embed"
  const getYoutubeEmbed = () => {
    if (!receta || !receta.strYoutube) return "";
    
    const url = receta.strYoutube;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);

    return match && match[2].length === 11
      ? `https://www.youtube.com/embed/${match[2]}`
      : "";
  };

  return { receta, loading, error, ingredientes: obtenerIngredientes(), youtubeEmbedUrl: getYoutubeEmbed() 
  };
}