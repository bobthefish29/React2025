import React from "react";
import ReactDOM from "react-dom";

import './../cssFolder/model.css';



const Model = ({ children, onClose }) => {
    const rootFormModalElement = document.getElementById('root-formModal');

    return ReactDOM.createPortal(
        <div className="modal-backdrop" onClick={onClose}>
            <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()} // prevents closing when clicking inside modal
                style={{
                    background: "#fff",
                    padding: "2rem",
                    borderRadius: "8px",
                    minWidth: "300px",
                }}>
                {children}
            </div>
        </div>, rootFormModalElement
    );
}


export default Model;