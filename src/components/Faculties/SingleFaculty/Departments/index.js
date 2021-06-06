import React from "react";

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
} from "@chakra-ui/react";

// react-router-dom
import { useParams } from "react-router-dom";

// graphql
import { useQuery } from "@apollo/client";
import { GET_DEPARTMENTS } from "../../../../graphql/queries/Manager/Departments";
import { GET_UNIVERSITY } from "../../../../graphql/queries/Manager/Universities";

// components
import SingleDepartment from "./SingleDepartment";
import CustomHeader from "../../../../components/UI/CustomHeader";
import { Empty, Loader } from "../../../../components/UI/Fetching";
import AddDepartment from "./AddDepartment";

export default function Departments() {
  // chakra modal
  const addDepartmentDisclosure = useDisclosure();

  // university id
  const { id } = useParams();

  // Graphql
  const { data, loading } = useQuery(GET_DEPARTMENTS);

  // get university data
  const { data: universityData, loading: unviersityLoading } = useQuery(
    GET_UNIVERSITY,
    {
      variables: {
        id,
      },
    }
  );
  const allDepartments = data?.depts;
  const schoolData = universityData?.school;

  let filteredDepartments = [];
  // here we're filtering out the faculties that belong to this school
  if (schoolData && allDepartments?.length > 0) {
    filteredDepartments = allDepartments.filter((fd) => {
      return fd.school === id;
    });
  }

  return (
    <>
      <Box mt={-100} ml={-14} w="65vw">
        {/* header */}
        <CustomHeader
          title="Departments"
          onAddNewButtonClick={addDepartmentDisclosure.onOpen}
        />

        <Box mt={16}>
          {loading || (unviersityLoading && <Loader />)}

          {!loading && !unviersityLoading && data && universityData && (
            <Flex flexDir="column" w="100%">
              <Center flexDir="column" bg="gray.200" py={5} mb={5}>
                <Text fontWeight="bold">{schoolData?.name}</Text>
                <Text fontSize="sm">{schoolData?.description}</Text>
              </Center>

              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
                {filteredDepartments?.map((singleFacultyData) => {
                  return (
                    <SingleDepartment
                      faculty="aefa"
                      state="afa"
                      university="afafa"
                      title=""
                    />
                  );
                })}
              </SimpleGrid>

              {filteredDepartments?.length === 0 && (
                <Empty text="No Departments have been added" />
              )}
            </Flex>
          )}
        </Box>
      </Box>

      <Modal
        isOpen={addDepartmentDisclosure.isOpen}
        onClose={addDepartmentDisclosure.onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Department</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AddDepartment
              universityData={schoolData}
              modalDisclosure={addDepartmentDisclosure}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
