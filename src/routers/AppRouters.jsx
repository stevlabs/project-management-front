import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage, LoginPage, MyProjectsPage, MyTasksPage } from "../publicViews/pages"
import { ProtectedPage } from "../admin/pages"
import { UserContext } from "../context/UserContext"
import { useContext } from "react"

export const AppRouters = () => {
    
    const { isAuthenticated } = useContext(UserContext)

    return (
        <Routes>

            {/* RUTAS PUBLICAS */}

            <Route path='/' element={<HomePage />} />
            <Route path='projects' element={<MyProjectsPage />} />
            <Route path='tasks' element={<MyTasksPage />} />
            <Route path='login' element={<LoginPage />} />
            <Route path='/*' element={<Navigate to={'/'} />} />

            {/* RUTAS PROTEGIDAS */}
            {
                isAuthenticated
                    ?
                    <Route exact path='admin' element={<ProtectedPage />} />
                    :
                    <Route path='/*' element={<Navigate to={'login'} />} />
            }
        </Routes>
    )
}