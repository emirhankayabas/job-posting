import { Form, Formik } from 'formik';
import Input from '~/components/Form/Input';

export default function Home() {
  return (
    <div className='max-w-7xl mx-auto h-full gap-y-4 pt-10'>
      <Formik>
        <Form className='grid grid-cols-2 gap-x-4'>
          <Input name='search' label='Search' placeholder='Search for job postings' />
          <Input name='location' label='Location' placeholder='Location' />
        </Form>
      </Formik>
    </div>
  )
}
