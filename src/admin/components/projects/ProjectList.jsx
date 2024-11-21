import { Link } from "react-router-dom";
import { ProjectCard } from "./ProjectCard";
import { useApi } from "../../../hooks/useApi";
import { useEffect, useState } from "react";

export const ProjectList = () => {
  const url = `${import.meta.env.VITE_URL_BASE}/user/1`
  const { data: { data: projects = []} , error, isLoading } = useApi(url);
  const [projectList, setProjectList] = useState([]);
  const [isSynced, setIsSynced] = useState(false);

  useEffect(() => {
    if (!isSynced && projects.length > 0) {
      setProjectList(projects);
      setIsSynced(true);
    }
  }, [projects, isSynced]);

  const handleProjectDelete = (deletedProjectId) => {
    setProjectList((prevList) =>
      prevList.filter((project) => project.project_id !== deletedProjectId)
    );
  };

  return (
    <section className="App-project-list">
        <div className="App-project-create-button">
          <Link to={'/admin/create-project'}>Crear proyecto</Link>
        </div>
        <h2>Lista de mis projectos</h2>
        <div className="App-project-cards-container">
          {projectList.length > 0 ? (
            projectList.map((project) => (
              <ProjectCard 
                key={project.project_id} 
                {...project} 
                onProjectDelete={handleProjectDelete} 
              />
            ))
          ) : (
            <p>No hay proyectos disponibles.</p>
          )}
        </div>
    </section>
  )
}
