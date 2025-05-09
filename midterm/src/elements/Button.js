



const Button = (p) => {

    return (
        <div className={theme === themes.dark ? 'button-dark' : 'button'} onClick={p.Click}>
            {label}
        </div>
    );
};

export default Button;