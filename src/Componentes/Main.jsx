import React from 'react'

function Main() {
  return (
    <div className="bg-fondo min-h-screen text-texto transition-colors duration-300">
      
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div className="text-detalles font-medium text-sm">🌿 Recetas saludables para tu día a día</div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">Come saludable, <br /> vive mejor</h1>
          <p className="opacity-80 max-w-md">Descubre recetas fáciles, deliciosas y nutritivas para chuparse los dedos</p>
          <button className="bg-botón text-white font-semibold px-6 py-3 rounded-xl shadow transition-transform transform hover:-translate-y-0.5">Ver recetas →</button>
        </div>
        <div className="relative flex justify-center">
          <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80" alt="Plato" className="w-full max-w-sm rounded-full aspect-square border-8 border-fondo shadow-xl object-cover" />
          <span className="absolute top-10 left-4 text-3xl opacity-60 animate-bounce">🍃</span>
        </div>
      </section>

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

      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Recetas destacadas</h2>
            <div className="h-1 w-12 bg-detalles mt-2 rounded"></div>
          </div>
          <a href="#todas" className="text-sm font-semibold text-detalles hover:underline">Ver todas →</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { t: 'Ensalada de quinoa y garbanzos', c: 'Ensaladas', tm: '20 min', e: 'Vegetariana', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=80' },
            { t: 'Crema de zanahoria y jengibre', c: 'Sopas', tm: '25 min', e: 'Vegana', img: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=400&q=80' },
            { t: 'Pancakes de avena y plátano', c: 'Desayunos', tm: '15 min', e: 'Sin azúcar', img: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=400&q=80' }
          ].map((r, idx) => (
            <div key={idx} className="bg-fondo border border-texto/10 rounded-2xl overflow-hidden hover:shadow-md transition-all group flex flex-col justify-between">
              <div className="relative overflow-hidden">
                <img src={r.img} alt={r.t} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-3 left-3 bg-premium text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow">{r.c}</span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <h3 className="font-bold text-lg mb-3 line-clamp-2">{r.t}</h3>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-3 text-xs opacity-75">
                    <span>⏱️ {r.tm}</span>
                    <span>🍃 {r.e}</span>
                  </div>
                  <button className="bg-botón text-white text-xs font-semibold px-3 py-1.5 rounded-lg hover:opacity-90">Ver receta</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}

export default Main;