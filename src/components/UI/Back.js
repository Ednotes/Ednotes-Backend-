import { Text } from '@chakra-ui/react';
import React from 'react';
import { useHistory } from 'react-router-dom';

const Back = () => {
  const { goBack } = useHistory();

  return (
    <>
      <Text fontSize='sm' cursor='pointer' mb={2} onClick={goBack}>
        Go Back
      </Text>
    </>
  );
};

export default Back;
