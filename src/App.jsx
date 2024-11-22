import { NavBar } from '../ui/components'
import { UserProvider } from './context/UserContext'
import { AppRouters } from './routers/AppRouters'
import './App.css'

// Componente principal de la aplicación.
function App() {
  return (
    <>
      {/* Contexto para manejar datos del usuario */}
      <UserProvider>
        {/* Header de la aplicación */}
        <header className='App-header'>
          <h1>Gestión de Proyectos</h1>
        </header>
        {/* Barra de navegación principal */}
        <NavBar />
        {/* Contenido principal gestionado por rutas */}
        <main>
          <AppRouters />
        </main>
        {/* Footer de la aplicación */}
        <footer className='App-footer'>
          <p>© {new Date().getFullYear()} Gestión de Proyectos.</p>
        </footer>
      </UserProvider>
    </>
  )
}

export default App
