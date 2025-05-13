import '../css/content.css';


const Content = (p) =>{
    return(
        <section className={p.Name} style={{backgroundColor: p.BackGroundColor}}>
            {p.children}
        </section>
    )
}

export default Content;