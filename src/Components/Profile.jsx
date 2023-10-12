import { Flex, Heading, Box, fontSize, Text, Icon } from "@chakra-ui/react";
import React from "react";

function Profile() {
  return (
    <Flex width={"100%"} mt={"100px"}>
      <Box alignself="center" ml={"200px"}>
        <Heading fontWeight={"extrabold"} color={"cyan.500"} size={"4xl"}>
          1+
        </Heading>
        <Text fontSize="2xl" color={"cyan.500"}>
          years of experience
        </Text>
      </Box>
      <Box alignSelf="center" px="32" py="16">
        <Text fontWeight="bold" fontSize="lg">
          Designer and Developer, specialised in web app development.
        </Text>
        <Flex mt={8}>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            bg="gray.100"
            h="30vh"
            w="30vh"
            justify="flex-end"
            _hover={{ bg: "pink.400" }}
            
          >
            <Icon color="black" p="4" w="24" h="24" />
            <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
              Android Apps
            </Text>
          </Flex>
          <Flex
          ml={"100px"}
          
            rounded="xl"
            direction="column"
            mt={4}
            bg="gray.100"
            h="30vh"
            w="30vh"
            justify="flex-end"
            _hover={{ bg: "teal.400" }}
          >
            <Icon color="black" p="4" w="24" h="24" />
            <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
              Flutter Apps
            </Text>
          </Flex>
          <Flex
           ml={"100px"}
          
            rounded="xl"
            direction="column"
            mt={4}
            bg="gray.100"
            h="30vh"
            w="30vh"
            justify="flex-end"
            _hover={{ bg: "green.400" }}
          >
            <Icon p="4" w="24" h="24" color="black" />
            <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
              Web Apps
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Profile;
