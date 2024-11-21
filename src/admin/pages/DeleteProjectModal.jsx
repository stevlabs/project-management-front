import { Button, Modal } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useApi } from "../../hooks/useApi";

export const DeleteProjectModal = ({ show, handleClose, projectId, projectName }) => {
    const url = `${import.meta.env.VITE_URL_BASE}/project/${projectId}`;
    const { makeRequest, isLoading } = useApi(url, 'DELETE');
    const handleConfirm = async () => {
        try {
            await makeRequest();
            alert(`Proyecto "${projectName}" eliminado con éxito.`);
            handleClose();
        } catch (error) {
          console.error("Error al eliminar el proyecto:", error);
          alert("Hubo un problema al eliminar el proyecto.");
        }
      };

    return (
        <>
            <Modal 
                show={show} 
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                container={document.body}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Eliminar Proyecto</Modal.Title>
                </Modal.Header>
                <Modal.Body>¿Estás seguro de que deseas eliminar el proyecto "<b>{projectName}</b>"?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={handleConfirm}>
                        Confirmar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
