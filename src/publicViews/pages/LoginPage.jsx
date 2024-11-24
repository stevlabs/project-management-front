import { useNavigate } from "react-router-dom"
import { useUser } from "../../hooks/useUser"
import "./loginPage.css"

export const LoginPage = () => {
  // Hook personalizado para la autenticación
  const { mensaje, user, setUser, isAuthenticated, login } = useUser()
  // Hook para navegar entre rutas
  const navigate = useNavigate()

  // Manejar el envío del formulario de login
  const handleSubmit = (ev) => {
    ev.preventDefault()
    // Obtener los valores ingresados por el usuario
    const nombre = ev.target.name.value.trim()
    const password = ev.target.password.value.trim()
    // Simulación de autenticación con credenciales
    const logedUser = {
        id: 2,
        nombre,
        password,
        roll: 'admin'  // Asigna un rol simulado
    }
    // Guarda al usuario en el contexto
    setUser(logedUser)
    // Marca al usuario como autenticado
    login()
    // Redirigir al panel de admin
    navigate('/admin')
  }  
  return (
    <div className="App-login-page">
      <h1>INICIO DE SESION</h1>
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
            type="password"
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

