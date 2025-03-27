import { useState } from "react";
import { Model } from './Model';

const Todo = () => {
    const [showModel, setShowModel] = useState(false);

    const onDissmissModel = () =>{
        setShowModel(false);
    };

    return (
        // in react you can only have one parent component, so the div was the one item
        // the <> makes it a defult parent component
        <>
        <div className="card-content">
            <h2>Learn React</h2>
            <button onClick={() => {setShowModel(true)}} className="btn">Done</button>
        </div>
        {/* very short hand is <Model />  the dissModel passess an props into the modal*/}
        {showModel && <Model dissModel={onDissmissModel} />}
        </>
    );
}

// this is exporting it, becaseu it only one function we can do defult, i
export default Todo;