import ReactDOM from "react-dom";
import '../css/modal.css';
// import { useContext } from 'react';
// import { ThemeContext } from '../context/themes.jsx';

interface shelterModal{
    children: any;
    onClose : any;

}

const ShelterModal = (props : shelterModal) =>{

    const rootFormModalElement = document.getElementById('root-Modal');

    return ReactDOM.createPortal(
        <div className="modal-backdrop" onClick={props.onClose}>
            <div className="modalHolder">
                {props.children}
            </div>
        </div>


    , rootFormModalElement);
}


export default ShelterModal;