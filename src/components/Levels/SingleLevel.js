import React from 'react';

// chakra
import { Box, Text, Flex } from '@chakra-ui/react';

const SingleDepartment = ({
  title,
  description,
  faculty,
  department,
  numberOfStudents,
}) => {
  return (
    <Box px={10} py={8} borderRadius='25px' bg='white'>
      <Flex>
        <Text isTruncated mr={3} fontSize='16px' fontWeight='bold' my='auto'>
          {title}
        </Text>
        <Text fontSize='13px' my='auto' ml='auto'>
          {numberOfStudents} students
        </Text>
      </Flex>
      {/* other information */}
      <Box mt={4}>
        <Text fontSize='14px'>
          <Text as='span' fontWeight='medium'>
            {description}
          </Text>
        </Text>
        <Text fontSize='13px'>
          <Text as='span' fontWeight='medium'>
            faculty:
          </Text>{' '}
          {faculty?.name}
        </Text>
        <Text fontSize='13px'>
          <Text as='span' fontWeight='medium'>
            department:
          </Text>{' '}
          {department?.name}
        </Text>
      </Box>
    </Box>
  );
};

export default SingleDepartment;
