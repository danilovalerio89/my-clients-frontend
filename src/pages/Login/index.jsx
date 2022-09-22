import Input from "../../components/Input";
import {
  FormStyled,
  PasswordDivLoginStyled,
  ButtonStyled,
  SpanStyled,
  MainStyled,
  DivStyled,
  NavLink,
} from "./style";
import { FormWrapperSection } from "../../components/FormWrapper/style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import loginSchema from "../../schemas/login.schema";
import { myClientsAPI } from "../../services/api";
import { useHistory } from "react-router-dom";
import { useUser } from "../../providers/user";

function Login() {
  const history = useHistory();

  const { setUser } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  async function handleSubmitFunction(data) {
    await myClientsAPI
      .post("/login", data)
      .then((response) => {
        localStorage.setItem("myClientToken", response.data.token);
        history.push("/home");
      })
      .catch((err) => console.log(err.response.data));
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

          <SpanStyled>
            <NavLink to="/register">Ainda não possui cadastro?</NavLink>
          </SpanStyled>
        </FormStyled>
      </FormWrapperSection>
    </MainStyled>
  );
}

export default Login;
