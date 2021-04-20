import React, { useState } from "react";

// chakra
import { Box, Button, useToast } from "@chakra-ui/react";
import CustomFormControl from "../UI/Forms/CustomFormControl";

// Graphq;
import { useMutation } from "@apollo/client";
import { ADD_UNIVERSITY } from "../../graphql/Mutations/Manager/Universities";
import { GET_UNIVERSITIES } from "../../graphql/queries/Manager/Universities";

const AddUniversity = ({ modalDisclosure }) => {
  // chakra toast
  const toast = useToast();

  // state for input fields
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  // GRAPHQL
  const [addUniversityHandler, { loading, error, data }] = useMutation(
    ADD_UNIVERSITY,
    {
      onCompleted() {
        // show toast
        toast({
          description: "University Added Succesfully",
          status: "success",
          duration: 9000,
          isClosable: true,
          position: "top-right",
        });

        // close modal
        modalDisclosure.onClose();
      },
      refetchQueries: [{ query: GET_UNIVERSITIES }],
    }
  );

  return (
    <Box mb={6}>
      <Box mb={8}>
        <CustomFormControl
          label="University Name"
          type="text"
          placeholder="Obafemi Awolowo University"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </Box>
      <Box mb={8}>
        <CustomFormControl
          label="Description"
          type="textarea"
          placeholder="Tell us about this university"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </Box>
      <Box mb={8}>
        <CustomFormControl
          label="Location"
          type="text"
          placeholder="Osun State, Nigeria"
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        />
      </Box>

      <Button
        onClick={() => {
          let input = {
            name,
            description,
            location,
          };

          addUniversityHandler({
            variables: {
              inputValue: input,
            },
          });
        }}
        isLoading={loading}
        isDisabled={!name || !description || !location}
        mt={10}
        py={6}
        w="100%"
        colorScheme="brand"
      >
        Create University
      </Button>
    </Box>
  );
};

export default AddUniversity;
