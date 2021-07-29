import React, { useState } from 'react';

// chakra
import { Box, Button, SimpleGrid, useToast } from '@chakra-ui/react';

// components
import CustomFormControl from '../UI/Forms/CustomFormControl';
import SearchableSelect from '../UI/Forms/SearchableSelect';
import { EDIT_COURSE } from '../../graphql/Mutations/Manager/Courses';
import { useMutation } from '@apollo/client';
import { GET_COURSES } from '../../graphql/queries/Manager/Courses';

export default function EditCourse({ data: exData, modalDisclosure }) {
  // chakra toast
  const toast = useToast();

  const [data, setData] = useState({
    name: exData?.title,
    description: exData?.description,
    semester: exData?.semester,
    courseId: exData?.id,
  });
  // GRAPHQL
  const [editCourseHandler, { loading }] = useMutation(EDIT_COURSE, {
    onCompleted() {
      // show toast
      toast({
        description: 'Course Updated Succesfully',
        status: 'success',
        duration: 9000,
        isClosable: true,
        position: 'top-right',
      });

      // close modal
      modalDisclosure.onClose();
    },
    refetchQueries: [{ query: GET_COURSES }],
  });

  const setDataHandler = (type, value) => {
    setData({
      ...data,
      [type]: value,
    });
  };

  const allSemesters = [
    {
      label: 'First Semester',
      value: 'first',
    },
    {
      label: 'Second Semester',
      value: 'second',
    },
  ];
  const defaultSemester = allSemesters.filter((sd) => {
    return sd.value === data?.semester;
  });

  return (
    <>
      <Box>
        <Box mb={8}>
          <CustomFormControl
            label='Course Title'
            type='text'
            placeholder='Enter name of course'
            onChange={(e) => setDataHandler('name', e.target.value)}
            value={data?.name}
          />
        </Box>

        <Box mb={8}>
          <CustomFormControl
            label='Course Description'
            type='textarea'
            placeholder='Enter description for your course'
            onChange={(e) => setDataHandler('description', e.target.value)}
            value={data?.description}
          />
        </Box>

        {/* <SimpleGrid mb={8} columns={{ base: 1, md: 2 }} spacing={8}>
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
        </SimpleGrid> */}

        <SimpleGrid mb={8} columns={{ base: 1, md: 2 }} spacing={8}>
          {/* <Box>
            <SearchableSelect
              label='Level of Study'
              options={filteredLevels}
              onChange={(e) => setDataHandler('level', e.value)}
            />
          </Box> */}

          <SearchableSelect
            label='Semester'
            options={allSemesters}
            onChange={(e) => setDataHandler('semester', e.value)}
            defaultValue={defaultSemester}
          />
        </SimpleGrid>
      </Box>

      <Button
        isDisabled={!data.name || !data.description || !data.semester}
        onClick={() => {
          editCourseHandler({
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
        Update Course
      </Button>
    </>
  );
}
