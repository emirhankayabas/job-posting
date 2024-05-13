import propTypes from 'prop-types';
import classNames from 'classnames';

export default function Divider({ direction = "column" }) {
    return (
        <div className={classNames({
            "w-[1px] h-full bg-neutral-700": direction === "column",
            "w-full h-[1px] bg-neutral-700": direction === "row"
        })}></div>
    )
}

Divider.propTypes = {
    direction: propTypes.oneOf(["column", "row"])
}