import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";

import { stepperValidation } from "~/validations";
import { getNewJobPostings } from "~/services";

import EmployersHeadline from "../headline";
import Steps from "../steps";
import EmployersFooter from "../footer";

import 'react-quill/dist/quill.snow.css';
import useAuth from "~/hooks/useAuth";

export default function EmployersForm() {
    const { user } = useAuth();
    const navigate = useNavigate();
    const width = localStorage.getItem("width") || "max-w-3xl";

    const initialValues = {
        step: 1,
        lastStep: 3,

        // Step 1
        position_name: "",
        position_count: 0,
        position_location: "",

        // Step 2
        position_types: "",
        position_salary: "",

        // Step 3
        position_description: "",
    };
    const onSubmit = (values) => {
        const data = {
            ...values,
            company_id: user.company_id,
        }

        getNewJobPostings(data).then(response => {
            if (response.status == "OK") {
                navigate("/employers", { replace: true });
            }
        });
    };
    return (
        <div>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={stepperValidation}>
                {({ values, setFieldValue, isValid, dirty }) => {
                    const prevHandle = () => {
                        setFieldValue('step', values.step - 1);
                    }
                    const nextHandle = () => {
                        setFieldValue('step', values.step + 1);
                    }

                    return (
                        <Form className={`${width} mx-auto pt-10`}>
                            <EmployersHeadline values={values} />
                            <Steps values={values} />
                            <EmployersFooter values={values} prevHandle={prevHandle} nextHandle={nextHandle} isValid={isValid} dirty={dirty} />
                        </Form>
                    )
                }}
            </Formik>
        </div>
    )
}
