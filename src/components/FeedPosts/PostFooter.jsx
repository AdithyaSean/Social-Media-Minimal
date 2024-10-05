import { Box, Flex, Input, InputGroup, InputRightElement, Text, Button } from "@chakra-ui/react"
import { CommentLogo, NotificationsLogo,UnlikeLogo } from '../../assets/constants';
import {useState} from 'react';

const PostFooter = ({username, isProfilePage}) => {
    const [liked,setliked] = useState(false);
    const [likes, setlikes] = useState(1000);

    const handleLike =() =>{
        if(liked){
            setliked(false);
            setlikes(likes -1);
        }else{
            setliked(true);
            setlikes(likes +1);
        }
    }
  return (
    <Box mb={10} marginTop={"auto"}>
    <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={"4"}>
        <Box onClick={handleLike} cursor={"pointer"} fontSize={18}>
            {!liked ? (<NotificationsLogo />) : (<UnlikeLogo />)}
        </Box>
        <Box cursor={"pointer"} fontSize={18}>
            <CommentLogo />
        </Box>
    </Flex>
    <Text fontweight={600} fontSize={"sm"}>
        {likes} likes
    </Text>
    {!isProfilePage && (
        <>
            <Text fontweight={700} fontSize={"sm"}>
            {username}{" "}
             </Text>
             <Text as={"span"} fontWeight={400}>
                Feeling Good
            </Text>
            <Text color={"gray"} fontSize={"sm"}>
                View all 1000 comments
            </Text>
        </>
    )}

    <Flex alignItems={"center"} gap={2} justifyContent={"space-between"} w={"full"}>
        <InputGroup>
            <Input variant={"flushed"} placeholder="Add a comment..." 
            fontSize={14} />
            <InputRightElement>
                <Button fontSize={14} color={"blue.500"} fontweight={600}
                cursor={"pointer"} _hover={{color: "white"}} bg={"transparent"}>
                    Post
                </Button>
            </InputRightElement>
        </InputGroup>

    </Flex>
    </Box>
  )
}

export default PostFooter