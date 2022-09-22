import Input from "../../components/Input";
import {
  FormStyled,
  PasswordDivStyled,
  ButtonStyled,
  SpanStyled,
  MainStyled,
  DivStyled,
  FormWrapperRegister,
  NavLink,
} from "./style";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import registerSchema from "../../schemas/register.schema";

function Login({ newRegister, setNewRegister }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema) });

  function handleSubmitFunction(data) {
    setNewRegister([data]);
  }

  return (
    <MainStyled>
      <FormWrapperRegister>
        <DivStyled>
          <h1>Cadastro</h1>
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
          </PasswordDivStyled>

          <ButtonStyled type="submit"> Cadastrar</ButtonStyled>
          <SpanStyled>
            <NavLink to="/">Já possui uma conta?</NavLink>
          </SpanStyled>
        </FormStyled>
      </FormWrapperRegister>
    </MainStyled>
  );
}

export default Login;
