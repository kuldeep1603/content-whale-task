
const Icon = ({
    title,
    classname = "",
    style,
    width = "24px",
    height = "24px",
    onClick,
}) => {
    return (
        <svg
            className={`${classname} cursor-pointer`}
            width={width}
            height={height}
            style={style}
            onClick={onClick}
        >
            <use xlinkHref={`/assets/sprite.svg#icon-${title}`} />
        </svg>
    );
};

export default Icon;