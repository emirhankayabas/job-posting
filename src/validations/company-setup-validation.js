import * as Yup from "yup";

export const companySetupValidation = Yup.object().shape({
  company_name: Yup.string().required("Şirket adı girin."),
  company_count: Yup.string(),
  company_username: Yup.string().required("Adınızı ve soyadınızı girin."),
  company_manager: Yup.string(),
  company_phone: Yup.string(),
});
