import React from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';

// components
import ManagerComponent from './ManagerComponent';
import CustomHeader from '../UI/CustomHeader';
import { useParams } from 'react-router';

export default function Manager() {
  const { id } = useParams();

  const allManagement = [
    {
      title: 'Manage Courses',
      href: `/manager/${id}/courses`,
      icon: '',
    },

    {
      title: 'Manage Faculties',
      href: `/manager/${id}/faculties`,
      icon: '',
    },

    {
      title: 'Manage Departments',
      href: `/manager/${id}/departments`,
      icon: '',
    },

    {
      title: 'Manage Levels',
      href: `/manager/${id}/levels`,
      icon: '',
    },

    {
      title: 'Manage Past Papers',
      href: '/pastPapers',
      icon: '',
    },
  ];

  return (
    <Box mt={-100} ml={-14} w='65vw'>
      <CustomHeader title='Manager' showButtons={false} />

      <Box mt={16}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
          {allManagement.map((manager, index) => {
            return (
              <ManagerComponent
                key={`0${index}`}
                title={manager.title}
                href={manager.href}
                icon={manager.icon}
              />
            );
          })}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
