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
    } from "@chakra-ui/react";


import CustomHeader from "../UI/CustomHeader";
import SingleFaculty from './SingleFaculty'
//GRAPHQL
import {GET_FACULTIES} from '../../graphql/queries/Manager/Faculties'
import {useQuery} from '@apollo/client'
import AddFaculties from "./AddFaculties";


export default function Faculties() {
  // chakra modal
  const addFacultyDisclosure = useDisclosure();

  // Graphql;
  const { data, loading } = useQuery(GET_FACULTIES);
  const allFaculties = data?.faculties;

  return (
    <Box mt={-100} ml={-14} w="65vw">
      <CustomHeader 
      title="Faculties" 
      onAddNewButtonClick={addFacultyDisclosure}
      />

      <Box mt={16}>
      {loading && (
            <Center py={16}>
              <Spinner />
            </Center>
          )}
           {!loading && data && (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
          {allFaculties?.map((singleFacultyData)=>{
            return(
              <SingleFaculty
              description={singleFacultyData?.description}
              name={singleFacultyData?.name}
              />
            )
           
          })}
          
        </SimpleGrid>
           )}
      </Box>
      <Modal
        isOpen={addFacultyDisclosure.isOpen}
        onClose={addFacultyDisclosure.onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AddFaculties modalDisclosure={addFacultyDisclosure} />
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
    </Box>
  );
}
