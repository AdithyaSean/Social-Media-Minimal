import { Box, Flex } from "@chakra-ui/react"
import { useLocation } from "react-router-dom"
import Sidebar from "../../components/Sidebar/Sidebar";

/*instead of adding the Sidebar componenet to every page, we can add it only once to the PageLayout component
and wrap the children with it. this way, we can have a sidebar on every page except the AuthPage.*/

const PageLayout = ({children}) => {
    const {pathname} = useLocation()
  return (
    
    <Flex>
        {/* Sidebar on the Left*/}
        {pathname !== '/auth' ? (
          <Box w={{base:"70px", md:"240px"}}>
          <Sidebar />
      </Box>  
        ) : null}
      {/* Content on the Right*/}
        <Box flex={1} w={{base: "calc(100% - 70px)", md:"calc(100%-240px"}}>
        {children}
        </Box>   
    </Flex>
  );
};

export default PageLayout