import Input from "../../components/Input";
import {
  FormStyled,
  PasswordDivStyled,
  CheckboxDivStyled,
  ButtonStyled,
  SpanStyled,
  SpanError,
  MainStyled,
  DivStyled,
} from "./style";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function Login({ newRegister, setNewRegister }) {
  const schema = yup.object().shape({
    username: yup
      .string()
      .required("Username obrigatório")
      .min(5, "Minimo 5 characters"),
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
    confirmedEmail: yup.string().oneOf([yup.ref("email")], "Email não confere"),
    confirmedPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Password não confere"),
    terms: yup.boolean().isTrue("Precisa aceitar os termos"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function handleSubmitFunction(data) {
    setNewRegister([data]);
  }

  return (
    <MainStyled>
      <section>
        <DivStyled>
          <h1>Register</h1>
        </DivStyled>
        <FormStyled onSubmit={handleSubmit(handleSubmitFunction)}>
          <Input
            label={"Nome de usuário *"}
            name={"username"}
            register={register}
            errors={errors.username}
          />
          <Input
            label={"Nome completo *"}
            name={"name"}
            register={register}
            errors={errors.name}
          />
          <Input
            label={"Endereço de Email *"}
            type={"email"}
            name={"email"}
            register={register}
            errors={errors.email}
          />
          <Input
            label={"Confirme seu Email *"}
            type={"email"}
            name={"confirmedEmail"}
            register={register}
            errors={errors.confirmedEmail}
          />
          <PasswordDivStyled>
            <Input
              label={"Senha *"}
              type={"password"}
              name={"password"}
              register={register}
              errors={errors.password}
            />
            <Input
              label={"Confirme sua senha *"}
              type={"password"}
              name={"confirmedPassword"}
              register={register}
              errors={errors.confirmedPassword}
            />
          </PasswordDivStyled>

          <CheckboxDivStyled>
            <input type="checkbox" {...register("terms")} />
            <span>Eu aceito os termos de uso da aplicação</span>
            {errors.terms && <SpanError>{errors.terms.message}</SpanError>}
          </CheckboxDivStyled>

          <ButtonStyled type="submit">Cadastrar</ButtonStyled>
          <SpanStyled>Já possui uma conta?</SpanStyled>
        </FormStyled>
      </section>
    </MainStyled>
  );
}

export default Login;
