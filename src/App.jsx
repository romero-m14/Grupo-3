import { useState, useEffect } from "react";
import FoodCards from "./components/FoodCards"
import FoodFilter from "./components/FoodFilter";

function App() {
  const [comidas, setComidas] = useState([]);
  const [busqueda, setBusqueda]= useState("");

  useEffect(()=> {
    async function traerComidas(params) {
      try{
        let response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
        let data = await response.json()
        setComidas(data.meals);
      }catch(error){
        console.log(error);
      }
    }
    traerComidas();
  },[]);

  const comidasFiltradas = comidas.filter((comida) => comida.strMeal.toLowerCase().includes(busqueda.toLocaleLowerCase()));

  return (
    <>
    <main>
      <FoodFilter busqueda={busqueda} setBusqueda={setBusqueda}/>
      <FoodCards comidas={comidasFiltradas}/>
    </main>
      
    </>
  )
}

export default App;