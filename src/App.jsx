import Home from "./pages/Home"
import About from "./pages/About"
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </>
  )
}
