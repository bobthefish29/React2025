const Text = (p) =>{
    return(
        <p className={p.name} style={{color: p.color}} id={p.id}>{p.children}</p>
    );
}

export default Text;