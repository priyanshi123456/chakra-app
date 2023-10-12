
import "./App.css";
import {
  Container,
  Flex,
  VStack,
  Heading,
  IconButton,
  useColorMode,
  Spacer,
} from "@chakra-ui/react";
import { FaSun, FaMoon, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Header from "./Components/Header";
import Profile from "./Components/Profile";
import Social from "./Components/Social";


function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode == "dark";

  return (
    <VStack p="5">
      <Flex w="100%">
        <Heading fontWeight="semibold" color="cyan.400">
          i am head
        </Heading>
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
  );
}

export default App;
