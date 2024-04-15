import classNames from 'classnames';
import propTypes from 'prop-types';

export default function Button({ children, type = "button", variant = "primary", ...props }) {

    return (
        <button
            type={type}
            {...props}
            className={classNames({
                "w-full min-h-11 text-white py-2 px-4 font-medium rounded transition-colors focus:outline-none focus:ring whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed": true,
                "bg-zinc-700 hover:bg-zinc-600 focus:ring-zinc-300 focus:ring-opacity-50": variant === "primary",
                "bg-zinc-900 hover:bg-zinc-800 focus:ring-zinc-300 focus:ring-opacity-50": variant === "secondary",
                "bg-[#e13e2a] hover:bg-[#d3311e] focus:ring-[rgba(234,68,53,0.3)] focus:ring-opacity-50": variant === "google",
                "bg-[#1877f2] hover:bg-[#166fe5] focus:ring-[rgba(59,89,152,0.3)] focus:ring-opacity-50": variant === "facebook",
                // danger
            })}
        >
            {children}
        </button>
    )
}

Button.propTypes = {
    type: propTypes.oneOf(['submit', 'button', 'reset']),
    variant: propTypes.oneOf(['primary', 'secondary', 'google', 'facebook']),
    children: propTypes.node.isRequired
}