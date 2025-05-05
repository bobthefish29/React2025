const Image = (p) =>{
    return(
        <img src={p.image} alt={p.alt} className={p.name}></img>
    );
}

export default Image;