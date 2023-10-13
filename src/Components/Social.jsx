import { Container, HStack, Icon } from '@chakra-ui/react'
import React from 'react'
import {FaFacebook , FaGoogle,FaShopify} from 'react-icons/fa'

function Social() {
  return (
    <>
    <HStack spacing="20">
      <Icon as={FaFacebook} boxSize="5"></Icon>
      <Icon as={FaShopify} boxSize="5"></Icon>

      <Icon as={FaGoogle} boxSize="5"></Icon>

    
    </HStack>
    </>
  )
}

export default Social
