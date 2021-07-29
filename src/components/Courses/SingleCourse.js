import React from 'react';

// chakra
import {
  Box,
  Text,
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import DeleteCourse from './DeleteCourse';
import EditCourse from './EditCourse';

const SingleCourse = ({ description, title, id, semester }) => {
  // chakra modal
  const deleteCourseDisclosure = useDisclosure();
  const editCourseDisclosure = useDisclosure();

  return (
    <Box px={10} py={8} borderRadius='25px' bg='white'>
      <Flex>
        <Text mr={3} fontSize='16px' fontWeight='bold' my='auto'>
          {title}
        </Text>
        <Menu>
          <MenuButton as={Button} variant='ghost' ml='auto'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              width='20px'
              height='20px'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z'
              />
            </svg>
          </MenuButton>
          <MenuList>
            <MenuItem fontSize='14px' onClick={editCourseDisclosure.onOpen}>
              Edit Course
            </MenuItem>
            <MenuItem fontSize='14px' onClick={deleteCourseDisclosure.onOpen}>
              Delete Course
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>

      {/* other information */}
      <Box mt={4}>
        <Text fontSize='14px'>{description}</Text>
      </Box>

      <Modal
        size='lg'
        isOpen={deleteCourseDisclosure.isOpen}
        onClose={deleteCourseDisclosure.onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader mt={5}>Delete Course</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <DeleteCourse
              courseId={id}
              modalDisclosure={deleteCourseDisclosure}
            />
          </ModalBody>
        </ModalContent>
      </Modal>

      <Modal
        size='lg'
        isOpen={editCourseDisclosure.isOpen}
        onClose={editCourseDisclosure.onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader mt={5}>Edit Course</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <EditCourse
              data={{
                id,
                title,
                description,
                semester,
              }}
              courseId={id}
              modalDisclosure={editCourseDisclosure}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default SingleCourse;
