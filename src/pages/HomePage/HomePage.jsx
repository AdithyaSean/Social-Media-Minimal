import { Box, Container, Flex } from '@chakra-ui/react'
import React from 'react'
import FeedPost from '../../components/FeedPosts/FeedPost'
import FeedPosts from '../../components/FeedPosts/FeedPosts'

const HomePage = () => {
    return(
        <Container maxW={"container.lg"}>
            <Flex gap={20}>
                <Box flex={2} py={10}>
                <FeedPosts/>
                </Box>
                <Box flex={3} mr={20} display={{base: "none", lg:"block"}} 
                maxW={"300px"}>
                Suggested Users
                </Box>
            </Flex>
        </Container>
    )
}

export default HomePage