import {
  Circle,
  Stack,
  useColorMode,
  Flex,
  Box,
  Text,
  Button,
  Image,
  borderRadius,
  backgroundColor,
  boxShadow,
  boxSize,
} from "@chakra-ui/react";
import React from "react";

function Header() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <div>
     <Stack>
            <Circle position="absolute" bg="blue.100" opacity="0.1"
                w="300px" h="300px" alignSelf="flex-end" />
            <Flex
                spacing="200px"
                alignSelf="flex-start">
                <Box  mt={"100px"} mr={"60px"} align='flex-start'>
                    <Text fontSize="5xl" fontWeight="semibold">Hi, I am</Text>
                    <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip='text' >Priyanshi jain</Text>
                    <Text color={isDark ? "gray.200" : "gray.500"}>working as a frontend developer</Text>
                    <Button mt={8} colorScheme="blue" 
                    >Hire Me</Button>

                </Box>
                <Image alignSelf="center"borderRadius='full' mr={"50px"}
                    backgroundColor="transparent" boxShadow="lg"
                    boxSize="300px" src='https://cdn.pixabay.com/photo/2015/04/19/08/32/rose-729509_640.jpg' />
            </Flex>

        </Stack>
    </div>
  );
}

export default Header;
