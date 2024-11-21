import { Link } from "react-router-dom";
import { ProjectCard } from "./ProjectCard";
import { useApi } from "../../../hooks/useApi";
import { useEffect } from "react";

export const ProjectList = () => {
  const url = `${import.meta.env.VITE_URL_BASE}/user/1`
  const { data: { data: projects = []} , error, isLoading } = useApi(url);
  //console.log(projects)
  
  //f (isLoading) return <p>Cargando proyectos...</p>;
  //if (error) return <p>Error al cargar proyectos {error}</p>;
  return (
    <section className="App-project-list">
        <div className="App-project-create-button">
          <Link to={'/admin/create-project'}>Crear proyecto</Link>
        </div>
        <h2>Lista de mis projectos</h2>
        <div className="App-project-cards-container">
          {projects.length > 0 ? (
            projects.map((project) => (
              <ProjectCard key={project.project_id} {...project} />
            ))
          ) : (
            <p>No hay proyectos disponibles.</p>
          )}
        </div>
    </section>
  )
}
