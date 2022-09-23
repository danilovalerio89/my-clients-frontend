import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormStyled, DivStyled, DivButtons } from "./style";
import Input from "../Input";
import contactSchema from "../../schemas/contact.schema";

function ModalContact({ setModalContato, id_client }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(contactSchema) });

  async function handleSubmitFunction(data) {
    let newData = Object.entries(data).reduce(
      (acc, [key, value]) => (value == "" ? acc : ((acc[key] = value), acc)),
      {}
    );

    console.log(newData);
  }
  return (
    <>
      <DivStyled>
        <h1>Adicionar Contato</h1>
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
          <button type="submit" onClick={() => console.log("Adicionar")}>
            Adicionar
          </button>
          <button onClick={() => setModalContato(false)}>Voltar</button>
        </DivButtons>
      </FormStyled>
    </>
  );
}

export default ModalContact;
