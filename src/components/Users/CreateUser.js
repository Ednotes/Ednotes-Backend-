import React, { useState } from 'react';

// chakra
import {
  Box,
  Button,
  Center,
  FormLabel,
  SimpleGrid,
  Text,
  useToast,
} from '@chakra-ui/react';

// components
import { useMutation } from '@apollo/client';
import {
  CREATE_ADMIN,
  CREATE_SUPER_ADMIN,
} from '../../graphql/Mutations/Manager/Users';
import { GET_USERS } from '../../graphql/queries/User';
import CustomFormControl from '../UI/Forms/CustomFormControl';

const CreateUser = ({ modalDisclosure }) => {
  const [current, setCurrent] = useState('creating');

  // chakra toast
  const toast = useToast();

  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
  });

  const [userType, setUserType] = useState('admin');
  const [createdUser, setCreatedUser] = useState({});

  // GRAPHQL
  const [createAdminHandler, { loading }] = useMutation(CREATE_ADMIN, {
    onCompleted({ createAdmin }) {
      setCurrent('done');
      setCreatedUser(createAdmin?.user);
      // show toast
      toast({
        description: 'User Added Succesfully',
        status: 'success',
        duration: 9000,
        isClosable: true,
        position: 'top-right',
      });

      // close modal
      // modalDisclosure.onClose();
    },
    refetchQueries: [{ query: GET_USERS }],
  });

  const [createSuperAdminHandler, { loading: superAdminLoading }] = useMutation(
    CREATE_SUPER_ADMIN,
    {
      onCompleted({ createSuperAdmin }) {
        setCurrent('done');
        setCreatedUser(createSuperAdmin?.user);
        // show toast
        toast({
          description: 'User Added Succesfully',
          status: 'success',
          duration: 9000,
          isClosable: true,
          position: 'top-right',
        });

        // close modal
        // modalDisclosure.onClose();
      },
      refetchQueries: [{ query: GET_USERS }],
    }
  );

  const setDataHandler = (type, value) => {
    setData({
      ...data,
      [type]: value,
    });
  };

  return (
    <>
      {current === 'creating' && (
        <>
          <Box>
            <SimpleGrid mb={8} columns={{ base: 1, md: 2 }} spacing={8}>
              <CustomFormControl
                label='First Name'
                type='text'
                placeholder='Brad'
                onChange={(e) => setDataHandler('firstName', e.target.value)}
              />

              <CustomFormControl
                label='Last Name'
                type='text'
                placeholder='Chadley'
                onChange={(e) => setDataHandler('lastName', e.target.value)}
              />
            </SimpleGrid>
            <Box mb={8}>
              <CustomFormControl
                label='Username'
                type='text'
                placeholder='Chad'
                onChange={(e) => setDataHandler('username', e.target.value)}
              />
            </Box>
            <SimpleGrid mb={8} columns={{ base: 1, md: 2 }} spacing={8}>
              <CustomFormControl
                label='Email'
                type='email'
                placeholder='chad@email.com'
                onChange={(e) => setDataHandler('email', e.target.value)}
              />

              <CustomFormControl
                label='Password'
                type='text'
                placeholder='password'
                onChange={(e) => setDataHandler('password', e.target.value)}
              />
            </SimpleGrid>

            <Box mb={8}>
              <FormLabel mb={1} fontSize='14px'>
                User Type
              </FormLabel>
              <SimpleGrid columns={{ base: 2 }} spacing={8}>
                <Center
                  onClick={() => {
                    setUserType('admin');
                  }}
                  bg={userType === 'admin' && 'black'}
                  color={userType === 'admin' && 'white'}
                  cursor='pointer'
                  h='45px'
                  borderWidth='1px'
                  borderRadius='13px'
                >
                  Admin
                </Center>

                <Center
                  onClick={() => {
                    setUserType('superAdmin');
                  }}
                  bg={userType === 'superAdmin' && 'black'}
                  color={userType === 'superAdmin' && 'white'}
                  cursor='pointer'
                  h='45px'
                  borderWidth='1px'
                  borderRadius='13px'
                >
                  SuperAdmin
                </Center>
              </SimpleGrid>
            </Box>
          </Box>

          <Button
            isDisabled={
              !data.firstName ||
              !data.lastName ||
              !data.email ||
              !data.username ||
              !data.password
            }
            mt={10}
            py={6}
            mb={5}
            w='100%'
            colorScheme='brand'
            isLoading={loading || superAdminLoading}
            onClick={() => {
              if (userType === 'admin') {
                createAdminHandler({
                  variables: {
                    inputValue: data,
                  },
                });
              } else {
                createSuperAdminHandler({
                  variables: {
                    inputValue: data,
                  },
                });
              }
            }}
          >
            Add User
          </Button>
        </>
      )}

      {current === 'done' && (
        <Box mb={3}>
          <Text mb={6} textAlign='center' bg='gray.200' py={3} fontWeight='500'>
            Created User Information
          </Text>

          <Text mb={1}>
            Fullname :{' '}
            <b>{`${createdUser?.firstName} ${createdUser?.lastName}`}</b>
          </Text>
          <Text mb={1}>
            Username : <b>{createdUser?.username}</b>
          </Text>
          <Text mb={1}>
            Email: <b>{createdUser?.email}</b>
          </Text>
          <Text mb={1} textTransform='capitalize'>
            User Type:{' '}
            <b>{createdUser?.userType === 'admin' ? 'admin' : 'super admin'}</b>
          </Text>
        </Box>
      )}
    </>
  );
};

export default CreateUser;
