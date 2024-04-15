import propTypes from "prop-types";

import Button from "~/components/Form/Button";

export default function EmployersFooter({ values, prevHandle, nextHandle, isValid, dirty }) {
    return (
        <footer className='w-full grid grid-cols-2 pt-10 pb-5 gap-x-4'>
            {values.step > 1 && (
                <Button type="button" onClick={prevHandle}>Geri</Button>
            ) || <div />}
            {values.step !== values.lastStep && (
                <Button type="button" onClick={nextHandle} disabled={!isValid || !dirty}>İleri</Button>
            )}
            {values.step === values.lastStep && (
                <Button type="submit" disabled={!isValid || !dirty}>Gönder</Button>
            )}
        </footer>
    )
}

EmployersFooter.propTypes = {
    values: propTypes.object.isRequired,
    prevHandle: propTypes.func.isRequired,
    nextHandle: propTypes.func.isRequired,
    isValid: propTypes.bool.isRequired,
    dirty: propTypes.bool.isRequired
}