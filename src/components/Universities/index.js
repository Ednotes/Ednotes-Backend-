import React from "react";

// chakra
import {
  Box,
  Center,
  SimpleGrid,
  Spinner,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

// graphql
import { GET_UNIVERSITIES } from "../../graphql/queries/Manager/Universities";
import { useQuery } from "@apollo/client";

// components
import SingleUniversity from "./SingleUniversity";
import CustomHeader from "../UI/CustomHeader";
import AddUniversity from "./AddUniversity";

export default function Universities() {
  // chakra modal
  const addUniversityDisclosure = useDisclosure();

  // Graphq;
  const { data, loading } = useQuery(GET_UNIVERSITIES);
  const allUniversities = data?.schools;
  return (
    <>
      <Box mt={-100} ml={-14} w="65vw">
        <CustomHeader
          title="Universities"
          onAddNewButtonClick={addUniversityDisclosure.onOpen}
        />

        <Box mt={16}>
          {loading && (
            <Center py={16}>
              <Spinner />
            </Center>
          )}

          {!loading && data && (
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
              {allUniversities?.map((singleUniData) => {
                return (
                  <SingleUniversity
                    key={singleUniData?.id}
                    id={singleUniData?.id}
                    title={singleUniData?.name}
                    state={singleUniData?.location}
                  />
                );
              })}
            </SimpleGrid>
          )}
        </Box>
      </Box>

      <Modal
        isOpen={addUniversityDisclosure.isOpen}
        onClose={addUniversityDisclosure.onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add University</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AddUniversity modalDisclosure={addUniversityDisclosure} />
          </ModalBody>

          {/* <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={addUniversityDisclosure.onClose}
            >
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  );
}
