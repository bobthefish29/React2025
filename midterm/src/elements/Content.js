
const Content = (p) =>{
    return(
        <section className={p.Name} >
            {p.children}
        </section>
    )
}

export default Content;