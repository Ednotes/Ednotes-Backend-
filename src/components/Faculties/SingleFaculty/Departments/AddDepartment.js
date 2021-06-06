import React, { useState } from "react";

// chakra
import { Box, Button, useToast } from "@chakra-ui/react";
import CustomFormControl from "../../../../components/UI/Forms/CustomFormControl";

// GraphqL
import { useMutation } from "@apollo/client";
import { ADD_DEPARTMENT } from "../../../../graphql/Mutations/Manager/Departments";
import { GET_DEPARTMENTS } from "../../../../graphql/queries/Manager/Departments";
import { useParams } from "react-router";

const AddDepartment = ({ modalDisclosure, universityData }) => {
  // chakra toast
  const toast = useToast();

  // state for input fields
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  // GRAPHQL
  const [addDepartmentHandler, { loading }] = useMutation(ADD_DEPARTMENT, {
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
    refetchQueries: [{ query: GET_DEPARTMENTS }],
  });

  const { facultyId } = useParams();

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

      <Button
        onClick={() => {
          const school = universityData?.id;
          const faculty = facultyId;

          let input = {
            name,
            description,
            school,
            faculty,
          };

          addDepartmentHandler({
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
        Add Department
      </Button>
    </Box>
  );
};

export default AddDepartment;
