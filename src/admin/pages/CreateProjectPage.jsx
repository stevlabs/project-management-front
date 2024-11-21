import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm';
import { useNavigate } from 'react-router-dom';
import { BackButton } from '../components/buttons/BackButton';

export const CreateProjectPage = () => {
  const url = `${import.meta.env.VITE_URL_BASE}`;
  const { formulario, setFormulario, handlerSubmit, handlerChange, data, error } = useForm(url, 'POST');

  //const navigate = useNavigate();
  useEffect(() => {
    setFormulario((prevFormulario) => ({
      ...prevFormulario,
      created_by: 1,
    }));
  }, [setFormulario]);
   

  return (
    <section className='App-create-project-page'>
        <BackButton to="/admin/projects" label="Volver" />
        <h2>Crear Nuevo Proyecto</h2>
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
            <button type="submit">Crear Proyecto</button>
        </form>
    </section>
  )
}
