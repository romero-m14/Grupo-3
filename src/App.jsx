import Home from "./pages/Home";
import About from "./pages/About";
import RecipeDetails from "./pages/RecipesDetails"; 
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/recipe-details/:id" element={<RecipeDetails />} />
    </Routes>
  );
}