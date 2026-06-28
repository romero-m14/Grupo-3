
export default function FilterSection({title, data, property}) {
    //const [filterCountry, setFilterCountry] = useState("");
    //const recipes = useContry(filterCountry)
    //console.log(recipes)
    //onClick={() => {setFilterCountry(m[property])}

    return (
        <section className="mt-4 border-b border-navbar/20">
          <h2 className="font-bold tracking-widest uppercase text-navbar text-xl">{title}</h2>
          
          <ul className="m-4 p-6 flex flex-wrap gap-4 overflow-y-auto max-h-40">
            {data?.map((m) => (
              <li key={m[property]}>
                <button  className="bg-boton text-fondo p-4 rounded-md cursor-pointer active:bg-navbar">{m[property]}</button>
              </li>
            ))}
          </ul>
        </section>
    )
}