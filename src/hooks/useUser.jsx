import { UserContext } from '../context/UserContext'

export const useUser = () => {
    return UserContext()
}