import { useState } from "react";
import { DivWrapper, DivButton, ButtonClient } from "./style";

function MyClients({ name, email, phone }) {
  const [contact, setContact] = useState(false);

  return (
    <DivWrapper>
      <h1>Nome: {name}</h1>
      <p>Telefone: {phone}</p>
      <p>Email: {email}</p>
      <DivButton>
        <ButtonClient update>Editar</ButtonClient>
        <ButtonClient delete>Excluir</ButtonClient>
        <ButtonClient onClick={() => setContact(!contact)}>
          Contatos
        </ButtonClient>
      </DivButton>
    </DivWrapper>
  );
}

export default MyClients;
