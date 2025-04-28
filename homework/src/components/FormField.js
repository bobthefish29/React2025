import InputField from "./InputField";
import Label from "./Label";


// this has an on change that takes a function
const FormField = (props) =>{



    return(
        <div className={`${props.class}`}>
            <Label>{props.name}</Label>
            <InputField type={`${props.type}`} placeholder={`${props.name}`} function={props.function} min={`${props.min}`} max={`${props.max}`}></InputField>        
        </div>
    );
}


export default FormField;