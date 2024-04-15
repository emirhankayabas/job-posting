import * as Yup from "yup";

export const signInValidation = Yup.object().shape({
  user_email: Yup.string()
    .email("Geçerli bir e-posta adresi girin.")
    .required("E-posta adresi girin."),
  user_password: Yup.string().required("Şifrenizi girin."),
});
