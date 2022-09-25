import {
  Avatar,
  AvatarGroup,
  Box,
  Text,
  Flex,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Stack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import ContactCard from "../../components/CardContact";
import CreateContact from "../../components/CreateContact";
import { useUser } from "../../providers/user";
import { api } from "../../services/api";
import contactSchema from "../../schemas/contact.schema";

function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const history = useHistory();

  const { user, setUser } = useUser();
  const [contacts, setContacts] = useState();
  const [editUser, setEditUser] = useState(false);

  const [addContact, setAddContact] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(contactSchema) });

  useEffect(() => {
    let token = localStorage.getItem("userToken");
    setUser({ token: token });
  }, []);

  const logOut = () => {
    localStorage.clear();
    history.push("/");
  };

  useEffect(() => {
    getContacts();
  }, [user]);

  const attContacts = () => {
    setAddContact(false);
    getContacts();
  };

  const getContacts = async () => {
    if (user.token) {
      await api
        .get("/user/profile", {
          headers: {
            "Authorization": `Token ${user.token}`,
          },
        })
        .then((response) => setContacts(response.data[0]))
        .catch((err) => console.log(err));
    }
  };

  const handleSubmitFunction = async (data) => {
    let newData = Object.entries(data).reduce(
      (acc, [key, value]) => (value == "" ? acc : ((acc[key] = value), acc)),
      {}
    );

    api
      .patch(`/user/${contacts.id}`, newData, {
        headers: {
          "Authorization": `Token ${user.token}`,
        },
      })
      .then((response) => {
        attContacts();
        getContacts();
      })
      .catch((err) => console.log(err.response.data));
  };

  const deleteUser = async () => {
    api
      .delete(`/user/${contacts.id}`, {
        headers: {
          "Authorization": `Token ${user.token}`,
        },
      })
      .then((response) => {
        onClose();
        logOut();
      })
      .catch((err) => console.log(err.response.data));
  };

  return (
    <>
      <Flex backgroundColor={"blue.100"} align={"center"}>
        <AvatarGroup
          spacing="1rem"
          padding={5}
          onClick={onOpen}
          cursor={"pointer"}
        >
          <Avatar bg="teal.500" />
        </AvatarGroup>
        <Flex flexGrow={1} align={"center"} justify={"space-around"}>
          <Text marginLeft={25}>{contacts?.name}</Text>
          <Text marginLeft={25}>{contacts?.email}</Text>
          <Button onClick={() => logOut()}>Sair</Button>
        </Flex>
      </Flex>

      <Flex justify={"space-evenly"} padding={5} backgroundColor={"blue.50"}>
        <Button
          backgroundColor={"blue.600"}
          color={"blackAlpha.900"}
          onClick={() => attContacts()}
        >
          Meus Contatos
        </Button>
        <Button
          backgroundColor={"green.600"}
          color={"blackAlpha.900"}
          onClick={() => setAddContact(true)}
        >
          Adicionar Contato
        </Button>
      </Flex>
      {addContact ? (
        <CreateContact attContacts={attContacts} />
      ) : (
        <Flex justify={"space-evenly"}>
          {contacts?.contacts.length == 0 ? (
            <Text>Você ainda não possui contatos</Text>
          ) : (
            contacts?.contacts.map((contact) => (
              <ContactCard
                key={contact.id}
                firstName={contact.firstName}
                lastName={contact.lastName}
                email={contact.email}
                phone={contact.phone}
                id={contact.id}
                attContacts={attContacts}
              />
            ))
          )}
        </Flex>
      )}
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={handleSubmit(handleSubmitFunction)}>
              <Flex marginBottom={4} justify={"center"}>
                <Text fontSize={30} color={"blue.600"}>
                  Editar Usuário
                </Text>
              </Flex>
              <Stack spacing={4}>
                <FormControl>
                  <FormLabel color={"blackAlpha.700"}>Name</FormLabel>
                  <Input
                    variant="filled"
                    placeholder="Name"
                    {...register("name")}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel color={"blackAlpha.700"}>Email</FormLabel>
                  <Input
                    variant="filled"
                    placeholder="Email"
                    {...register("email")}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel color={"blackAlpha.700"}>Password</FormLabel>
                  <InputGroup size="md" marginBottom={5}>
                    <Input
                      variant="filled"
                      pr="4.5rem"
                      type={"password"}
                      placeholder="Enter password"
                      {...register("password")}
                    />
                  </InputGroup>
                </FormControl>
              </Stack>
              <ModalFooter justifyContent={"space-between"}>
                <Button background={"red.500"} onClick={() => deleteUser()}>
                  Excluir Usuário
                </Button>
                <Button
                  colorScheme="blue"
                  mr={3}
                  type="submit"
                  onClick={onClose}
                >
                  Salvar
                </Button>
                <Button onClick={onClose}>Voltar</Button>
              </ModalFooter>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Home;
