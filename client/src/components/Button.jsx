/* eslint-disable react/prop-types */
const Button = ({disabled, text, href, to, className = '' }) => {
    return (
        <button
            disabled={disabled}
            className={`font-semibold rounded-lg bg-dark text-light border-2 hover:bg-light hover:text-dark px-4 py-2 cursor-pointer ${className}`}
            href={href} to={to}>
            {text}
        </button>
    )
}

export default Button