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
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Tag,
  MenuDivider,
} from '@chakra-ui/react';
import DeleteCourse from './DeleteCourse';
import EditCourse from './EditCourse';
import CourseTopics from './CourseTopics';
import { useRecoilState } from 'recoil';
import drawerAtom from '../../atoms/drawerAtom';

const SingleCourse = ({ data }) => {
  const { description, name: title, _id: id, semester } = data;

  const [drawerState, setDrawerState] = useRecoilState(drawerAtom);

  // chakra modal
  const deleteCourseDisclosure = useDisclosure();
  const editCourseDisclosure = useDisclosure();
  const topicsDisclosure = useDisclosure();
  return (
    <Box px={10} py={8} borderRadius='25px' bg='white'>
      <Flex>
        <Text mr={3} fontSize='16px' fontWeight='bold' my='auto'>
          {title}
        </Text>
        <Menu autoSelect={false}>
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
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z'
              />
            </svg>
          </MenuButton>
          <MenuList>
            <MenuItem
              icon={
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
                    d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                  />
                </svg>
              }
              fontWeight='500'
              fontSize='14px'
              onClick={() => {
                setDrawerState({
                  ...drawerState,
                  currentlyShowing: 'topics',
                  showTopics: true,
                  showNotes: false,
                });
                topicsDisclosure.onOpen();
              }}
            >
              View Topics
            </MenuItem>
            <MenuDivider />
            <MenuItem
              fontWeight='500'
              fontSize='14px'
              onClick={editCourseDisclosure.onOpen}
              icon={
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
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
                    d='M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'
                  />
                </svg>
              }
            >
              Edit Course
            </MenuItem>
            <MenuItem
              fontWeight='500'
              fontSize='14px'
              onClick={deleteCourseDisclosure.onOpen}
              color='red.500'
              icon={
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
                    d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                  />
                </svg>
              }
            >
              Delete Course
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>

      {/* other information */}
      <Box mt={4}>
        <Text fontSize='14px'>{description}</Text>
        <Tag fontSize='13px' mt={8} colorScheme='blue'>
          {semester} semester
        </Tag>
      </Box>

      {/* delete course */}
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

      {/* edit course */}
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

      {/* View Topics */}
      <Drawer
        placement='bottom'
        isOpen={topicsDisclosure.isOpen}
        onClose={topicsDisclosure.onClose}
        isFullHeight
        // finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader mt={5}>
            {drawerState?.currentlyShowing === 'topics' && (
              <> Topics for {title} </>
            )}

            {drawerState?.currentlyShowing === 'notes' && (
              <> Notes for {drawerState?.currentTopicData?.name}</>
            )}
          </DrawerHeader>

          <DrawerBody>
            <CourseTopics courseId={id} modalDisclosure={topicsDisclosure} />
          </DrawerBody>

          <DrawerFooter borderTopWidth='1px'>
            <Button variant='outline' mr={3} onClick={topicsDisclosure.onClose}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default SingleCourse;
