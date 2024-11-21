import React from 'react'
import { ProjectList } from '../components/projects/ProjectList'

export const ProjectsPage = () => {
  return (
    <div className="App-my-projects-page">
        <h1>Mis Proyectos</h1>
        {/*<ProjectSearchForm />*/}
        <ProjectList />
    </div>
  )
}
