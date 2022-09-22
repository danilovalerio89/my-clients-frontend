import { useState } from "react";
import { myClientsAPI } from "../../services/api";
import { DivWrapper, DivButton, ButtonClient } from "./style";
import { useUser } from "../../providers/user";

function MyClients({ name, email, phone, id_client, attClients }) {
  const { user, setUser } = useUser();
  const [contact, setContact] = useState(false);

  async function deleteClient(id_client) {
    await myClientsAPI
      .delete(`/clients/${id_client}`, {
        headers: {
          "Authorization": `Token ${user.token}`,
        },
      })
      .then((response) => attClients())
      .catch((err) => console.log(err));
  }

  return (
    <DivWrapper>
      <h1>Nome: {name}</h1>
      <p>Telefone: {phone}</p>
      <p>Email: {email}</p>
      <DivButton>
        <ButtonClient
          id_client={id_client}
          update
          onClick={() => console.log(id_client)}
        >
          Editar
        </ButtonClient>
        <ButtonClient
          id_client={id_client}
          delete
          onClick={() => deleteClient(id_client)}
        >
          Excluir
        </ButtonClient>
        <ButtonClient
          id_client={id_client}
          onClick={() => setContact(!contact)}
        >
          Contatos
        </ButtonClient>
      </DivButton>
    </DivWrapper>
  );
}

export default MyClients;
