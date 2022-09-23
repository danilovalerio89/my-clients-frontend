import * as yup from "yup";

const contactSchema = yup.object().shape({
  name: yup.string(),
  email: yup.string().email("Esse email não é válido"),
  phone: yup.string(),
});

export default contactSchema;
