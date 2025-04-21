const ErrorField = (props) => {
    return(
        <div style={{ color: props.errorColor }} >
            {props.children}
        </div>
    )
}

export default ErrorField;