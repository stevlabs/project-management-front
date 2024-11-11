import { useContext } from "react"
import { UserContext } from "../../context/UserContext"

export const ProtectedPage = () => {

  const { logout } = useContext(UserContext)

  const handlerClick = () => {
    logout()
  }
  
  return (
    <>
      <h1>ProtectedPage</h1>
      <button onClick={handlerClick}>logout</button>
    </>
  )
}
