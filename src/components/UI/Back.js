import { Text, Button } from '@chakra-ui/react';
import React from 'react';
import { useHistory } from 'react-router-dom';

const Back = () => {
  const { goBack } = useHistory();

  return (
    <>
      <Button variant='ghost' fontSize='sm' mb={1} onClick={goBack}>
        Go Back
      </Button>
    </>
  );
};

export default Back;
