interface textLayout{
    children: any;
    textColor?: string;
    Name?: string;
}

const Text = (prop : textLayout) =>{
    return(
        <p style={{color: prop.textColor}} className={prop.Name}>{prop.children}</p>
    );
}

export default Text;