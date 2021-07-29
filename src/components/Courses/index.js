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

// graphql
import { useQuery } from '@apollo/client';
import { GET_COURSES, GET_SCHOOL } from '../../graphql/queries/Manager/Courses';

// components
import SingleCourse from './SingleCourse';
import CustomHeader from '../UI/CustomHeader';
// import NewCourse from './NewCourse';
import { useParams } from 'react-router';
import Back from '../UI/Back';
import { Empty, Loader } from '../UI/Fetching';
import CreateNewCourse from './CreateNewCourse';

export default function Courses() {
  // chakra modal
  const addCourseDisclosure = useDisclosure();

  // university id
  const { id } = useParams();

  // Graphql
  const { data: sData, loading: schoolLoading } = useQuery(GET_SCHOOL, {
    variables: {
      id,
    },
  });
  const { data, loading } = useQuery(GET_COURSES);

  const schoolData = sData?.school;
  const allCourses = data?.get_all_courses?.edges;

  return (
    <>
      <Box mt={-100} ml={-14} w='65vw'>
        {/* header */}
        <CustomHeader
          title='Courses'
          onAddNewButtonClick={addCourseDisclosure.onOpen}
        />

        <Box mt={16}>
          <Back />
          {loading && schoolLoading && <Loader />}

          {!loading && !loading && data && (
            <Flex flexDir='column' w='100%'>
              <Center flexDir='column' bg='gray.200' py={5} mb={5}>
                <Text fontWeight='bold'>{schoolData?.name}</Text>
              </Center>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
                {allCourses?.map((singleCourseData) => {
                  console.log(singleCourseData);
                  return (
                    <SingleCourse
                      key={singleCourseData?._id}
                      title={singleCourseData?.name}
                      description={singleCourseData?.description}
                      semester={singleCourseData?.semester}
                      id={singleCourseData?._id}
                    />
                  );
                })}
              </SimpleGrid>

              {allCourses?.length === 0 && (
                <Empty text='No Courses have been added' />
              )}
            </Flex>
          )}
        </Box>
      </Box>

      <Modal
        size='xl'
        isOpen={addCourseDisclosure.isOpen}
        onClose={addCourseDisclosure.onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Course</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* <NewCourse
              universityData={schoolData}
              modalDisclosure={addCourseDisclosure}
            /> */}
            <CreateNewCourse
              universityData={schoolData}
              modalDisclosure={addCourseDisclosure}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
