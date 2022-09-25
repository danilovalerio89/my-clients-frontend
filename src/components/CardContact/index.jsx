import {
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { useUser } from "../../providers/user";
import { api } from "../../services/api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import contactSchema from "../../schemas/contact.schema";

function ContactCard({ firstName, lastName, email, phone, id, attContacts }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(contactSchema) });

  const handleSubmitFunction = async (data) => {
    let newData = Object.entries(data).reduce(
      (acc, [key, value]) => (value == "" ? acc : ((acc[key] = value), acc)),
      {}
    );

    api
      .patch(`/contacts/${id}`, newData, {
        headers: {
          "Authorization": `Token ${user.token}`,
        },
      })
      .then((response) => {
        attContacts();
      })
      .catch((err) => console.log(err.response.data));
  };

  const deleteContact = async (id) => {
    await api
      .delete(`/contacts/${id}`, {
        headers: {
          "Authorization": `Token ${user.token}`,
        },
      })
      .then((response) => attContacts())
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Center py={3}>
        <Stack
          borderWidth="1px"
          borderRadius="lg"
          direction={{ base: "column", md: "row" }}
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"2xl"}
          padding={4}
        >
          <Stack
            flex={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={1}
            pt={2}
          >
            <Heading fontSize={"2xl"} fontFamily={"body"}>
              {firstName} {lastName}
            </Heading>
            <Text fontWeight={600} color={"gray.500"} size="sm" mb={4}>
              {email}
            </Text>
            <Text fontWeight={600} color={"gray.500"} size="sm" mb={4}>
              {phone}
            </Text>

            <Stack
              width={"100%"}
              mt={"2rem"}
              direction={"row"}
              padding={2}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Button
                id={id}
                flex={1}
                fontSize={"sm"}
                rounded={"full"}
                _hover={{
                  bg: "yellow.200",
                }}
                onClick={onOpen}
              >
                Editar
              </Button>
              <Button
                id={id}
                flex={1}
                fontSize={"sm"}
                rounded={"full"}
                bg={"red.400"}
                color={"white"}
                boxShadow={
                  "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                }
                _hover={{
                  bg: "red.700",
                }}
                onClick={() => deleteContact(id)}
              >
                Excluir
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Center>

      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Atualizar Contato</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={handleSubmit(handleSubmitFunction)}>
              <Flex marginBottom={4} justify={"center"}>
                <Text fontSize={30} color={"blue.600"}>
                  Adicionar Contato
                </Text>
              </Flex>
              <Stack spacing={2}>
                <FormControl>
                  <FormLabel color={"blackAlpha.700"}>Nome</FormLabel>
                  <Input
                    variant="filled"
                    placeholder="Nome"
                    {...register("firstName")}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel color={"blackAlpha.700"}>Sobrenome</FormLabel>
                  <Input
                    variant="filled"
                    placeholder="Sobrenome"
                    {...register("lastName")}
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
                  <FormLabel color={"blackAlpha.700"}>Telefone</FormLabel>
                  <Input
                    variant="filled"
                    placeholder="Telefone"
                    {...register("phone")}
                  />
                </FormControl>
              </Stack>
              <ModalFooter>
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

export default ContactCard;
