
const Button = ({
    children,
    onClick,
    className = "",
    shadowColor = "#ffffff",
    type = "button",
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`btn ${className}`}
            style={{ boxShadow: `4px 4px 0 ${shadowColor}` }}
        >
            {children}
        </button>
    )
}

export default Button
