

const Button = (p) => {
    return (
        <button className={p.Name} onClick={p.Click} style={{ backgroundColor: p.BackGround, color: p.FontColor}}>
            {p.children}
        </button>
    );
};

export default Button;