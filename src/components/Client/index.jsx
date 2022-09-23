import Input from "../../components/Input";
import {
  FormStyled,
  ButtonStyled,
  MainStyled,
  DivStyled,
  FormWrapperRegister,
} from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import clientSchema from "../../schemas/client.schema";
import { useUser } from "../../providers/user";
import { myClientsAPI } from "../../services/api";

function Client({ attClients }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(clientSchema) });

  const { user } = useUser();

  async function handleSubmitFunction(data) {
    await myClientsAPI
      .post("/clients", data, {
        headers: {
          "Authorization": `Token ${user.token}`,
        },
      })
      .then((response) => attClients())
      .catch((err) => console.log(err));
  }

  return (
    <MainStyled>
      <FormWrapperRegister>
        <DivStyled>
          <h1>Adicionar</h1>
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
          <Input
            label={"Telefone *"}
            name={"phone"}
            register={register}
            errors={errors.phone}
          />
          <ButtonStyled type="submit"> Adicionar</ButtonStyled>
        </FormStyled>
      </FormWrapperRegister>
    </MainStyled>
  );
}

export default Client;
