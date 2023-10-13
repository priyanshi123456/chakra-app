import {
  Container,
  Flex,
  Heading,
  VStack,
  Text,
  SimpleGrid,
  GridItem,
  FormControl,
  FormLabel,
  Option,
  Textarea,
  Select,
  Checkbox,
  Button,
  Input,
  
} from "@chakra-ui/react";
import React from "react";
import Cart from "./Cart";

function Form() {
  return (
    <>
      <Container maxW="container.lg" p={2}>
        <Flex h="100vh" py="20">
          <VStack w="full" height="full" p="10" spacing="10" align="flex-start">
            <VStack align="flex-start">
              <Heading>Your details</Heading>
              <Text>if you already had an account click here</Text>
            </VStack>
            <SimpleGrid column={2} columnGap={3} rowGap={2}>
              <GridItem colSpan={1}>
                <FormControl>
                  <FormLabel>First name</FormLabel>
                  <Input type="text" placeholder="firstname" />
                </FormControl>
              </GridItem>
              <GridItem colSpan={1}>
                <FormControl>
                  <FormLabel>Last name</FormLabel>
                  <Input type="text" placeholder="Lastname" />
                </FormControl>
              </GridItem>
              <GridItem colSpan={2}>
                <FormControl>
                  <FormLabel>Last name</FormLabel>
                  <Textarea type="text" placeholder="Address.." />
                </FormControl>
              </GridItem>
              <GridItem colSpan={1}>
                <FormControl>
                  <FormLabel>City</FormLabel>
                  <Input type="text" placeholder="City" />
                </FormControl>
              </GridItem>
              <GridItem colSpan={1}>
                <FormControl>
                  <FormLabel>Country</FormLabel>
                  <Select placeholder="select country">
                    <option>India</option>
                    <option>Pakistan</option>
                  </Select>
                </FormControl>
              </GridItem>
              <GridItem colSpan={1}>
                <FormControl>
                  <Checkbox>Check to the billing Address</Checkbox>
                </FormControl>
              </GridItem>
              <GridItem colSpan={2}>
                <Button w={"full"}>Place Item</Button>
              </GridItem>
            </SimpleGrid>
          </VStack>
          <VStack w="full" h="full" p={10} spacing={6} align="flex-start">
            <VStack alignItems="flex-start" spacing={3}>
              <Heading size="2xl">Your cart</Heading>
              <Text mb={2}>
                If the price is too hard on your eyes,{" "}
                <Button mt={2} variant="outline" colorScheme="black">
                  try changing the theme.
                </Button>
              </Text>
            </VStack>
           <Cart/>
          </VStack>
        </Flex>
      </Container>
    </>
  );
}

export default Form;
