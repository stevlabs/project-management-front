import { NavBar } from '../ui/components'
import { UserProvider } from './context/UserContext'
import { AppRouters } from './routers/AppRouters'
import './App.css'

function App() {
  return (
    <>
      <UserProvider>
        <header className='App-header'>
          HEADER DE EJEMPLO
        </header>
        <NavBar />
        <main>
          <AppRouters />
        </main>
        <footer className='App-footer'>
          FOOTER DE EJEMPLO
        </footer>
      </UserProvider>
    </>
  )
}

export default App
