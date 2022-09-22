import { useEffect, useState } from "react";
import MyClients from "../../components/MyClients";
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

function Home() {
  const history = useHistory();
  const [clients, setClients] = useState([]);
  const { user, setUser } = useUser();

  useEffect(() => {
    let myToken = localStorage.getItem("myClientToken");
    setUser({ token: myToken });
  }, []);

  useEffect(() => {
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
    getClients();
  }, [user]);

  function logout() {
    localStorage.clear();
    history.push("/");
  }

  return (
    <MainStyled>
      <DivStyled>
        <DivImg>
          <HiUser size={60}></HiUser>
        </DivImg>
        <NavStyled>
          <ButtonNav>
            <HiUsers size={15} />
            Meus Clientes
          </ButtonNav>

          <ButtonNav>
            <HiUserAdd size={15} />
            Adicionar
          </ButtonNav>
          <ButtonNav onClick={() => logout()}>
            <HiLogout size={15} />
            Sair
          </ButtonNav>
        </NavStyled>
      </DivStyled>

      <SectionWrapper>
        {clients.length > 0 ? (
          clients.map((client) => (
            <MyClients
              key={client.id}
              name={client.name}
              phone={client.phone}
              email={client.email}
            />
          ))
        ) : (
          <h1>Não tem cliente</h1>
        )}
      </SectionWrapper>
    </MainStyled>
  );
}

export default Home;
