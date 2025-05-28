

interface buttonSettings {
    children: any;
    theID: string;
    Clicked: any;
    ClassName: string;
    backGroundColor?: any;
    textColor?:any;
    
}



const Button = (prop : buttonSettings) => {
    return(
        <button id={prop.theID} onClick={prop.Clicked} className={prop.ClassName} style={{backgroundColor: prop.backGroundColor, color: prop.textColor}}>
            {prop.children}
        </button>
    );
}


export default Button;