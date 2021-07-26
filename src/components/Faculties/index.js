import {
  Box,
  SimpleGrid,
  Center,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text,
  Flex,
} from '@chakra-ui/react';

//GRAPHQL
import { GET_FACULTIES } from '../../graphql/queries/Manager/Faculties';
import { useQuery } from '@apollo/client';
import AddFaculties from './AddFaculties';
import { useParams } from 'react-router';

// components
import CustomHeader from '../UI/CustomHeader';
import SingleFaculty from './SingleFaculty';
import Back from '../UI/Back';
import { Loader } from '../UI/Fetching';

export default function Faculties() {
  // chakra modal
  const addFacultyDisclosure = useDisclosure();

  // university id
  const { id } = useParams();

  // Graphql
  // get faculty data
  const { data, loading } = useQuery(GET_FACULTIES, {
    variables: {
      id,
    },
  });

  const schoolData = data?.school;
  const allFaculties = data?.school?.faculties;

  return (
    <Box mt={-100} ml={-14} w='65vw'>
      <CustomHeader
        title='Faculties'
        onAddNewButtonClick={addFacultyDisclosure.onOpen}
      />

      <Box mt={16}>
        <Back />
        {loading && <Loader />}
        {!loading && data && (
          <Flex flexDir='column' w='100%'>
            <Center flexDir='column' bg='gray.200' py={5} mb={5}>
              <Text fontWeight='bold'>{schoolData?.name}</Text>
              <Text fontSize='sm'>{schoolData?.description}</Text>
            </Center>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
              {allFaculties?.map((singleFacultyData) => {
                return (
                  <SingleFaculty
                    key={singleFacultyData?._id}
                    id={singleFacultyData?._id}
                    description={singleFacultyData?.description}
                    name={singleFacultyData?.name}
                    school={singleFacultyData?.school}
                  />
                );
              })}
            </SimpleGrid>

            {allFaculties?.length === 0 && (
              <Center
                fontSize='14px'
                p={6}
                bg='white'
                w='100%'
                textAlign='center'
              >
                No Faculties have been added
              </Center>
            )}
          </Flex>
        )}
      </Box>
      <Modal
        isOpen={addFacultyDisclosure.isOpen}
        onClose={addFacultyDisclosure.onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Faculty</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AddFaculties
              universityData={schoolData}
              modalDisclosure={addFacultyDisclosure}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}
