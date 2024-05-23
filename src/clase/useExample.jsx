import { Suspense, use, useState } from 'react'

// Server component
export function UseFetchExample () {
  const [name, setName] = useState('')

  const fetchPokemon = () => {
    const trimmedName = name.trim()
    if (!trimmedName) return Promise.resolve()

    return fetch(`https://pokeapi.co/api/v2/pokemon/${trimmedName.toLowerCase()}`)
      .then(res => {
        if (res.ok) return res.json()
        return { error: true, message: 'No se encontró el Pokémon' }
      })
  }
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          placeholder='Ej. Pikachu'
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </form>
      <Suspense fallback={<div>Cargando...</div>}>
        <ShowPokemon pokemonPromise={fetchPokemon()} />
      </Suspense>
    </div>
  )
}

// Client component
function ShowPokemon ({ pokemonPromise }) {
  const pokemon = use(pokemonPromise)
  if (pokemon?.error) {
    return <div>Error: {pokemon.message}</div>
  }
  if (!pokemon) return null
  return (
    <div>
      Resultado:
      <article>
        <h3>{pokemon.name}</h3>
        <img src={pokemon.sprites?.front_default} alt={pokemon.name} />
        <p>Peso: {pokemon.weight} kg</p>
      </article>
    </div>
  )
}
