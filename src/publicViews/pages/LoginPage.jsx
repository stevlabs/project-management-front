import { useNavigate } from "react-router-dom"
import { useUser } from "../../hooks/useUser"
import "./loginPage.css"

export const LoginPage = () => {

  const { mensaje, user, setUser, isAuthenticated, login } = useUser()
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
    <div className="App-login-page">
      {/*<code><pre>{JSON.stringify(user, null, " ")}</pre></code>*/}
      <h1>LoginPage</h1>
      {/*<h2>{mensaje}</h2>*/}
      {/*<p>{isAuthenticated ? 'está autenticado' : 'no está autenticado'}</p>*/}

      <form
          id='login'
          onSubmit={handleSubmit}
      >
        <label htmlFor="name">Nombre</label>
        <input
            type="text"
            name='name'
            id='name'
            placeholder='Escriba su nombre'
        />
        <label htmlFor="password">Contraseña</label>
        <input
            type="text"
            name='password'
            id='password'
            placeholder='Escriba su contraseña'
        />
        <button type='submit'>
          Iniciar sesión
        </button>
      </form>
    </div>
  )
}

