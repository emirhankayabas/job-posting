import { Form, Formik } from "formik";
import { emailRegister } from "~/services";
import { signUpValidation } from "~/validations";
import { useNavigate } from "react-router-dom";

import useAuth from "~/hooks/useAuth";
import Button from "~/components/Form/Button";
import Input from "~/components/Form/Input";

export default function SignUpForm() {
    const navigate = useNavigate();
    const { login } = useAuth();


    const initialValues = {
        user_name: "",
        user_surname: "",
        user_email: "",
        user_password: "",
    }

    const onSubmit = (values) => {
        emailRegister(values).then((response) => {
            if (response.status == "OK") {
                login(response.user);
                navigate("/employers", { replace: true });
            }
        })
    }

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={signUpValidation}>
            {({ isValid, dirty }) => {
                return (
                    <Form className="flex flex-col gap-y-4">
                        <div className="grid grid-cols-2 gap-x-4">
                            <Input name="user_name" label="Ad" />
                            <Input name="user_surname" label="Soyad" />
                        </div>
                        <Input name="user_email" label="E-posta" />
                        <Input name="user_password" label="Şifre" type="password" />
                        <Button type="submit" disabled={!isValid || !dirty}>Gönder</Button>
                    </Form>
                )
            }}
        </Formik>
    )
}
