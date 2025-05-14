import '../css/box.css';

const Box = (p) =>{
    return(
        <div className={p.Name} style={{backgroundColor: p.BackGroundColor, border: "1px solid", borderColor: p.Border }}>
            {p.children}
        </div>
    )
}

export default Box;