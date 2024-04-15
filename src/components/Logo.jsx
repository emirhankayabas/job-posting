import classNames from 'classnames';
import propTypes from 'prop-types';

export default function Logo({ variant = "medium", ...props }) {
    const logoUrl = 'https://emirhankayabas.com.tr/demo/public/thema-v1/images/logo-v2.png';

    return (
        <img
            {...props}
            src={logoUrl}
            className={classNames({
                'h-6': variant === 'small',
                'h-10': variant === 'medium',
                'h-14': variant === 'large',
            })}
        />
    )
}

Logo.propTypes = {
    variant: propTypes.oneOf(['small', "medium", "large"]),
};