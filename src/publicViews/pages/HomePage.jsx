import { useContext } from "react"
import { UserContext } from "../../context/UserContext"

export const HomePage = () => {

  const { mensaje, user } = useContext(UserContext)

  return (
    <div>
      <code><pre>{JSON.stringify(user, null, " ")}</pre></code>
      <h1>HomePage</h1>
      <h2>{mensaje}</h2>
    </div>
  )
}
