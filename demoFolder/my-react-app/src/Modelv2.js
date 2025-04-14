import ReactDOM from 'react-dom';

// props is what we want to pass in, its the pramertes to the function
export const ModelV2 = (props) => {
    const rootModalElement = document.getElementById("root-modal");
    return ReactDOM.createPortal(
        <>
            <div className="modal">
                <p>Did you compleate this task?</p>
                <button onClick={() => props.dismissModal()} className="btn btn-highlight" >Cancel</button>
                <button onClick={() => props.dismissModal()} className="btn">Confirm!</button>
            </div>
            <div onClick={()=> props.dismissModal()} className="backdrop"></div>
        </>,
        rootModalElement
    );

}

// export default Model;