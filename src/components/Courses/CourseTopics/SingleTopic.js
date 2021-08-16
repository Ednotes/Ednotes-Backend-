import React from 'react';

import {
  Button,
  Flex,
  Box,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import DeleteTopic from './DeleteTopic';
import drawerAtom from '../../../atoms/drawerAtom';
import { useRecoilState } from 'recoil';

const SingleTopic = ({ setSingleTopicValue, setEditMode, data, courseId }) => {
  const showCreateTopic = () => {
    setDrawerState({
      ...drawerState,
      currentlyShowing: 'topics',
      createTopic: true,
    });
  };

  const [drawerState, setDrawerState] = useRecoilState(drawerAtom);

  const deleteDisclosure = useDisclosure();

  const moveToNotes = () => {
    setDrawerState({
      ...drawerState,
      currentlyShowing: 'notes',
      currentTopicData: data,
      showNotes: true,
      showTopics: false,
    });
  };

  return (
    <>
      {/* {showTopic && ( */}
      <Box
        borderWidth='1px'
        boxShadow='md'
        borderRadius='lg'
        pt={8}
        pb={5}
        px={6}
        cursor='pointer'
        d='flex'
        flexDir='column'
      >
        <Flex w='100%'>
          <Text color='blue.500'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              width='40px'
              height='40px'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
              />
            </svg>
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
              {/* View attachments */}
              {/* <MenuItem
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
              // onClick={topicsDisclosure.onOpen}
            >
              View Attachments
            </MenuItem>
            <MenuDivider /> */}

              {/* edit topic */}
              <MenuItem
                fontWeight='500'
                fontSize='14px'
                onClick={() => {
                  setSingleTopicValue(data);
                  showCreateTopic();
                  setEditMode(true);
                }}
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
                Edit Topic
              </MenuItem>

              {/* delete topic */}
              <MenuItem
                fontWeight='500'
                fontSize='14px'
                onClick={deleteDisclosure.onOpen}
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
                Delete Topic
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>

        <Text mt={3} fontWeight='600'>
          {data?.name}
        </Text>
        <Text mt={1} fontSize='14px'>
          {data?.description}
        </Text>

        <Button
          fontSize='14px'
          variant='ghost'
          mt={4}
          colorScheme='brand'
          fontWeight={500}
          ml='auto'
          onClick={moveToNotes}
        >
          View Notes
        </Button>

        <Modal
          size='lg'
          isOpen={deleteDisclosure.isOpen}
          onClose={deleteDisclosure.onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader mt={5}>Delete Topic</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <DeleteTopic
                topicId={data?._id}
                modalDisclosure={deleteDisclosure}
                courseId={courseId}
              />
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
      {/* )} */}

      {/* {showAllNotesForTopic && (
        <Box>
          <Back showIcon mb={6} variant='solid' onClick={backToTopic} />
          <Notes topicId={data?._id} courseId={courseId} />
        </Box>
      )} */}
    </>
  );
};

export default SingleTopic;
