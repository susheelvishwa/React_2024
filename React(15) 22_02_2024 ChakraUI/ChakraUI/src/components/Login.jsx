import {
  Flex,
  Box,
  Heading,
  Button,
  ButtonGroup,
  Spacer,
} from "@chakra-ui/react";

const Login = () => {
  return (
    <Flex
      border={"1px dotted"}
      margin={"5px"}
      padding={"10px"}
      minWidth="max-content"
      alignItems="center"
      gap="2"
    >
      <Box p="2">
        <Heading size="md">Chakra App</Heading>
      </Box>
      <Spacer />
      <ButtonGroup gap="2">
        <Button colorScheme="teal">Sign Up</Button>
        <Button colorScheme="teal">Log in</Button>
      </ButtonGroup>
    </Flex>
  );
};

export default Login;
