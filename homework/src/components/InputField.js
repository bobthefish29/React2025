// this has an on change that takes a function
const InputField = (props) =>{
    return(
        <input type={`${props.type}`} placeholder={`${props.placeholder}`} onChange={props.function} className={`InputField`} min={props.min} max={props.max} >
            {props.children}
        </input>
    );
}


export default InputField;