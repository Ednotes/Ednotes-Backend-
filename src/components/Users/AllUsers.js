import { useQuery } from '@apollo/client';
import {
  Box,
  Text,
  SimpleGrid,
  useDisclosure,
  Tag,
  Avatar,
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';
import { GET_USERS } from '../../graphql/queries/User';

// components
import CustomHeader from '../UI/CustomHeader';
import CustomModal from '../UI/CustomModal';
import { Empty, Loader } from '../UI/Fetching';
import CreateUser from './CreateUser';
import Filter from './Filter';

export default function AllUsers() {
  const filterDisclosure = useDisclosure();
  const userTypeDisclosure = useDisclosure();

  const { data, loading } = useQuery(GET_USERS);

  const allUsers = data?.users;
  const allStudents = allUsers?.filter((ud) => {
    return ud?.userType === 'student';
  });
  const allAdmins = allUsers?.filter((ud) => {
    return ud?.userType === 'admin';
  });

  return (
    <Box mt={-100} ml={-14} w='65vw'>
      <CustomHeader
        title={`All Users (${allUsers?.length || 0})`}
        filterButtonOnClick={filterDisclosure.onOpen}
        onAddNewButtonClick={userTypeDisclosure.onOpen}
      />

      <Box mt={16}>
        {loading && <Loader />}

        {!loading && data && (
          <>
            <Tabs
              align='center'
              textAlign='left'
              variant='enclosed'
              // variant='soft-rounded'
              colorScheme='green'
            >
              <TabList mx='auto'>
                <Tab fontWeight='bold' fontSize='14px'>
                  Students ({allStudents?.length})
                </Tab>
                <Tab fontWeight='bold' fontSize='14px'>
                  Admins ({allAdmins?.length})
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel pt={10}>
                  <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
                    {allStudents?.map((user) => {
                      const fullname = `${user?.firstName} ${user?.lastName}`;
                      console.log(user);
                      return (
                        <Box
                          key={user?._id}
                          bg='#fff'
                          px={6}
                          py={8}
                          borderRadius='10px'
                        >
                          <Flex>
                            <Avatar my='auto' name={fullname} />
                            <Tag
                              my='auto'
                              textTransform='capitalize'
                              ml='auto'
                              fontSize='12px'
                            >
                              {user?.userType}
                            </Tag>
                          </Flex>

                          <Box mt={2}>
                            <Text fontSize='md' fontWeight='bold'>
                              {fullname}
                            </Text>
                          </Box>
                          <Box mt={1}>
                            <Text fontSize='sm'>{user?.email}</Text>
                          </Box>
                        </Box>
                      );
                    })}
                  </SimpleGrid>
                </TabPanel>
                <TabPanel pt={10}>
                  <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
                    {allAdmins?.map((user) => {
                      const fullname = `${user?.firstName} ${user?.lastName}`;
                      return (
                        <Box
                          key={user?._id}
                          bg='#fff'
                          px={6}
                          py={8}
                          borderRadius='10px'
                        >
                          <Flex>
                            <Avatar my='auto' name={fullname} />
                            <Tag
                              my='auto'
                              textTransform='capitalize'
                              ml='auto'
                              fontSize='12px'
                            >
                              {user?.userType}
                            </Tag>
                          </Flex>

                          <Box mt={2}>
                            <Text fontSize='md' fontWeight='bold'>
                              {fullname}
                            </Text>
                          </Box>
                          <Box mt={1}>
                            <Text fontSize='sm'>{user?.email}</Text>
                          </Box>
                        </Box>
                      );
                    })}
                  </SimpleGrid>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </>
        )}

        {allUsers?.length === 0 && <Empty text='No users have been added' />}
      </Box>

      <CustomModal size='xl' title='Filter Users' disclosure={filterDisclosure}>
        <Filter />
      </CustomModal>

      <CustomModal size='xl' title='Add User' disclosure={userTypeDisclosure}>
        <CreateUser disclosure={userTypeDisclosure} />
      </CustomModal>
    </Box>
  );
}
