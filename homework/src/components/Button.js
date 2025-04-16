// it still needs a valed color name, like black or white, you could also put rgb(12,12,12) and that would work
const Button = (props) =>{
    return(
        <button style={{backgroundColor: props.color}} onClick={props.function} >{props.children}</button>
    );
}
export default Button;