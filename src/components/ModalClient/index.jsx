import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import attClientSchema from "../../schemas/attClient.schema";
import { FormStyled, DivStyled, DivButtons } from "./style";
import Input from "../Input";
import { useUser } from "../../providers/user";
import { myClientsAPI } from "../../services/api";

function ModalAttClient({
  setModalAttClient,
  id_client,
  attClients,
  setAllFalse,
}) {
  const { user } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(attClientSchema) });

  async function handleSubmitFunction(data) {
    let newData = Object.entries(data).reduce(
      (acc, [key, value]) => (value == "" ? acc : ((acc[key] = value), acc)),
      {}
    );

    await myClientsAPI
      .patch(`/clients/${id_client}`, newData, {
        headers: {
          "Authorization": `Token ${user.token}`,
        },
      })
      .then((response) => {
        attClients();
        setAllFalse();
      })
      .catch((err) => console.log(err.response));
  }
  return (
    <>
      <DivStyled>
        <h1>Atualizar Cliente</h1>
      </DivStyled>
      <FormStyled onSubmit={handleSubmit(handleSubmitFunction)}>
        <Input
          label={"Nome"}
          name={"name"}
          register={register}
          errors={errors.name}
        />
        <Input
          label={"Email"}
          name={"email"}
          register={register}
          errors={errors.email}
        />
        <Input
          label={"Telefone"}
          name={"phone"}
          register={register}
          errors={errors.phone}
        />
        <DivButtons>
          <button type="submit">Atualizar</button>
        </DivButtons>
      </FormStyled>
    </>
  );
}

export default ModalAttClient;
