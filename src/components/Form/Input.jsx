import { useField, ErrorMessage } from 'formik';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default function Input({ label, ...props }) {
    const [field, meta] = useField(props);

    return (
        <div className='w-full'>
            <label
                htmlFor={field.name}
                className={classNames({
                    "font-medium text-white text-opacity-90 mb-1 block": true,
                    "!text-red-500": meta.touched && meta.error
                })}
            >
                {label}
            </label>
            <input
                {...field}
                {...props}
                id={field.name}
                className={classNames({
                    "outline-none bg-transparent flex items-center w-full px-2 py-2 text-sm leading-6 text-left transition duration-150 ease-in-out border border-gray-600 rounded-lg group pointer": true,
                    "!border-red-500 focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50 text-red-500": meta.touched && meta.error,
                    "focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 hover:border-gray-500": !meta.error || !meta.touched
                })}
            />
            <ErrorMessage name={field.name} component='small' className='text-red-500 text-xs mt-1 block' />
        </div>
    )
}

Input.propTypes = {
    label: PropTypes.string.isRequired,
}
