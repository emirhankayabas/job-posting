import { Field, Form, Formik } from "formik";
import uniqid from 'uniqid';

import useSearch from "~/hooks/useSearch";
import { getSearchedJobPostings } from "~/services";
import { IoSearchOutline, IoLocationOutline } from "react-icons/io5";
import useJob from "~/hooks/useJob";

export default function JobSearch() {
    const { addSearchHistory } = useSearch();
    const { setJobList, setJobDetails } = useJob();

    const initialValues = {
        position_name: "",
        position_location: "",
    }

    const handleSubmit = (values) => {
        getSearchedJobPostings(values).then((response) => {
            if (response.status == "OK") {
                setJobList(response.post);
                addSearchHistory({
                    id: uniqid(),
                    position_name: values.position_name,
                    position_location: values.position_location,
                });
                if (response.post.length > 0) {
                    setJobDetails(response.post[0]);
                }
            }
        })
    }

    return (
        <div className="max-w-3xl mx-auto border border-neutral-700 rounded-md my-10 overflow-hidden">
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form className="flex justify-center items-center bg-neutral-950">
                    <div className="flex justify-center w-full">
                        <div className="w-full flex items-center">
                            <span className="w-16 h-16 flex items-center justify-center"><IoSearchOutline size={22} /></span>
                            <Field type="text" name="position_name" className="w-full h-full block rounded-md bg-transparent outline-none px-2 text-white placeholder:text-white placeholder:text-opacity-65 transition-colors" placeholder="Pozisyon adı veya şirket adı" />
                        </div>

                        <div className="w-0.5 h-16 bg-neutral-700"></div>

                        <div className="w-full flex items-center">
                            <span className="w-16 h-16 flex items-center justify-center"><IoLocationOutline size={22} /></span>
                            <Field type="text" name="position_location" className="w-full h-full block rounded-md bg-transparent outline-none px-2 text-white placeholder:text-white placeholder:text-opacity-65 transition-colors" placeholder="İl, ilçe veya uzaktan çalışma" />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-32 h-12 mx-2 text-white rounded-md font-semibold bg-zinc-800 hover:bg-zinc-700 transition-colors"
                    >
                        Ara
                    </button>
                </Form>
            </Formik>
        </div>
    )
}
