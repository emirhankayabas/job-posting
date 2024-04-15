
import { useField, ErrorMessage } from 'formik';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default function Select({ label, options, ...props }) {
    const [field, meta] = useField(props);

    return (
        <div>
            <label
                htmlFor={field.name}
                className={classNames({
                    "font-medium text-white text-opacity-90 mb-1 block": true,
                    "!text-red-500": meta.touched && meta.error
                })}
            >
                {label}
            </label>
            <select
                {...field}
                {...props}
                className={classNames({
                    "min-h-[42px] outline-none bg-transparent flex items-center w-full px-2 py-2 text-sm leading-6 text-left transition duration-150 ease-in-out border border-gray-600 rounded-lg group pointer": true,
                    "!border-red-500 focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50 text-red-500": meta.touched && meta.error,
                    "focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 hover:border-gray-500": !meta.error || !meta.touched
                })}
            >
                <option value='' className='bg-black text-white' selected disabled>Seçiniz</option>
                {options.map((option) => (
                    <option className='bg-black text-white' key={option} value={option}>{option}</option>
                ))}
            </select >
            <ErrorMessage name={field.name} component='small' className='text-red-500 text-xs mt-1 block' />
        </div>
    )
}

Select.propTypes = {
    label: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
}
