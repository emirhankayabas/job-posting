import propTypes from 'prop-types';

export default function EmployersHeadline({ values }) {
    return (
        <header>
            <div>
                <h1 className="text-white text-opacity-90 text-2xl font-semibold">İş ilanı oluştur</h1>
                <p className="text-white text-opacity-75 pt-2">İş ilanınızı oluşturarak, işe alım sürecinizi başlatın.</p>
            </div>
            <div className="pt-4 pb-6">
                Adım {values.step} / {values.lastStep}
            </div>
        </header>
    )
}

EmployersHeadline.propTypes = {
    values: propTypes.object.isRequired
}