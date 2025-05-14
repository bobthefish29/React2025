const Text = (p) =>{
    return(
        <p className={p.Name} style={{color: p.Color}} id={p.Id}>{p.children}</p>
    );
}
export default Text;