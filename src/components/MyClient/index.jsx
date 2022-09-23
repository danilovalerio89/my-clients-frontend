import { useState } from "react";
import { myClientsAPI } from "../../services/api";
import {
  DivWrapper,
  DivButton,
  ButtonClient,
  ModalWrapper,
  ModalDiv,
  HeaderDivModal,
  DivModalBasicInfos,
} from "./style";
import { useUser } from "../../providers/user";
import ModalAttClient from "../ModalClient";
import ModalContact from "../ModalContact";

function MyClients({ name, email, phone, id_client, contacts, attClients }) {
  const { user, setUser } = useUser();
  const [modal, setModal] = useState(false);
  const [modalContato, setModalContato] = useState(false);
  const [modalAttClient, setModalAttClient] = useState(false);
  const [client, setClient] = useState();

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

  async function getClientModal(id_client) {
    setModal(true);

    await myClientsAPI
      .get(`/clients/${id_client}`, {
        headers: {
          "Authorization": `Token ${user.token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        console.log(contacts);
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <DivWrapper>
        <h1>Nome: {name}</h1>
        <p>Telefone: {phone}</p>
        <p>Email: {email}</p>
        <DivButton>
          <ButtonClient
            id_client={id_client}
            onClick={() => getClientModal(id_client)}
          >
            Ver
          </ButtonClient>
        </DivButton>
      </DivWrapper>
      {modal ? (
        <ModalWrapper>
          {modalAttClient ? (
            <ModalDiv>
              <ModalAttClient
                setModalAttClient={setModalAttClient}
                id_client={id_client}
              />
            </ModalDiv>
          ) : modalContato ? (
            <ModalDiv>
              <ModalContact
                setModalContato={setModalContato}
                id_client={id_client}
              />
            </ModalDiv>
          ) : (
            <ModalDiv>
              <HeaderDivModal>
                <h1>Nome: {name}</h1>
              </HeaderDivModal>
              <DivModalBasicInfos>
                <p>Telefone: {phone}</p>
                <p>Email: {email}</p>
                <p>Contacts: {contacts.length}</p>
              </DivModalBasicInfos>
              <button onClick={() => setModal(false)}>DELETAR</button>
              <button onClick={() => setModalAttClient(true)}>ATUALIZAR</button>
              <button onClick={() => setModalContato(true)}>
                ADICIONAR CONTATO
              </button>
            </ModalDiv>
          )}
        </ModalWrapper>
      ) : null}
    </>
  );
}

export default MyClients;
