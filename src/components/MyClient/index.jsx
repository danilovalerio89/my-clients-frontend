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
  DivInfos,
  DivButtons,
  CloseDivs,
  DivContacts,
} from "./style";
import { useUser } from "../../providers/user";
import ModalAttClient from "../ModalClient";
import ModalContact from "../ModalContact";
import Contacts from "../Contacts";

function MyClients({ name, email, phone, id_client, contacts, attClients }) {
  const { user, setUser } = useUser();
  const [modal, setModal] = useState(false);
  const [modalContato, setModalContato] = useState(false);
  const [modalAttClient, setModalAttClient] = useState(false);

  function setAllFalse() {
    setModalContato(false);
    setModalAttClient(false);
    setModal(false);
  }

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
      .then((response) => response)
      .catch((err) => console.log(err));
  }

  return (
    <>
      <DivWrapper>
        <DivInfos>
          <h1>Nome: {name}</h1>
          <p>Telefone: {phone}</p>
          <p>Email: {email}</p>
        </DivInfos>
        <DivButton>
          <ButtonClient
            id_client={id_client}
            onClick={() => getClientModal(id_client)}
          >
            Mais
          </ButtonClient>
        </DivButton>
      </DivWrapper>
      {modal ? (
        <ModalWrapper>
          {modalAttClient ? (
            <ModalDiv>
              <CloseDivs>
                <button onClick={() => setAllFalse()}>X</button>
              </CloseDivs>
              <ModalAttClient
                setModalAttClient={setModalAttClient}
                id_client={id_client}
                attClients={attClients}
                setAllFalse={setAllFalse}
              />
            </ModalDiv>
          ) : modalContato ? (
            <ModalDiv>
              <CloseDivs>
                <button onClick={() => setAllFalse()}>X</button>
              </CloseDivs>
              <ModalContact
                setModalContato={setModalContato}
                id_client={id_client}
                attClients={attClients}
                setAllFalse={setAllFalse}
              />
            </ModalDiv>
          ) : (
            <ModalDiv>
              <CloseDivs>
                <button onClick={() => setAllFalse()}>X</button>
              </CloseDivs>
              <HeaderDivModal>
                <h1>Nome: {name}</h1>
              </HeaderDivModal>
              <DivModalBasicInfos>
                <p>Telefone: {phone}</p>
                <p>Email: {email}</p>
                <DivContacts>
                  <p>Contatos:</p>
                  {contacts.length > 0 ? (
                    contacts.map((contact) => (
                      <Contacts
                        key={contact.id}
                        name={contact.name}
                        email={contact.email}
                        phone={contact.phone}
                      />
                    ))
                  ) : (
                    <p>Não possui contatos</p>
                  )}
                </DivContacts>
              </DivModalBasicInfos>
              <DivButtons>
                <ButtonClient delete onClick={() => deleteClient(id_client)}>
                  Excluir
                </ButtonClient>
                <ButtonClient update onClick={() => setModalAttClient(true)}>
                  Atualizar
                </ButtonClient>
                <ButtonClient onClick={() => setModalContato(true)}>
                  Adicionar Contato
                </ButtonClient>
              </DivButtons>
            </ModalDiv>
          )}
        </ModalWrapper>
      ) : null}
    </>
  );
}

export default MyClients;
