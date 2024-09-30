import { use } from 'react'
import { UserContext } from '../components/user'

export function UserContextExample () {
  const { name, isLogged, updateUser } = use(UserContext)

  return (
    <div>
      {
            isLogged
              ? (
                <>
                  <h1>Hola {name}</h1>
                  <button onClick={() => updateUser({ name: null, isLogged: false })}>
                    Cerrar Sesion
                  </button>
                </>
                )
              : (
                <>
                  <p>Bienvenido</p>
                  <button onClick={() => updateUser({ name: 'PATO', isLogged: true })}>
                    Iniciar Sesion
                  </button>
                </>
                )
        }
    </div>
  )
}
