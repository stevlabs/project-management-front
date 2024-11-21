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
          HEADER DE EJEMPLO
        </header>
        {/* Barra de navegación principal */}
        <NavBar />
        {/* Contenido principal gestionado por rutas */}
        <main>
          <AppRouters />
        </main>
        {/* Footer de la aplicación */}
        <footer className='App-footer'>
          FOOTER DE EJEMPLO
        </footer>
      </UserProvider>
    </>
  )
}

export default App
