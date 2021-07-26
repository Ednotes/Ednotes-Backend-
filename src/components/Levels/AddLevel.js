import React, { useState } from 'react';

// chakra
import { Box, Button, useToast } from '@chakra-ui/react';
import CustomFormControl from '../UI/Forms/CustomFormControl';

// GraphqL
import { useMutation } from '@apollo/client';
import { ADD_LEVEL } from '../../graphql/Mutations/Manager/Levels';
import { GET_DEPARTMENTS } from '../../graphql/queries/Manager/Departments';
// import { useParams } from 'react-router';
import SearchableSelect from '../UI/Forms/SearchableSelect';

const AddLevel = ({ modalDisclosure, universityData }) => {
  // chakra toast
  const toast = useToast();

  // state for input fields
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [facultyId, setFacultyId] = useState();
  const [departmentId, setDepartmentId] = useState();

  // GRAPHQL
  const [addDepartmentHandler, { loading }] = useMutation(ADD_LEVEL, {
    onCompleted() {
      // show toast
      toast({
        description: 'Faculty Added Succesfully',
        status: 'success',
        duration: 9000,
        isClosable: true,
        position: 'top-right',
      });

      // close modal
      modalDisclosure.onClose();
    },
    refetchQueries: [
      { query: GET_DEPARTMENTS, variables: { id: universityData._id } },
    ],
  });

  let filteredFaculties = [];
  universityData?.faculties.forEach((fd) => {
    filteredFaculties.push({
      label: fd.name,
      value: fd._id,
    });
  });

  let filteredDepartments = [];
  universityData?.departments.forEach((fd) => {
    if (fd.faculty._id !== facultyId) return;
    filteredDepartments.push({
      label: fd.name,
      value: fd._id,
    });
  });

  return (
    <Box mb={6}>
      <Box mb={8}>
        <CustomFormControl
          label='Level Name'
          type='text'
          placeholder='Science'
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </Box>
      <Box mb={8}>
        <CustomFormControl
          label='Description'
          type='textarea'
          placeholder='Tell us about this level'
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </Box>

      <Box mb={8}>
        <SearchableSelect
          label='Faculty'
          options={filteredFaculties}
          onChange={(e) => {
            setFacultyId(e.value);
          }}
        />
      </Box>

      <Box mb={8}>
        <SearchableSelect
          label='Department'
          options={filteredDepartments}
          onChange={(e) => {
            setDepartmentId(e.value);
          }}
        />
      </Box>

      <Button
        onClick={() => {
          const school = universityData?._id;

          let input = {
            name,
            description,
            school,
            faculty: facultyId,
            dept: departmentId,
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
        w='100%'
        colorScheme='brand'
      >
        Add Level
      </Button>
    </Box>
  );
};

export default AddLevel;
