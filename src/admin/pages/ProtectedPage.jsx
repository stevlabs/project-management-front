import { Link } from "react-router-dom"
import "./protectedPage.css"

export const ProtectedPage = () => {

  return (
    <div className="App-admin-homepage">
      <header className="App-admin-header">
        <h1>Panel del dministrador</h1>
        <p>Gestiona tus proyectos y administra tus equipos desde un solo lugar.</p>
      </header>
      <section className="App-admin-actions">
        <div className="App-action-card">
          <h2>Gestión de Proyectos</h2>
          <p>Crea, elimina y administra proyectos.</p>
          <Link to="/admin/projects" className="App-action-btn">
            Ir a Proyectos
          </Link>
        </div>
      </section>
    </div>
  )
}
