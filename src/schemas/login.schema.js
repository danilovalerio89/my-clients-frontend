import * as yup from "yup";

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email obrigatório")
    .email("Esse email não é válido"),
  password: yup.string().required("Password obrigatório"),
  // .matches(
  //   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{6,}$/,
  //   "Letra minuscula, maiuscula, character especial e numero"
  // ),
});

export default loginSchema;
