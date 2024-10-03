import { Container, Flex } from '@chakra-ui/react'
import React from 'react'

const HomePage = () => {
    return(
        <Container maxW={"container.lg"}>
            <Flex gap={20}>
                <Box flex={2} py={10}>
                FeedPosts
                </Box>
                <Box flex={2} mr={20} display={{base: "none", lg:"block"}} maxW={"300px"} border={"1px solid red"}>
                FeedPosts
                </Box>
            </Flex>
        </Container>/>HomePage
    )
}

export default HomePage