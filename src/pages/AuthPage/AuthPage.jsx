import { Container, Flex } from '@chakra-ui/react'
import React from 'react'

const AuthPage = () => {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
        <Container maxW={"container.md"} padding={0}>
            this is some content
        </Container>
        
    </Flex>
  )
}

export default AuthPage