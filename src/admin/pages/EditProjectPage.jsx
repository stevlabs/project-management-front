import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm';
import { useNavigate, useParams } from 'react-router-dom';
import { useApi } from '../../hooks/useApi';
import { formatDateForInput } from '../utils/dateUtils';
import { BackButton } from '../components/buttons/BackButton';

export const EditProjectPage = () => {
  const { id } = useParams();
  const url = `${import.meta.env.VITE_URL_BASE}/project/${id}`;
  const { data, error, isLoading } = useApi(url, 'GET');
  const { 
    formulario, 
    handlerSubmit, 
    handlerChange, 
    setFormulario,
  } = useForm(url, 'PUT');
  const navigate = useNavigate();

  useEffect(() => {
    if (data && data.ok) {
      const { start_date, end_date, ...rest } = data.data;
      setFormulario({
        ...rest,
        start_date: formatDateForInput(start_date),
        end_date: formatDateForInput(end_date),
      });
    }
  }, [data]);

  return (
    <section className='App-create-project-page'>
        <BackButton to="/admin/projects" label="Volver" />
        <h2>Editar Proyecto</h2>
        <form onSubmit={handlerSubmit}>
            <label htmlFor="name">Nombre del Proyecto</label>
            <input
                type="text"
                id="name"
                name="name"
                value={formulario.name}  
                onChange={handlerChange}
            />
        
            <label htmlFor="description">Descripción</label>
            <textarea
                id="description"
                name="description"
                value={formulario.description} 
                onChange={handlerChange}
            />
        
            <label htmlFor="start_date">Fecha inicio</label>
            <input
                type="date"
                id="start_date"
                name="start_date"
                value={formulario.start_date} 
                onChange={handlerChange}
            />
        
            <label htmlFor="end_date">Fecha fin</label>
            <input
                type="date"
                id="end_date"
                name="end_date"
                value={formulario.end_date} 
                onChange={handlerChange}
            />
            <button type="submit">Editar Proyecto</button>
        </form>
    </section>
  )
}
