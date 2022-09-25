import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useUser } from "../../providers/user";
import contactSchema from "../../schemas/contact.schema";
import { api } from "../../services/api";

function CreateContact({ attContacts }) {
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
      .post(`/contacts/`, newData, {
        headers: {
          "Authorization": `Token ${user.token}`,
        },
      })
      .then((response) => {
        attContacts();
      })
      .catch((err) => console.log(err.response.data));
  };
  return (
    <Flex justify={"center"}>
      <Flex border="1px solid #3182ce" borderRadius={5} padding={5}>
        <form onSubmit={handleSubmit(handleSubmitFunction)}>
          <Flex marginBottom={4} justify={"center"}>
            <Text fontSize={30} color={"blue.600"}>
              Adicionar Contato
            </Text>
          </Flex>
          <Stack spacing={2}>
            <FormControl isRequired>
              <FormLabel color={"blackAlpha.700"}>Nome</FormLabel>
              <Input
                variant="filled"
                placeholder="Nome"
                {...register("firstName")}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel color={"blackAlpha.700"}>Sobrenome</FormLabel>
              <Input
                variant="filled"
                placeholder="Sobrenome"
                {...register("lastName")}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel color={"blackAlpha.700"}>Email</FormLabel>
              <Input
                variant="filled"
                placeholder="Email"
                {...register("email")}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel color={"blackAlpha.700"}>Telefone</FormLabel>
              <Input
                variant="filled"
                placeholder="Telefone"
                {...register("phone")}
              />
            </FormControl>

            <Button colorScheme="blue" type="submit">
              Adicionar
            </Button>
          </Stack>
        </form>
      </Flex>
    </Flex>
  );
}

export default CreateContact;
