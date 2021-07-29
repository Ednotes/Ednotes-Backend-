import React from 'react';

// chakra
import {
  Box,
  Flex,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
} from '@chakra-ui/react';

import Sidebar from './Sidebar';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../../graphql/queries/User';

const Layout = ({ children }) => {
  const logoutHandler = () => {
    localStorage.removeItem('ed-toke');
    window.location.href = '/';
  };

  const { data } = useQuery(GET_USER);

  const userData = data?.user;

  return (
    <Box>
      <Box
        d='flex'
        flexDir='column'
        w='100%'
        bg='#003049'
        h='10rem'
        color='#fff'
      >
        {userData && (
          <Menu>
            <MenuButton ml='auto' mt={8} mr={14}>
              <Flex>
                <Text color='#fff' my='auto' mr={2}>
                  {`${userData?.firstName} ${userData?.lastName}`}
                </Text>

                <Avatar
                  my='auto'
                  name={`${userData?.firstName} ${userData?.lastName}`}
                  // h="30px"
                  // src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
                />
              </Flex>
            </MenuButton>
            <MenuList>
              <MenuItem onClick={logoutHandler} color='black'>
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
        )}
      </Box>

      <Flex bg='#F8F8F8' minH='100vh'>
        <Box rounded='lg' mx={20} h='600px' w='280px' bg='#fff' mt={-100}>
          <Sidebar />
        </Box>
        <Box>{children}</Box>
      </Flex>
    </Box>
  );
};

export default Layout;
