import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import useAuth from '~/hooks/useAuth';

export default function Button({ children, type = "button", variant = "primary", onClick, redirectToSignIn = false, ...props }) {
    const navigate = useNavigate();
    const { user } = useAuth();

    const handleClick = (event) => {
        if (redirectToSignIn && !user) {
            event.preventDefault();
            navigate('/auth/sign-in');
        } else {
            if (onClick) {
                onClick(event);
            }
        }
    };

    return (
        <button
            type={type}
            {...props}
            onClick={handleClick}
            className={classNames({
                "w-full min-h-11 text-white py-2 px-4 font-medium rounded transition-colors focus:outline-none focus:ring whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed": true,
                "bg-zinc-800 hover:bg-zinc-700 focus:ring-zinc-400 focus:ring-opacity-50": variant === "primary",
                "bg-neutral-700 hover:bg-neutral-600 focus:ring-neutral-400 focus:ring-opacity-50": variant === "secondary",
                "bg-[#e13e2a] hover:bg-[#d3311e] focus:ring-[rgba(234,68,53,0.3)] focus:ring-opacity-50": variant === "google",
                "bg-[#1877f2] hover:bg-[#166fe5] focus:ring-[rgba(59,89,152,0.3)] focus:ring-opacity-50": variant === "facebook",
                "bg-[#b7191c] hover:bg-[#a41411] focus:ring-[#b7191c] focus:ring-opacity-50": variant === "danger",
                "bg-[#28a745] hover:bg-[#218838] focus:ring-[#28a745] focus:ring-opacity-50": variant === "success",
                "w-full text-left px-4 h-12 py-2.5 text-sm block text-white text-opacity-85 hover:text-opacity-100 rounded-lg hover:bg-neutral-700 transition-colors": variant === "dropdown",
                'text-white': props.active || variant === "dropdown"
            })}
        >
            {children}
        </button>
    )
}

Button.propTypes = {
    type: PropTypes.oneOf(['submit', 'button', 'reset']),
    variant: PropTypes.oneOf(['primary', 'secondary', 'google', 'facebook', 'dropdown', 'danger', 'success']),
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    redirectToSignIn: PropTypes.bool,
    active: PropTypes.bool
};
