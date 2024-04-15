import propTypes from 'prop-types';
import classNames from 'classnames';

export default function Title({ variant, children }) {
    return (
        <h1 className={classNames({
            "text-white font-semibold": true,
            'text-4xl': variant === 'h1',
            'text-3xl': variant === 'h2',
            'text-2xl': variant === 'h3',
            'text-xl': variant === 'h4',
            'text-lg': variant === 'h5',
            'text-base': variant === 'h6',
        })}>
            {children}
        </h1>
    )
}

Title.propTypes = {
    variant: propTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
    children: propTypes.node.isRequired,
}