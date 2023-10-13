import React from 'react'
import { HStack,
  Heading,
  Text,
  VStack,
  Divider,
  Stack,
  Image,
  AspectRatio,} from  "@chakra-ui/react";

function Cart() {
  return (
    <div>
          <HStack spacing={6} alignItems="center" w="full">
              <AspectRatio ratio={1} w={24}>
                <Image
                  src="https://www.conservation.wa.gov.au/sites/default/files/inline-images/Penny-Bond.jpg"
                  alt="Skateboard"
                />
              </AspectRatio>
              <Stack
                spacing={0}
                w="full"
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <VStack w="full" spacing={0} alignItems="flex-start">
                  <Heading size="md">Penny board</Heading>
                  <Text>PNYCOMP27541</Text>
                </VStack>
                <Heading size="sm" textAlign="end">
                  $119.00
                </Heading>
              </Stack>
            </HStack>
            <VStack spacing={4} alignItems="stretch" w="full">
              <HStack justifyContent="space-between">
                <Text>Subtotal</Text>
                <Heading size="sm">$119.00</Heading>
              </HStack>
              <HStack justifyContent="space-between">
                <Text>Shipping</Text>
                <Heading size="sm">$19.99</Heading>
              </HStack>
              <HStack justifyContent="space-between">
                <Text>Taxes (estimated)</Text>
                <Heading size="sm">$23.80</Heading>
              </HStack>
            </VStack>
            <Divider />
            <HStack justifyContent="space-between" w="full">
              <Text>Total</Text>
              <Heading size="lg">$162.79</Heading>
            </HStack>
      
    </div>
  )
}

export default Cart
