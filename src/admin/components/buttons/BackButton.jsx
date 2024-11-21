import { useNavigate } from 'react-router-dom';
import "./BackButton.css";

export const BackButton = ({ to = "/", label = "Volver" }) => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(to);
    };

    return (
        <div className='App-btn-back-container'>
            <button className="App-btn-back" onClick={handleBack}>
                {label}
            </button>
        </div>
    )
}
