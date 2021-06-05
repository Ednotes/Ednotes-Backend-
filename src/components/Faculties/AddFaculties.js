import React, { useState } from "react";

// chakra
import { Box, Button, useToast } from "@chakra-ui/react";
import CustomFormControl from "../UI/Forms/CustomFormControl";

// GraphqL
import { useMutation } from "@apollo/client";
import { ADD_FACULTY } from "../../graphql/Mutations/Manager/Faculties";
import { GET_FACULTIES } from "../../graphql/queries/Manager/Faculties";

const AddFaculty = ({ modalDisclosure, universityData }) => {
  // chakra toast
  const toast = useToast();

  // state for input fields
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  // GRAPHQL
  const [addFacultyHandler, { loading }] = useMutation(ADD_FACULTY, {
    onCompleted() {
      // show toast
      toast({
        description: "Faculty Added Succesfully",
        status: "success",
        duration: 9000,
        isClosable: true,
        position: "top-right",
      });

      // close modal
      modalDisclosure.onClose();
    },
    refetchQueries: [{ query: GET_FACULTIES }],
  });

  return (
    <Box mb={6}>
      <Box mb={8}>
        <CustomFormControl
          label="Faculty Name"
          type="text"
          placeholder="Science"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </Box>
      <Box mb={8}>
        <CustomFormControl
          label="Description"
          type="textarea"
          placeholder="Tell us about this faculty"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </Box>
      {/* <Box mb={8}>
        <CustomFormControl
          label="Location"
          type="text"
          placeholder="Osun State, Nigeria"
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        />
      </Box> */}

      <Button
        onClick={() => {
          const school = universityData?.id;

          let input = {
            name,
            description,
            school,
          };

          addFacultyHandler({
            variables: {
              inputValue: input,
            },
          });
        }}
        isLoading={loading}
        isDisabled={!name || !description}
        mt={10}
        py={6}
        w="100%"
        colorScheme="brand"
      >
        Add Faculty
      </Button>
    </Box>
  );
};

export default AddFaculty;
