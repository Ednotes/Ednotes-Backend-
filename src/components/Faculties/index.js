import {
  Box,
  SimpleGrid,
  Center,
  Spinner,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text,
  Flex,
} from "@chakra-ui/react";

import CustomHeader from "../UI/CustomHeader";
import SingleFaculty from "./SingleFaculty";
//GRAPHQL
import { GET_FACULTIES } from "../../graphql/queries/Manager/Faculties";
import { GET_UNIVERSITY } from "../../graphql/queries/Manager/Universities";
import { useQuery } from "@apollo/client";
import AddFaculties from "./AddFaculties";
import { useParams } from "react-router";

export default function Faculties() {
  // chakra modal
  const addFacultyDisclosure = useDisclosure();

  // university id
  const { id } = useParams();

  // Graphql
  // get faculty data
  const { data, loading } = useQuery(GET_FACULTIES);

  // get university data
  const { data: universityData, loading: unviersityLoading } = useQuery(
    GET_UNIVERSITY,
    {
      variables: {
        id,
      },
    }
  );
  const allFaculties = data?.faculties;
  const schoolData = universityData?.school;

  let filteredFaculties = [];

  // here we're filtering out the faculties that belong to this school
  if (schoolData && allFaculties?.length > 0) {
    filteredFaculties = allFaculties.filter((fd) => {
      return fd.school === id;
    });
  }

  return (
    <Box mt={-100} ml={-14} w="65vw">
      <CustomHeader
        title="Faculties"
        onAddNewButtonClick={addFacultyDisclosure.onOpen}
      />

      <Box mt={16}>
        {loading && unviersityLoading && (
          <Center py={16}>
            <Spinner />
          </Center>
        )}
        {!loading && !unviersityLoading && data && universityData && (
          <Flex flexDir="column" w="100%">
            <Center flexDir="column" bg="gray.200" py={5} mb={5}>
              <Text fontWeight="bold">{schoolData?.name}</Text>
              <Text fontSize="sm">{schoolData?.description}</Text>
            </Center>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
              {filteredFaculties?.map((singleFacultyData) => {
                return (
                  <SingleFaculty
                    key={singleFacultyData?.id}
                    id={singleFacultyData?.id}
                    description={singleFacultyData?.description}
                    name={singleFacultyData?.name}
                    school={singleFacultyData?.school}
                  />
                );
              })}
            </SimpleGrid>

            {filteredFaculties?.length === 0 && (
              <Center
                fontSize="14px"
                p={6}
                bg="white"
                w="100%"
                textAlign="center"
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
