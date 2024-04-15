import propTypes from 'prop-types';
import { ErrorMessage, Field } from "formik";
import ReactQuill from 'react-quill';

export default function TextEditor({ name }) {

    const toolbarOptions = [
        [{ 'font': [] }],
        [{ 'size': ['small', false, 'large', 'huge'] }],
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        ['link', 'image'],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'direction': 'rtl' }],
        [{ 'align': [] }],

        ['clean']
    ];

    return (
        <>
            <Field name={name}>
                {({ field }) =>
                    <ReactQuill
                        value={field.value}
                        onChange={field.onChange(field.name)}
                        modules={{ toolbar: toolbarOptions }}
                        theme='snow'
                        className='text-white'
                    />}
            </Field>
            <ErrorMessage name={name} component='small' className='text-red-500 text-xs mt-1 block' />
        </>
    )
}

TextEditor.propTypes = {
    name: propTypes.string.isRequired
}