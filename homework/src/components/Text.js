const Text = (props) => {
    return (
        <p className={`${props.size}`} style={{ color: props.color }}>{props.children}</p>
    );
};


export default Text;