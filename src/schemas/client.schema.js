import * as yup from "yup";

const clientSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup
    .string()
    .required("Email obrigatório")
    .email("Esse email não é válido"),
  phone: yup.string().required("Telefone obrigatório"),
});

export default clientSchema;
