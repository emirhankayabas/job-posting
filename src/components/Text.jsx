import propTypes from 'prop-types';
import classNames from 'classnames';

export default function Text({ variant = "medium", children }) {
    return (
        <p className={classNames({
            "text-white text-opacity-60": true,
            'text-sm': variant === 'small',
            'text-base': variant === 'medium',
            'text-lg': variant === 'large',
            'text-xl': variant === 'xlarge',
        })}>
            {children}
        </p>
    )
}

Text.propTypes = {
    variant: propTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
    children: propTypes.node.isRequired,
}