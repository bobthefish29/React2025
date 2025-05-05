const Box = (p) =>{
    return(
        <div className={p.name}>
            {p.children}
        </div>
    )
}

export default Box;