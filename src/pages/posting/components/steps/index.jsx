import propTypes from 'prop-types';

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

export default function Steps({ values }) {
    return (
        <>
            {values.step === 1 && (
                <Step1 />
            )}

            {values.step === 2 && (
                <Step2 />
            )}

            {values.step === 3 && (
                <Step3 />
            )}
        </>
    )
}

Steps.propTypes = {
    values: propTypes.object.isRequired
}