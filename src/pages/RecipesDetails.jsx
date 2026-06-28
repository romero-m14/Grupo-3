export default function RecipeDetails(){

    return(
        <div className="min-h-screen bg-[#FFF7ED]">

            {/*sección hero*/}
            <section className="relative h-96 overflow-hidden ">

                    <img src="https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="receta" className="w-full h-full object-cover"/>

                    {/*capa oscura sobre imagen*/}
                    <div className="absolute inset-0 bg-black/35">
                    </div>

                    {/*etiquetas filtros*/}
                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                        <div className="flex gap-2">
                        <span className="bg-[#65A30D] text-white text-xs font-medium px-3 py-1 rounded-full">Filtro1                          
                        </span>
                        <span className="bg-[#D97706] text-white text-xs font-medium px-3 py-1 rounded-full">Filtro2
                        </span>
                        <span className="bg-[#65A30D] text-white text-xs font-medium px-3 py-1 rounded-full">Filtro3                          
                        </span>
                        </div>  

                    {/*título*/}
                    <h1 className="text-3xl font-bold text-white mb-3" style={{fontFamily: '"Playfair Display", serif'}}>Ensalada mediterránea</h1>
                    
                    {/*info*/}
                    <div className="flex gap-6 text-white text-sm">
                        <div className="flex items-center gap-2">
                            <span>Categoría</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span>Origen</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span>Ingredientes</span>
                        </div>
                    </div>
                    </div>

            </section>   

            <div className="max-w-7xl mx-auto px-6 py-8">                

                <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10">

                {/*sección ingredientes*/}
                <section className="mt-10">

                    <h2 className="text-2xl font-bold  text-[#1C1917] mb-5" style={{ fontFamily: '"Playfair Display", serif'}}>Ingredientes</h2>

                    <ul className="space-y-4">

                        <li className="flex items-center gap-3">
                            <div className="w-4 h-4 border-2 border-[#1C1917] rounded-sm">
                            </div>
                            <span className="text-[#1C1917]">ingrediente 1
                            </span>
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="w-4 h-4 border-2 border-[#1C1917] rounded-sm">
                            </div>
                            <span className="text-[#1C1917]">ingrediente 2
                            </span>
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="w-4 h-4 border-2 border-[#1C1917] rounded-sm">
                            </div>
                            <span className="text-[#1C1917]">ingrediente 3
                            </span>
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="w-4 h-4 border-2 border-[#1C1917] rounded-sm">
                            </div>
                            <span className="text-[#1C1917]">ingrediente 4
                            </span>
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="w-4 h-4 border-2 border-[#1C1917] rounded-sm">
                            </div>
                            <span className="text-[#1C1917]">ingrediente 5
                            </span>
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="w-4 h-4 border-2 border-[#1C1917] rounded-sm">
                            </div>
                            <span className="text-[#1C1917]">ingrediente 6
                            </span>
                        </li>

                    </ul>
                </section>

                {/*sección preparación*/}
                <section className="mt-10">

                    <h2 className="text-2xl font-bold text-[#1C1917] mb-5" style={{ fontFamily: ' "Playfair Display", serif'}}>Preparación</h2>

                    <div className="mb-6">{/*leading controla el espacio entre las líneas del párrafo*/}
                        <h3 className="text-lg font-semibold text-[#65A30D] mb-2">Paso1</h3>
                        <p className="text-[#1C1917] leading-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quis eveniet est aperiam aspernatur? Eum quas, iste assumenda dignissimos repellendus obcaecati placeat earum soluta quidem! Quaerat unde quae sunt voluptatum.</p>
                    </div>
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold text-[#65A30D] mb-2">Paso2</h3>
                        <p className="text-[#1C1917] leading-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quis eveniet est aperiam aspernatur? Eum quas, iste assumenda dignissimos repellendus obcaecati placeat earum soluta quidem! Quaerat unde quae sunt voluptatum.</p>
                    </div>
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold text-[#65A30D] mb-2">Paso3</h3>
                        <p className="text-[#1C1917] leading-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quis eveniet est aperiam aspernatur? Eum quas, iste assumenda dignissimos repellendus obcaecati placeat earum soluta quidem! Quaerat unde quae sunt voluptatum.</p>
                    </div>
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold text-[#65A30D] mb-2">Paso4</h3>
                        <p className="text-[#1C1917] leading-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quis eveniet est aperiam aspernatur? Eum quas, iste assumenda dignissimos repellendus obcaecati placeat earum soluta quidem! Quaerat unde quae sunt voluptatum.</p>
                    </div>
                </section>
                </div>

                {/*sección video*/}
                <section className="mt-10">

                <h2 className="text-2xl font-bold text-[#1C1917] mb-5" style={{ fontFamily: ' "Playfair Display", serif'}}>Video paso a paso</h2>

                <div className="rounded-2xl overflow-hidden">
                    <iframe className="w-full aspect-video" src="https://www.youtube.com/embed/4uXuX2gw2i4" title="video de la receta" allowFullScreen>
                    </iframe>
                </div>

                </section>
                
            </div>
    
        </div>
    );
} 