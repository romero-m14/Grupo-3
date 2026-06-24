export default function FilterSection({title, data, property, fn}) {
    return (
        <section>
          <h2 className="font-bold text-2xl">{title}</h2>
          
          <ul className="m-4 p-6 border flex flex-wrap gap-4 overflow-y-auto max-h-40">
            {data?.map((m) => (
              <li key={m[property]}>
                <button onClick={fn} className="bg-amber-600 p-4 rounded-md cursor-pointer">{m[property]}</button>
              </li>
            ))}
          </ul>
        </section>
    )
}