// Importar el hook useState para manejar el estado de formulario
import { useState } from "react"
import { useApi } from "./useApi"
import { useNavigate } from "react-router-dom";
// Definir y exportar el hook personalizado 
export const useForm = (url, method) => {
    const navigate = useNavigate();
    // Define el estado inicial del formulario como vacío
    const [ formulario, setFormulario ] = useState("")
    const { makeRequest, data, error, isLoading } = useApi(url, method)
    // Funcion para serializar los datos del formulario en un objeto
    const serializeForm = (formulario) => {
        const formData = new FormData(formulario)
        console.log(formData)
        const data = {}
        for (let [name, value] of formData) {
            data[name] = value
        }
        return data
    }

    // Funcion para manejar el evento del submit del formulario
    const handlerSubmit = async (ev) => {
        ev.preventDefault()
        console.log(ev.target)
        const data = serializeForm(ev.target)
        setFormulario(data)
        try {
            await makeRequest(method, formulario);
            navigate("/admin/projects");
        } catch (error) {
            console.error(error);
            throw error;  
        }
    }

    // Funcion para controlar los cambios en el formulario
    const handlerChange = ({ target }) => {
        const { name, value } = target
        setFormulario({
            ...formulario, // Manetener los valores anteriores
            [name]: value // Actualiza el campo que se haya modificado
        })
    }
    /*
    useEffect(() => {
        if (data) {
            setFormulario(data);
        }
    }, [data]);
    */

    // Devuelve el estado del formulario y las funciones
    return {
        handlerSubmit,
        handlerChange,
        setFormulario,
        formulario,
        data,
        error,
        isLoading,
    }
}
