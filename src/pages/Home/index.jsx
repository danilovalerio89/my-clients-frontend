import { useEffect, useState } from "react";
import MyClients from "../../components/MyClient";
import {
  MainStyled,
  DivStyled,
  DivImg,
  NavStyled,
  SectionWrapper,
  ButtonNav,
} from "./style";
import { useUser } from "../../providers/user";
import { myClientsAPI } from "../../services/api";
import { HiUser, HiUsers, HiUserAdd, HiLogout } from "react-icons/hi";
import { useHistory } from "react-router-dom";
import Client from "../../components/Client";

function Home() {
  const history = useHistory();
  const [clients, setClients] = useState([]);
  const [myClients, setMyClients] = useState(true);
  const [editClient, setEditClient] = useState(false);
  const { user, setUser } = useUser();

  useEffect(() => {
    let myToken = localStorage.getItem("myClientToken");
    setUser({ token: myToken });
  }, []);

  useEffect(() => {
    getClients();
  }, [user]);

  async function getClients() {
    if (user.token) {
      await myClientsAPI
        .get("/clients", {
          headers: {
            "Authorization": `Token ${user.token}`,
          },
        })
        .then((response) => setClients(response.data))
        .catch((err) => console.log(err));
    }
  }

  function logout() {
    localStorage.clear();
    history.push("/");
  }

  function attClients() {
    setEditClient(false);
    setMyClients(true);
    getClients();
  }

  return (
    <MainStyled>
      <DivStyled>
        <DivImg>
          <HiUser size={60}></HiUser>
        </DivImg>
        <NavStyled>
          <ButtonNav onClick={() => attClients()}>
            <HiUsers size={15} />
            Meus Clientes
          </ButtonNav>

          <ButtonNav onClick={() => setMyClients(false)}>
            <HiUserAdd size={15} />
            Adicionar
          </ButtonNav>
          <ButtonNav onClick={() => logout()}>
            <HiLogout size={15} />
            Sair
          </ButtonNav>
        </NavStyled>
      </DivStyled>

      {myClients ? (
        <SectionWrapper>
          {clients.length > 0 ? (
            clients.map((client) => (
              <MyClients
                key={client.id}
                name={client.name}
                phone={client.phone}
                email={client.email}
                id_client={client.id}
                attClients={attClients}
              />
            ))
          ) : (
            <h1>Não tem cliente</h1>
          )}
        </SectionWrapper>
      ) : (
        <Client attClients={attClients} />
      )}
    </MainStyled>
  );
}

export default Home;
