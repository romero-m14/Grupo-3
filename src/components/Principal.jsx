import '../index.css';
import { useState, useEffect } from 'react';
import SearchBar from "./SearchBar"
import FilterList from './FilterList'
import { FeaturedGrid } from './FeaturedGrid';

export default function Principal() {
  const [modalfilter, setModalfilter] = useState(false);

  const [comidas, setComidas] = useState([]);
  const [busqueda, setBusqueda]= useState("");

  useEffect(()=> {
    async function traerComidas() {
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
    <div className="col-span-2 bg-fondo min-h-screen text-texto transition-colors duration-300">
      
      {/* Hero Banner */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div className="text-detalles font-medium text-sm">🌿 Recetas saludables para tu día a día</div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">Come saludable, <br /> vive mejor</h1>
          <p className="opacity-80 max-w-md">Descubre recetas fáciles, deliciosas y nutritivas para chuparse los dedos</p>
          <button className="bg-boton text-white font-semibold px-6 py-3 rounded-xl shadow transition-transform transform hover:-translate-y-0.5">Ver recetas →</button>
        </div>
        <div className="relative flex justify-center">
          <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80" alt="Plato" className="w-full max-w-sm rounded-full aspect-square border-8 border-fondo shadow-xl object-cover" />
          <span className="absolute top-10 left-4 text-3xl opacity-60 animate-bounce">🍃</span>
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="bg-fondo border border-texto/10 rounded-2xl p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { i: '🌱', t: 'Ingredientes naturales', d: 'Alimentos reales y frescos.' },
            { i: '❤️', t: 'Recetas nutritivas', d: 'Platos que aportan bienestar.' },
            { i: '⏱️', t: 'Fáciles y rápidas', d: 'Listas en menos de 30 min.' },
            { i: '🥗', t: 'Para todos', d: 'Opciones veganas y sin gluten.' }
          ].map((b, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div className="p-2 bg-detalles/10 text-detalles rounded-full text-lg">{b.i}</div>
              <div>
                <h4 className="font-bold">{b.t}</h4>
                <p className="text-sm opacity-70">{b.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/*  Barra de Busqueda */}
      <SearchBar busqueda={busqueda} setBusqueda={setBusqueda}/>

      {/* Filter Action */}
      <section className="px-6 mb-16 relative">
        <button className="w-full flex items-center justify-between px-5 py-4 border border-navbar/10 rounded-xl transition-colors cursor-pointer active:bg-boton/60"
                onClick={() => setModalfilter(!modalfilter)}
        >
          <div className='flex items-center gap-3'>
            <span className="material-symbols-outlined text-navbar">tune</span>
            <span className="text-navbar text-xl">Filtros</span>
          </div>
          <span className="material-symbols-outlined text-navbar/80">chevron_right</span>
        </button>

        {/* Filter Modal */}
        <aside className={`${modalfilter ? "block" : "hidden"} absolute z-5000 top-full mt-4 bg-fondo col-span-1 pl-2 pr-6`}>
          <FilterList />
        </aside>
      </section>

      {/* Featured Recipes Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Recetas destacadas</h2>
            <div className="h-1 w-12 bg-detalles mt-2 rounded"></div>
          </div>
          <a href="#todas" className="text-sm font-semibold text-detalles hover:underline">Ver Random →</a>
        </div>

        <FeaturedGrid comidas={comidasFiltradas} />
      </section>

      

    </div>
  )
}