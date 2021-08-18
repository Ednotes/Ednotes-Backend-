import React from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';

// components
import ManagerComponent from './ManagerComponent';
import CustomHeader from '../UI/CustomHeader';
import { useParams } from 'react-router';

import CourseImage from './../../images/Path 984.png';
import FacultiesImage from './../../images/Mask Group 11.png';
import DepartmentsImage from './../../images/Mask Group 9.png';
import LevelsImage from './../../images/Mask Group 6.png';
import PastPapersImage from './../../images/Mask Group 12.png';

export default function Manager() {
  const { id } = useParams();

  const allManagement = [
    {
      title: 'Manage Courses',
      href: `/manager/${id}/courses`,
      icon: CourseImage,
    },

    {
      title: 'Manage Faculties',
      href: `/manager/${id}/faculties`,
      icon: FacultiesImage,
    },

    {
      title: 'Manage Departments',
      href: `/manager/${id}/departments`,
      icon: DepartmentsImage,
    },

    {
      title: 'Manage Levels',
      href: `/manager/${id}/levels`,
      icon: LevelsImage,
    },

    {
      title: 'Manage Past Papers',
      href: '/pastPapers',
      icon: PastPapersImage,
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
