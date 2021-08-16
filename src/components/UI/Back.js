import { Button } from '@chakra-ui/react';
import React from 'react';
import { useHistory } from 'react-router-dom';

const Back = ({ onClick, showIcon, variant, mb }) => {
  const { goBack } = useHistory();

  return (
    <>
      <Button
        leftIcon={
          showIcon && (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              width='20px'
              height='20px'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M10 19l-7-7m0 0l7-7m-7 7h18'
              />
            </svg>
          )
        }
        variant={variant || 'ghost'}
        fontSize='sm'
        mb={mb}
        onClick={onClick || goBack}
      >
        Go Back
      </Button>
    </>
  );
};

export default Back;
