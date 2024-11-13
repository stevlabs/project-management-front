import { useUser } from "../../hooks/useUser"
import './homePage.css'

export const HomePage = () => {

  const { mensaje, user } = useUser()

  return (
    <div className="App-home-page">
      <h1>PAGINA DE INICIO</h1>
      <h2>Bienvenido a la web de gestion de projectos</h2>
      <p>Como usuario, puedes consultar tus projectos y tareas.</p>
    </div>
  )
}
