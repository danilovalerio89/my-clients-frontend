import {
  Center,
  Stack,
  Input,
  FormControl,
  FormLabel,
  InputRightElement,
  Button,
  InputGroup,
  Text,
  Flex,
  Box,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import loginSchema from "../../schemas/login.schema";
import { api } from "../../services/api";

function Login() {
  const history = useHistory();

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  const handleSubmitFunction = async (data) => {
    let newData = Object.entries(data).reduce(
      (acc, [key, value]) => (value == "" ? acc : ((acc[key] = value), acc)),
      {}
    );

    api
      .post("/login", newData)
      .then((response) => {
        localStorage.setItem("userToken", response.data.token);
        history.push("/home");
      })
      .catch((err) => console.log(err.response.data));
  };

  return (
    <Center height="100vh">
      <Flex border="1px solid #3182ce" borderRadius={5} padding={5}>
        <form onSubmit={handleSubmit(handleSubmitFunction)}>
          <Flex marginBottom={4} justify={"center"}>
            <Text fontSize={30} color={"blue.600"}>
              Login
            </Text>
          </Flex>
          <Stack spacing={4}>
            <FormControl isRequired>
              <FormLabel color={"blackAlpha.700"}>Email</FormLabel>
              <Input
                variant="filled"
                placeholder="Email"
                {...register("email")}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel color={"blackAlpha.700"}>Password</FormLabel>
              <InputGroup size="md" marginBottom={5}>
                <Input
                  variant="filled"
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder="Enter password"
                  {...register("password")}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Button colorScheme="blue" type="submit">
              Entrar
            </Button>
            <Flex justify={"flex-end"}>
              <Text
                cursor={"pointer"}
                color={"blue.300"}
                onClick={() => history.push("/register")}
              >
                Ainda não possui uma conta?
              </Text>
            </Flex>
          </Stack>
        </form>
      </Flex>
    </Center>
  );
}
export default Login;
