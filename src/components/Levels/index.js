import React from 'react';

// chakra
import {
  Box,
  SimpleGrid,
  Flex,
  Center,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';

// react-router-dom
import { useParams } from 'react-router-dom';

// graphql
import { useQuery } from '@apollo/client';
import { GET_LEVELS } from '../../graphql/queries/Manager/Levels';

// components
import SingleLevel from './SingleLevel';
import CustomHeader from '../../components/UI/CustomHeader';
import { Empty, Loader } from '../../components/UI/Fetching';
import AddLevel from './AddLevel';
import Back from '../UI/Back';

export default function Departments() {
  // chakra modal
  const AddLevelDisclosure = useDisclosure();

  // university id
  const { id } = useParams();

  // Graphql
  const { data, loading } = useQuery(GET_LEVELS, {
    variables: {
      id,
    },
  });

  const allLevels = data?.school?.levels;
  const schoolData = data?.school;

  return (
    <>
      <Box mt={-100} ml={-14} w='65vw'>
        {/* header */}
        <CustomHeader
          title='Levels'
          onAddNewButtonClick={AddLevelDisclosure.onOpen}
        />

        <Box mt={16}>
          <Back />
          {loading && <Loader />}
          {!loading && data && (
            <Flex flexDir='column' w='100%'>
              <Center flexDir='column' bg='gray.200' py={5} mb={5}>
                <Text fontWeight='bold'>{schoolData?.name}</Text>
              </Center>

              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
                {allLevels?.map((singleLevelData) => {
                  return (
                    <SingleLevel
                      title={singleLevelData?.name}
                      description={singleLevelData?.description}
                      faculty={singleLevelData?.faculty}
                      department={singleLevelData?.dept}
                      numberOfStudents={singleLevelData?.students.length}
                    />
                  );
                })}
              </SimpleGrid>

              {allLevels?.length === 0 && (
                <Empty text='No Departments have been added' />
              )}
            </Flex>
          )}
        </Box>
      </Box>

      <Modal
        isOpen={AddLevelDisclosure.isOpen}
        onClose={AddLevelDisclosure.onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Level</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AddLevel
              universityData={schoolData}
              modalDisclosure={AddLevelDisclosure}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
