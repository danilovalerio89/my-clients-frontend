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
import { myClientsAPI } from "../../services/api";
import { useHistory } from "react-router-dom";

function Register() {
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema) });

  async function handleSubmitFunction(data) {
    await myClientsAPI
      .post("/user", data)
      .then((response) => history.push("/"))
      .catch((err) => console.log(err.response.data));
  }

  return (
    <MainStyled>
      <FormWrapperRegister>
        <DivStyled>
          <h1>Cadastro</h1>
        </DivStyled>
        <FormStyled onSubmit={handleSubmit(handleSubmitFunction)}>
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

export default Register;
