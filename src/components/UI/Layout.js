import React from "react";

// chakra
import {
  Box,
  Flex,
  Text,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
} from "@chakra-ui/react";

import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const logoutHandler = () => {
    localStorage.removeItem("ed-toke");
    window.location.href = "/";
  };

  return (
    <Box>
      <Box bg="#003049" h="10rem" color="#fff">
        <Flex float="right" mt={8} mx={14}>
          <Text color="#fff" my="auto" mr={2}>
            Asfandyer Butt
          </Text>

          <Menu>
            <MenuButton>
              <Avatar
                my="auto"
                // h="30px"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
              />
            </MenuButton>
            <MenuList>
              <MenuItem onClick={logoutHandler} color="black">
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Box>

      <Flex bg="#F8F8F8" minH="100vh">
        <Box rounded="lg" mx={20} h="600px" w="280px" bg="#fff" mt={-100}>
          <Sidebar />
        </Box>
        <Box>{children}</Box>
      </Flex>
    </Box>
  );
};

export default Layout;
