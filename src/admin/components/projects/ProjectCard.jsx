import { Link } from "react-router-dom"
import { formatDate } from "../../utils/dateUtils"
import { DeleteProjectModal } from "../../pages/DeleteProjectModal";
import { useState } from "react";

export const ProjectCard = ({ project_id, name, description, start_date, end_date }) => {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <article className="App-project-card">
        <h3>{name}</h3>
        <p>{description}</p>
        <p>Fecha inicio: {formatDate(start_date)}</p>
        <p>Fecha fin: {formatDate(end_date)}</p>
        <div className="App-project-card-actions">
          <div className="App-project-card-detail">
            <Link to={`/admin/detail-project/${project_id}`}>Detalles</Link>
          </div>
          <div className="App-project-card-edit">
            <Link to={`/admin/edit-project/${project_id}` }>Editar</Link>
          </div>
          <div className="App-project-card-delete">
            <button onClick={handleShow}>Eliminar</button>
          </div>
          <DeleteProjectModal
            show={show}
            handleClose={handleClose}
            projectId={project_id}
            projectName={name}
          />
        </div>
        
        
    </article>
  )
}
