import Home from "./pages/Home"
import About from "./pages/About"
import RecipeDetails from "./pages/RecipesDetails"; 
import { Route, Routes } from "react-router-dom";


export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/recipe-details" element={<RecipeDetails />}></Route> {/*ruta temporal*/}
      </Routes>      
    </>
  )
}
