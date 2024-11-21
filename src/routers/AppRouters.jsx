import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage, LoginPage, MyProjectsPage, MyTasksPage } from "../publicViews/pages"
import { ProtectedPage, ProjectsPage } from "../admin/pages"
import { useUser } from "../hooks/useUser"
import { CreateProjectPage } from "../admin/pages/CreateProjectPage"
import { EditProjectPage } from "../admin/pages/EditProjectPage"
import { DetailProjectPage } from "../admin/pages/DetailProjectPage"

export const AppRouters = () => {
    
    const { isAuthenticated } = useUser()

    return (
        <Routes>

            {/* RUTAS PUBLICAS */}

            <Route path='/' element={<HomePage />} />
            <Route path='projects' element={<MyProjectsPage />} />
            {/* <Route path='projects/:id' element={<ProjectPage />} />*/}
            <Route path='tasks' element={<MyTasksPage />} />
            <Route path='login' element={<LoginPage />} />
            <Route path='/*' element={<Navigate to={'/'} />} />

            {/* RUTAS PROTEGIDAS */}
            {
                isAuthenticated 
                    ? (
                        <>
                            <Route path='admin' element={<ProtectedPage />} />
                            <Route path='admin/projects' element={<ProjectsPage />} />
                            <Route path='admin/detail-project/:id' element={<DetailProjectPage/>} />
                            <Route path='admin/create-project' element={<CreateProjectPage/>} />
                            <Route path='admin/edit-project/:id' element={<EditProjectPage/>} />
                        </>
                    ) : (
                        <Route path='/*' element={<Navigate to={'login'} />} />
                    )
            }
        </Routes>
    )
}