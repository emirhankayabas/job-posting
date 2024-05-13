import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { signInValidation } from "~/validations";
import { emailLogin } from "~/services";

import Button from "~/components/Form/Button";
import Input from "~/components/Form/Input";
import useAuth from "~/hooks/useAuth";

export default function SignInForm() {
    const navigate = useNavigate();
    const { login } = useAuth();

    const initialValues = {
        user_email: "",
        user_password: "",
    }

    const onSubmit = (values) => {
        emailLogin(values)
            .then((response) => {
                if (response.status == "OK") {
                    login(response.user);
                    navigate("/", { replace: true });
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={signInValidation}>
            {({ isValid, dirty }) => {
                return (
                    <Form className="flex flex-col gap-y-4">
                        <Input name="user_email" label="E-posta" />
                        <Input name="user_password" label="Şifre" type="password" />
                        <Button type="submit" disabled={!isValid || !dirty}>Gönder</Button>
                    </Form>
                )
            }}
        </Formik>
    )
}
