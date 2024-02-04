/* eslint-disable react/prop-types */
const Button = ({ text, href, to, className = '' }) => {
    return (
        <button
            className={`font-semibold rounded-lg bg-dark text-light border-2 hover:bg-light hover:text-dark px-4 py-2 cursor-pointer ${className}`}
            href={href} to={to}>
            {text}
        </button>
    )
}

export default Button