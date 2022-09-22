import Input from "../../components/Input";
import {
  FormStyled,
  PasswordDivLoginStyled,
  ButtonStyled,
  SpanStyled,
  MainStyled,
  DivStyled,
} from "./style";
import { FormWrapperSection } from "../../components/FormWrapper/style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import loginSchema from "../../schemas/login.schema";

function Login({ newRegister, setNewRegister }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  function handleSubmitFunction(data) {
    setNewRegister([data]);
  }

  return (
    <MainStyled>
      <FormWrapperSection>
        <DivStyled>
          <h1>Login</h1>
        </DivStyled>
        <FormStyled onSubmit={handleSubmit(handleSubmitFunction)}>
          <Input
            label={"Endereço de Email *"}
            type={"email"}
            name={"email"}
            register={register}
            errors={errors.email}
          />

          <PasswordDivLoginStyled>
            <Input
              label={"Senha *"}
              type={"password"}
              name={"password"}
              register={register}
              errors={errors.password}
            />
          </PasswordDivLoginStyled>

          <ButtonStyled type="submit">Entrar</ButtonStyled>

          <SpanStyled>Ainda não possui cadastro?</SpanStyled>
        </FormStyled>
      </FormWrapperSection>
    </MainStyled>
  );
}

export default Login;
