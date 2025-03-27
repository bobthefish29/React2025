// props is what we want to pass in, its the pramertes to the function
export const Model = (props) => {
    return (
        <>
            <div className="modal">
                <p>Did you compleate this task?</p>
                <button onClick={() => props.dissModel()} className="btn btn-highlight">Cancel</button>
                <button onClick={() => props.dissModel()} className="btn">Confirm!</button>
            </div>
            <div onClick={()=> props.dissModel()} className="backdrop"></div>
        </>
    );

}

// export default Model;