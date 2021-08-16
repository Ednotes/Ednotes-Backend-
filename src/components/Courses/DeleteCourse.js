import { useMutation } from '@apollo/client';
import { Flex, HStack, Text, Button, useToast } from '@chakra-ui/react';
import React from 'react';
import { useParams } from 'react-router';
import { DELETE_COURSE } from '../../graphql/Mutations/Manager/Courses';
import { GET_COURSES, GET_SCHOOL } from '../../graphql/queries/Manager/Courses';

const DeleteCourse = ({ modalDisclosure, courseId }) => {
  const toast = useToast();

  const { id } = useParams();

  // GRAPHQL
  const [delCourse, { loading }] = useMutation(DELETE_COURSE, {
    onCompleted() {
      // show toast
      toast({
        description: 'Course deleted Succesfully',
        status: 'success',
        duration: 9000,
        isClosable: true,
        position: 'top-right',
      });

      // close modal
      modalDisclosure.onClose();
    },
    refetchQueries: [
      { query: GET_SCHOOL, variables: { id } },
      { query: GET_COURSES },
    ],
  });

  return (
    <Flex flexDir='column'>
      <Text>Are you sure you want to delete this course?</Text>

      <HStack mt={6} mb={6} ml='auto'>
        <Button isDisabled={loading} onClick={modalDisclosure.onClose}>
          Cancel
        </Button>
        <Button
          isLoading={loading}
          onClick={() => {
            delCourse({
              variables: {
                courseId,
              },
            });
          }}
          colorScheme='red'
        >
          Delete Course
        </Button>
      </HStack>
    </Flex>
  );
};

export default DeleteCourse;
