import React from "react";
import {
  Container,
  Box,
  Text,
  Flex,
  TabList,
  TabPanel,
  Tabs,
  Tab,
  TabPanels,
} from "@chakra-ui/react";

import { Image } from "@chakra-ui/react";
import Login from "../Components/Authentication/Login";
import Signup from "../Components/Authentication/Signup";
function Homepage() {
  return (
    <Container maxW="xl" width="100%" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        alignItems="center"
        p={3}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="1g"
        borderWidth="1px"
      >
        <Flex align="center" justify="center">
          <Image
            borderRadius="full"
            boxSize="60px"
            src="https://png.pngtree.com/png-vector/20230918/ourmid/pngtree-watercolor-chat-with-hashtag-messenger-purple-color-soft-pastel-png-image_10116212.png"
            alt="Dan Abramov"
            mr={2}
          />
          <Text
            fontSize="4xl"
            fontFamily="work sans"
            color="#D53F8C"
            font-Size="500px"
            font-fontWeight="900px"
            fontStyle="bold"
          >
            Live Talk
          </Text>
        </Flex>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs variant="soft-rounded" colorScheme="pink">
          <TabList mb="1rem">
            <Tab width="50%">Login</Tab>
            <Tab width="50%">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default Homepage;
