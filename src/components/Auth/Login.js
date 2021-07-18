import React, { useState } from 'react';

import { Box, Flex, Text, Button, useToast } from '@chakra-ui/react';

// GRAPHQL
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../graphql/Mutations/Auth';

// helpers
import { setToken } from '../../helpers/localStorage';

// components
import CustomFormControl from '../UI/Forms/CustomFormControl';
const Login = () => {
  // toast
  const toast = useToast();

  // state
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  // graphql
  const [adminLogin, { loading }] = useMutation(LOGIN, {
    onCompleted({ login }) {
      toast({
        description: 'Logged in successfully',
        status: 'success',
        duration: 9000,
        isClosable: true,
      });

      const { message } = login;

      setToken(message);
      window.location.href = '/';

      toast({
        description: message,
        duration: 9000,
        isClosable: true,
      });
    },
  });

  const loginHandler = async () => {
    let input = {
      email,
      password,
    };

    try {
      await adminLogin({
        variables: {
          input,
        },
      });
    } catch (error) {
      return null;
    }
  };

  return (
    <Flex flexDir='column' w='100%' h='100vh' overflowY='auto'>
      <Box flexDir='column' m='auto'>
        <Text mb={6} fontSize='3xl' fontWeight={900}>
          Login
        </Text>

        <CustomFormControl
          label='Email'
          type='email'
          placeholder='damil@email.com'
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <Box mt={8}>
          <CustomFormControl
            label='Password'
            type='password'
            placeholder='******'
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Box>

        <Button
          onClick={loginHandler}
          isLoading={loading}
          isDisabled={!email || !password}
          mt={10}
          py={6}
          w='100%'
          colorScheme='brand'
        >
          Login
        </Button>
      </Box>
    </Flex>
  );
};

export default Login;
