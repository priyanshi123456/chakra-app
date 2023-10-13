
import "./App.css";
import {
  Container,
  Flex,
  VStack,
  Heading,
  IconButton,
  useColorMode,
  Spacer,
  Image
} from "@chakra-ui/react";
import { FaSun, FaMoon, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Header from "./Components/Header";
import Profile from "./Components/Profile";
import Social from "./Components/Social";
import Form from "./Components/Form";


function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode == "dark";

  return (
    <VStack p="5">
      <Flex w="100%">
        <Heading fontWeight="semibold" color="cyan.400">
          <img style={{opacity:"0.1"}} height={"50px"} width={"70px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb2atm6d4jSdXA9AXz2Ku1V8LHWSCLSEKlbw&usqp=CAU" /></Heading>
        <Spacer></Spacer>
        <IconButton
          ml="99"
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound="true"
          onClick={toggleColorMode}
        ></IconButton>
         <IconButton
          ml="8"
          icon={<FaInstagram/>}
          isRound="true"
          onClick={toggleColorMode}
        ></IconButton>
         <IconButton
          ml="8"
          icon={<FaLinkedin/>}
          isRound="true"
          onClick={toggleColorMode}
        ></IconButton>
         <IconButton
          ml="8"
          icon={<FaGithub/>}
          isRound="true"
          onClick={toggleColorMode}
        ></IconButton>
        
        
      </Flex>
      <Header/>
      <Social/>
      <Profile/>
    </VStack>




    // Uncomment the Form Component
    // <Form/>
  );
}

export default App;
