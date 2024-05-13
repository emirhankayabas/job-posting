import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { getNewCompany } from "~/services";
import { companySetupValidation } from "~/validations";
import useAuth from "~/hooks/useAuth";
import useCompany from "~/hooks/useCompany";

import Input from "~/components/Form/Input";
import Button from "~/components/Form/Button";
import Select from "~/components/Form/Select";
import Text from "~/components/Text";

export default function CompanySetupForm() {
    const { user, update } = useAuth();
    const { addCompany } = useCompany();
    const navigate = useNavigate();

    const companyCountOptions = (["1-10", "11-50", "51-100", "101-500", "501-1000", "1000+"])
    const companyManagerOptions = (["Evet", "Hayır"])

    const initialValues = {
        company_name: "",
        company_count: "",
        company_username: "",
        company_manager: "",
        company_phone: "",
    }

    const onSubmit = (values) => {
        const data = {
            ...values,
            user_id: user.user_id,
            user_email: user.user_email
        }

        getNewCompany(data).then((response) => {
            if (response.status == "OK") {
                update({ company_id: response.data._id });
                addCompany(response.data);
                navigate("/employers/posting", { replace: true });
            }
        });
    }

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={companySetupValidation}>
            {({ isValid, dirty }) => {
                return (
                    <Form className="flex flex-col gap-y-8">
                        <Input name="company_name" label="Şirketinizin adı *" />
                        <Select name="company_count" label="Şirketinizdeki çalışan sayısı" options={companyCountOptions} />
                        <div>
                            <Input name="company_username" label="Adınız ve soyadınız *" />
                            <div className="mt-1"><Text variant="small">İşe alınan adaylar sizin sorumluluğunuzda çalışacaktır.</Text></div>
                        </div>
                        <Select name="company_manager" label="İşe alım müdürü müsünüz?" options={companyManagerOptions} />
                        <div>
                            <Input name="company_phone" type="number" label="Telefon numaranız" />
                            <div className="mt-1"><Text variant="small">Hesap yönetimi konusunda iletişim kurmak için. İş arayanlar göremez.</Text></div>
                        </div>
                        <div className="grid grid-cols-2 mt-8">
                            <div></div>
                            <Button type="submit" disabled={!isValid || !dirty}>Gönder</Button>
                        </div>
                    </Form>
                )
            }}
        </Formik>
    )
}
