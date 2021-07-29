import React, { useState } from 'react';

// chakra
import { Box, Button, SimpleGrid, useToast } from '@chakra-ui/react';

// components
import CustomFormControl from '../UI/Forms/CustomFormControl';
import SearchableSelect from '../UI/Forms/SearchableSelect';
import { ADD_COURSE } from '../../graphql/Mutations/Manager/Courses';
import { GET_DEPARTMENTS } from '../../graphql/queries/Manager/Departments';
import { useMutation } from '@apollo/client';

const CreateNewCourse = ({ universityData, modalDisclosure }) => {
  // chakra toast
  const toast = useToast();

  const [data, setData] = useState({
    name: '',
    description: '',
    school: universityData?._id,
    faculty: '',
    dept: '',
    level: '',
    semester: '',
  });
  // GRAPHQL
  const [addCourseHandler, { loading }] = useMutation(ADD_COURSE, {
    onCompleted() {
      // show toast
      toast({
        description: 'Course Added Succesfully',
        status: 'success',
        duration: 9000,
        isClosable: true,
        position: 'top-right',
      });

      // close modal
      modalDisclosure.onClose();
    },
    refetchQueries: [
      { query: GET_DEPARTMENTS, variables: { id: universityData?._id } },
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
  universityData?.departments?.forEach((fd) => {
    if (fd.faculty._id !== data?.faculty) return;
    filteredDepartments.push({
      label: fd.name,
      value: fd._id,
    });
  });

  let filteredLevels = [];
  universityData?.levels?.forEach((fd) => {
    if (fd?.dept?._id !== data?.dept) return;
    filteredLevels.push({
      label: fd.name,
      value: fd._id,
    });
  });

  const setDataHandler = (type, value) => {
    setData({
      ...data,
      [type]: value,
    });
  };

  return (
    <>
      <Box>
        <Box mb={8}>
          <CustomFormControl
            label='Course Title'
            type='text'
            placeholder='Enter name of course'
            onChange={(e) => setDataHandler('name', e.target.value)}
          />
        </Box>

        <Box mb={8}>
          <CustomFormControl
            label='Course Description'
            type='textarea'
            placeholder='Enter description for your course'
            onChange={(e) => setDataHandler('description', e.target.value)}
          />
        </Box>

        <SimpleGrid mb={8} columns={{ base: 1, md: 2 }} spacing={8}>
          <SearchableSelect
            label='Faculty'
            options={filteredFaculties}
            onChange={(e) => setDataHandler('faculty', e.value)}
          />

          <SearchableSelect
            label='Departments'
            options={filteredDepartments}
            onChange={(e) => setDataHandler('dept', e.value)}
          />
        </SimpleGrid>

        <SimpleGrid mb={8} columns={{ base: 1, md: 2 }} spacing={8}>
          <Box>
            <SearchableSelect
              label='Level of Study'
              options={filteredLevels}
              onChange={(e) => setDataHandler('level', e.value)}
            />
          </Box>

          <SearchableSelect
            label='Semester'
            options={[
              {
                label: 'First Semester',
                value: 'first',
              },
              {
                label: 'Second Semester',
                value: 'second',
              },
            ]}
            onChange={(e) => setDataHandler('semester', e.value)}
          />
        </SimpleGrid>

        {/* <HStack mt={10}>
          <Center
            _hover={{ borderColor: 'brand.500' }}
            w='224px'
            h='224px'
            borderWidth='1px'
            cursor='pointer'
            p={10}
            flexDir='column'
            textAlign='center'
            borderRadius='12px'
            bg='white'
          >
            <ImageIcon />
            <Text fontSize='16px' mt={2} color='brand.500'>
              Upload title Image
            </Text>
          </Center>

          <Center
            _hover={{ borderColor: 'brand.500' }}
            w='224px'
            h='224px'
            borderWidth='1px'
            cursor='pointer'
            p={10}
            flexDir='column'
            textAlign='center'
            borderRadius='12px'
            bg='white'
          >
            <DocumentIcon />
            <Text fontSize='16px' mt={2} color='brand.500'>
              Upload <br />
              Course
            </Text>
          </Center>
        </HStack>
     */}
      </Box>

      <Button
        isDisabled={
          !data.name ||
          !data.description ||
          !data.dept ||
          !data.faculty ||
          !data.school ||
          !data.level
        }
        onClick={() => {
          addCourseHandler({
            variables: data,
          });
        }}
        mt={10}
        py={6}
        mb={5}
        w='100%'
        colorScheme='brand'
        isLoading={loading}
      >
        Create Course
      </Button>
    </>
  );
};

export default CreateNewCourse;
