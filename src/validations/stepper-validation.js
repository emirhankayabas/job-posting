import * as Yup from "yup";

export const stepperValidation = Yup.object().shape({
  // Step 1
  position_name: Yup.string().when("step", {
    is: 1,
    then: (schema) => schema.required("Pozisyon adı ekleyin."),
  }),
  position_count: Yup.string().when("step", {
    is: 1,
    then: (schema) => schema.required("Bir seçim yapın."),
  }),
  position_location: Yup.string().when("step", {
    is: 1,
    then: (schema) => schema.required("Konum ekleyin."),
  }),

  // Step 2
  position_types: Yup.string().when("step", {
    is: 2,
    then: (schema) => schema.required("Bir seçim yapın."),
  }),
  position_salary: Yup.string().when("step", {
    is: 2,
    then: (schema) => schema.default(),
  }),

  // Step 3
  position_description: Yup.string().when("step", {
    is: 3,
    then: (schema) =>
      schema
        .required("Açıklama ekleyin.")
        .trim()
        .min(10, "Açıklama en az 10 karakter olmalıdır."),
  }),
});
