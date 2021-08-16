import React from 'react';

import { Flex, Text, HStack, Button, useToast } from '@chakra-ui/react';
import { DELETE_TOPIC } from '../../../graphql/Mutations/Manager/Topics';
import { useMutation } from '@apollo/client';
import { GET_TOPICS } from '../../../graphql/queries/Manager/Topics';

const DeleteTopic = ({ topicId, modalDisclosure, courseId }) => {
  const toast = useToast();

  // GRAPHQL
  const [delTopic, { loading }] = useMutation(DELETE_TOPIC, {
    onCompleted() {
      // show toast
      toast({
        description: 'Topic deleted Succesfully',
        status: 'success',
        duration: 9000,
        isClosable: true,
        position: 'top-right',
      });

      // close modal
      modalDisclosure.onClose();
    },
    refetchQueries: [{ query: GET_TOPICS, variables: { id: courseId } }],
  });

  return (
    <Flex flexDir='column'>
      <Text>Are you sure you want to delete this topic?</Text>

      <HStack mt={6} mb={6} ml='auto'>
        <Button isDisabled={loading} onClick={modalDisclosure.onClose}>
          Cancel
        </Button>
        <Button
          isLoading={loading}
          onClick={() => {
            delTopic({
              variables: {
                topicId,
              },
            });
          }}
          colorScheme='red'
        >
          Delete Topic
        </Button>
      </HStack>
    </Flex>
  );
};

export default DeleteTopic;
