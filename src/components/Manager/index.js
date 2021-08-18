import React from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';

// components
import ManagerComponent from './ManagerComponent';
import CustomHeader from '../UI/CustomHeader';
import { useParams } from 'react-router';
import {
  ManageCoursesIcon,
  ManageDepartmentsIcon,
  ManageFacultiesIcon,
  ManagePastPapersIcon,
  ManageStatesIcon,
} from '../UI/Svg/ManagerIcons';

export default function Manager() {
  const { id } = useParams();

  const allManagement = [
    {
      title: 'Manage Courses',
      href: `/manager/${id}/courses`,
      icon: <ManageCoursesIcon />,
    },

    {
      title: 'Manage Faculties',
      href: `/manager/${id}/faculties`,
      icon: <ManageFacultiesIcon />,
    },

    {
      title: 'Manage Departments',
      href: `/manager/${id}/departments`,
      icon: <ManageDepartmentsIcon />,
    },

    {
      title: 'Manage Levels',
      href: `/manager/${id}/levels`,
      icon: <ManageStatesIcon />,
    },

    {
      title: 'Manage Past Papers',
      href: '/pastPapers',
      icon: <ManagePastPapersIcon />,
    },
  ];

  return (
    <Box mt={-100} ml={-14} w='65vw'>
      <CustomHeader title='Manager' showButtons={false} />

      <Box mt={16}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
          {allManagement.map((mr, index) => {
            return (
              <ManagerComponent
                key={`0${index}`}
                title={mr.title}
                href={mr.href}
              />
            );
          })}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
