import { ProjectList } from "../components/projects/ProjectList";
import "./myProjectsPage.css"

export const MyProjectsPage = () => {
  return (
    <div className="App-my-projects-page">
      <h1>Mis Proyectos</h1>
      {/*<ProjectSearchForm />*/}
      <ProjectList />
    </div>
  )
}
