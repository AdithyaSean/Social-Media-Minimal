import { Container } from '@chakra-ui/react'
import React from 'react'
import FeedPost from './FeedPost'

const FeedPosts = () => {
  return (
    <Container maxW={"container.sm"} py={10} px={2} >
        <FeedPost />
        <FeedPost />
        <FeedPost />
        <FeedPost />
        
        </Container>
  )
}

export default FeedPosts