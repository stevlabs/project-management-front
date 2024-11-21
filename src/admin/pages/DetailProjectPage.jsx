import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useApi } from '../../hooks/useApi';
import { formatDate } from '../utils/dateUtils';
import { BackButton } from '../components/buttons/BackButton';
import { FileTable } from '../components/projects-resources/FileTable';

export const DetailProjectPage = () => {
  const { id } = useParams();
  const url = `${import.meta.env.VITE_URL_BASE}/project/${id}`;
  const { data: { data: projects = []}, isLoading, error } = useApi(url);
  //if (isLoading) return <p>Cargando proyecto...</p>;
  //if (error) return <p>Error al cargar el proyecto: {error}</p>;
  const { project_id, name, description, start_date, end_date } = projects;
  
  return (
    <>
      <section className="App-detail-project-page">
        <h2>Detalles del proyecto</h2>
        <div className="App-detail-project-page-container">
          <BackButton to="/admin/projects" label="Volver" />
          <h1>{name}</h1>
          <p><strong>Descripción:</strong> {description}</p>
          <p><strong>Fecha de inicio:</strong> {formatDate(start_date)}</p>
          <p><strong>Fecha de fin:</strong> {formatDate(end_date)}</p>
        </div>
        {/*<FileTable projectId={project_id} />*/}
        <FileTable />
      </section>
    </>
  )
}
