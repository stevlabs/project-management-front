import { NavBar } from '../ui/components/NavBar'
import { UserProvider } from './context/UserContext'
import { AppRouters } from './routers/AppRouters'

function App() {
  return (
    <>
      <UserProvider>
        <header>
          HEADER DE EJEMPLO
        </header>
        <nav>
          <NavBar />
        </nav>
        <main>
          <AppRouters />
        </main>
        <footer>
          FOOTER DE EJEMPLO
        </footer>
      </UserProvider>
    </>
  )
}

export default App
