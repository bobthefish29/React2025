const Box = (props) =>{
    return(
        <div className={` box ${props.size} `}>
            {props.children}
        </div>
    );
}


export default Box;