import { useQuery } from '@apollo/client';
import {
  Box,
  Text,
  SimpleGrid,
  useDisclosure,
  Tag,
  Avatar,
} from '@chakra-ui/react';
import { GET_USERS } from '../../graphql/queries/User';

// import img1 from '../../images/Ellipse 274.png';
// import img2 from '../../images/Icon material-edit.png';

// components
import CustomHeader from '../UI/CustomHeader';
import CustomModal from '../UI/CustomModal';
import { Empty, Loader } from '../UI/Fetching';
import Filter from './Filter';

export default function AllUsers() {
  const filterDisclosure = useDisclosure();

  const { data, loading } = useQuery(GET_USERS);

  const allUsers = data?.users;

  return (
    <Box mt={-100} ml={-14} w='65vw'>
      <CustomHeader
        title={`All Users (${allUsers?.length || 0})`}
        filterButtonOnClick={filterDisclosure.onOpen}
      />

      <Box mt={16}>
        {loading && <Loader />}

        {!loading && data && (
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
            {allUsers?.map((user) => {
              const fullname = `${user?.firstName} ${user?.lastName}`;
              return (
                <Box
                  key={user?._id}
                  bg='#fff'
                  px={6}
                  py={8}
                  borderRadius='10px'
                >
                  <Avatar name={fullname} />

                  <Box mt={2}>
                    <Text fontSize='md' fontWeight='bold'>
                      {fullname}
                      <Tag ml={1} fontSize='12px'>
                        {user?.userType}
                      </Tag>
                    </Text>
                  </Box>
                  <Box mt={2}>
                    <Text fontSize='sm'>{user?.email}</Text>
                  </Box>
                </Box>
              );
            })}
          </SimpleGrid>
        )}

        {allUsers?.length === 0 && <Empty text='No users have been added' />}
      </Box>

      <CustomModal size='xl' title='Filter Users' disclosure={filterDisclosure}>
        <Filter />
      </CustomModal>
    </Box>
  );
}
