import { useContext } from "react"
import { UserContext } from "../../context/UserContext"
import { useNavigate } from "react-router-dom"

export const LoginPage = () => {

  const { mensaje, user, setUser, isAuthenticated, login } = useContext(UserContext)
  const navigate = useNavigate()

  const handleSubmit = (ev) => {
    ev.preventDefault()
    const nombre = ev.target.name.value.trim()
    const password = ev.target.password.value.trim()
    /* COMPROBAR CREDENCIALES*/
    const logedUser = {
        id: 2,
        nombre,
        password,
        roll: 'admin'
    }
    setUser(logedUser)
    login()
    navigate('/admin')
  }  
  return (
    <div>
      <code><pre>{JSON.stringify(user, null, " ")}</pre></code>
      <h1>LoginPage</h1>
      <h2>{mensaje}</h2>
      <p>{isAuthenticated ? 'está autenticado' : 'no está autenticado'}</p>

      <form
          id='login'
          onSubmit={handleSubmit}
      >
          <input
              type="text"
              name='name'
              id='name'
              placeholder='Nombre'
          />
          <input
              type="text"
              name='password'
              id='password'
              placeholder='Password'
          />
          <button type='submit'>
              Login
          </button>
      </form>
    </div>
  )
}

