import React, { useEffect, useState } from 'react'
import { formatDate } from '../../utils/dateUtils';
import './fileTable.css';
import { useFileManager } from '../../hooks/useFileManager';

export const FileTable = ({ projectId = 1 }) => {
    const { state, addFile, deleteFile, getFiles } = useFileManager(projectId);
    const [file, setFile] = useState(null);

    const handleFileChange = (ev) => {
        setFile(ev.target.files[0]);
    };

    const handleFileUpload = async (ev) => {
        ev.preventDefault();
        if (!file) {
            alert('Por favor, seleccione un archivo antes de subirlo.');
            return;
        }
        try {
            await addFile(file, 1);
            alert('Archivo subido con éxito.');
            setFile(null);
        } catch (error) {
            console.error(error);
            alert('Error al subir el archivo.');
        }
    };

    const handleFileDelete = async (fileId) => {
        try {
            await deleteFile(fileId);
            alert('Archivo eliminado con éxito.');
        } catch (error) {
            console.error(error);
            alert('Error al eliminar el archivo.');
        }
    };

    return (
    <div className="App-file-table-container">
        <h3>Recursos del proyecto</h3>
        <div className="App-file-actions">
            <form onSubmit={handleFileUpload}>
                <input
                    type="file"
                    id="file-upload"
                    className="App-file-upload-input"
                    onChange={handleFileChange}
                    required
                />
                <button type="submit" className="App-file-add-btn">
                    Añadir Archivo
                </button>
            </form>
        </div>
        <table className="App-file-table">
            <thead>
            <tr>
                <th>Nombre del archivo</th>
                <th>Fecha de subida</th>
                <th>Acción</th>
            </tr>
            </thead>
            <tbody>
            {state.files.map((file) => (
                <tr key={file.resource_id}>
                <td>{file.file_name}</td>
                <td>{formatDate(file.uploaded_at)}</td>
                <td className='App-file-buttons'>
                    <a
                        href={`${import.meta.env.VITE_URL_BASE}/uploads/${file.file_name}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="App-file-btn"
                    >
                        Descargar
                    </a>
                    <button
                        onClick={() => handleFileDelete(file.resource_id)}
                        className="App-file-btn App-file-delete-btn"
                    >
                        Eliminar
                    </button>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
    )
}
