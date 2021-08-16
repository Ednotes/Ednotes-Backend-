import { useMutation } from '@apollo/client';
import { Box, Button, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import {
  ADD_TOPIC,
  EDIT_TOPIC,
} from '../../../graphql/Mutations/Manager/Topics';
import { GET_TOPICS } from '../../../graphql/queries/Manager/Topics';
import CustomFormControl from '../../UI/Forms/CustomFormControl';

const NewTopic = ({ courseId, goBack, defaultValue, editMode }) => {
  const toast = useToast();

  const [data, setData] = useState({
    title: defaultValue?.name,
    description: defaultValue?.description,
  });

  const setDataHandler = (type, value) => {
    setData({
      ...data,
      [type]: value,
    });
  };

  const [addTopicHandler, { loading }] = useMutation(ADD_TOPIC, {
    onCompleted() {
      toast({
        description: 'Topic Added Succesfully',
        status: 'success',
        duration: 9000,
        isClosable: true,
        position: 'top-right',
      });
      setData({
        title: '',
        description: '',
      });
      goBack();
    },
    refetchQueries: { query: GET_TOPICS, variables: { id: courseId } },
  });

  const [editTopicHandler, { loading: editLoading }] = useMutation(EDIT_TOPIC, {
    onCompleted() {
      toast({
        description: 'Topic updated Succesfully',
        status: 'success',
        duration: 9000,
        isClosable: true,
        position: 'top-right',
      });
      setData({
        title: '',
        description: '',
      });
      goBack();
    },
    refetchQueries: { query: GET_TOPICS, variables: { id: courseId } },
  });

  return (
    <Box>
      <Box mb={8}>
        <CustomFormControl
          label='Topic Title'
          type='text'
          placeholder='Enter topic title'
          onChange={(e) => setDataHandler('title', e.target.value)}
          value={data?.title}
        />
      </Box>

      <Box mb={8}>
        <CustomFormControl
          label='Topic Description'
          type='textarea'
          placeholder='Enter topic description'
          onChange={(e) => setDataHandler('description', e.target.value)}
          value={data?.description}
        />
      </Box>

      <Button
        isDisabled={!data.title || !data.description}
        colorScheme='primary'
        w='100%'
        h='48px'
        isLoading={loading || editLoading}
        onClick={() => {
          if (editMode) {
            editTopicHandler({
              variables: {
                topicId: defaultValue?._id,
                name: data.title,
                description: data.description,
              },
            });
          } else {
            addTopicHandler({
              variables: {
                course: courseId,
                name: data.title,
                description: data.description,
              },
            });
          }
        }}
      >
        {editMode ? 'Update Course Topic' : ' Create Course Topic'}
      </Button>
    </Box>
  );
};

export default NewTopic;
