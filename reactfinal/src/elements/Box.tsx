
interface boxProps{
    children: any;
    Name: string;
    backGroundColor: any;
}


const Box = (prop : boxProps) => {
    return(
        <div className={prop.Name} style={{backgroundColor: prop.backGroundColor}}>
            {prop.children}
        </div>
    );
}

export default Box;