import '../css/box.css';

const Box = (p) =>{
    return(
        <div className={p.Name} >
            {p.children}
        </div>
    )
}

export default Box;