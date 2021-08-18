import React from 'react';

// react router
import { Link } from 'react-router-dom';

// chakra
import { Flex, Text, Button } from '@chakra-ui/react';
import {
  ManageDepartmentsIcon,
  ManageFacultiesIcon,
  ManageLevelsIcon,
  ManagePastPapersIcon,
} from '../UI/Svg/ManagerIcons';
import { ManageCoursesIcon } from '../UI/Svg/ManagerIcons';

const ManagerComponent = ({ Icon, href, title, children }) => {
  return (
    <Flex
      bg='white'
      borderRadius='md'
      px={6}
      py={6}
      h='222px'
      justifyContent='center'
      alignItems='center'
      flexDir='column'
      textAlign='center'
    >
      {title === 'Manage Courses' && <ManageCoursesIcon />}
      {title === 'Manage Faculties' && <ManageFacultiesIcon />}
      {title === 'Manage Departments' && <ManageDepartmentsIcon />}
      {title === 'Manage Levels' && <ManageLevelsIcon />}
      {title === 'Manage Past Papers' && <ManagePastPapersIcon />}

      <Text fontWeight='bold' p={3}>
        {title}
      </Text>

      <Link to={href}>
        <Button colorScheme='brand' w='125px' h='36px' p={2}>
          View
        </Button>
      </Link>
    </Flex>
  );
};

export default ManagerComponent;
