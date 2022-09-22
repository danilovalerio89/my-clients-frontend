import * as yup from "yup";

const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required("Nome completo obrigatório")
    .min(5, "Minimo 5 characters")
    .max(18, "Máximo 18 characters"),
  email: yup
    .string()
    .required("Email obrigatório")
    .email("Esse email não é válido"),
  password: yup
    .string()
    .required("Password obrigatório")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{6,}$/,
      "Letra minuscula, maiuscula, character especial e numero"
    ),
});

export default registerSchema;
