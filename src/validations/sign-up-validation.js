import * as Yup from "yup";

export const signUpValidation = Yup.object().shape({
  user_name: Yup.string().required("Adınzı girin."),
  user_surname: Yup.string().required("Soyadınızı girin."),
  user_email: Yup.string()
    .email("Geçerli bir e-posta adresi girin.")
    .required("E-posta adresi giri."),
  user_password: Yup.string()
    .required("Şifrenizi girin.")
    .min(6, "Şifre en az 6 karakter olmalıdır."),
});
