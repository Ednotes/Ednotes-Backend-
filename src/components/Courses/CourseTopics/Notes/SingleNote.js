import { useMutation } from '@apollo/client';
import {
  Box,
  SimpleGrid,
  Text,
  Center,
  Input,
  useToast,
  Spinner,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import drawerAtom from '../../../../atoms/drawerAtom';
import { UPLOAD_NOTE_ATTACHMENT } from '../../../../graphql/Mutations/Manager/Notes';
import { GET_NOTES } from '../../../../graphql/queries/Manager/Notes';
import SingleAttachment from './SingleAttachment';

const SingleNote = ({ data }) => {
  const drawerState = useRecoilValue(drawerAtom);
  const topicId = drawerState.currentTopicData?._id;

  const splitNote = (text) => {
    if (text.length > 200) {
      return text.slice(0, 200);
    }

    return text;
  };

  const [descToShow, setDescToShow] = useState(splitNote(data?.text));
  const [expanded, setExpanded] = useState(false);
  const toast = useToast();

  const [uploadNoteAttachmentHandler, { loading }] = useMutation(
    UPLOAD_NOTE_ATTACHMENT,
    {
      onCompleted() {
        toast({
          description: 'Note Attachment Added Succesfully',
          status: 'success',
          duration: 9000,
          isClosable: true,
          position: 'top-right',
        });
      },
      refetchQueries: { query: GET_NOTES, variables: { id: topicId } },
    }
  );

  const hiddenFileInput = React.useRef(null);
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  return (
    <Box
      borderWidth='1px'
      boxShadow='md'
      borderRadius='lg'
      pt={6}
      pb={5}
      px={6}
      d='flex'
      flexDir='column'
      maxHeight='60vh'
      overflowY='auto'
    >
      <Text fontWeight='bold'>{data?.name}</Text>
      <Text mt={1} fontSize='14px'>
        {descToShow}
        {data?.text.length > 200 && (
          <Text
            onClick={() => {
              if (expanded) {
                setDescToShow(splitNote(data?.text));
                setExpanded(false);
              } else {
                setDescToShow(data?.text);
                setExpanded(true);
              }
            }}
            as='span'
            color='blue.500'
            fontWeight={600}
            cursor='pointer'
          >
            ... {expanded ? 'Read less' : 'Read more'}
          </Text>
        )}
      </Text>

      {/* Attachments */}
      <SimpleGrid mt={5} columnGap={5} columns={{ base: 1, md: 4 }}>
        <Input
          type='file'
          ref={hiddenFileInput}
          d='none'
          onChange={(e) => {
            uploadNoteAttachmentHandler({
              variables: {
                file: e.target.files[0],
                lectureNoteId: data?._id,
              },
            });
          }}
        />
        <Center
          cursor='pointer'
          borderColor='gray.300'
          borderRadius='md'
          borderWidth='1px'
          borderStyle='dashed'
          fontSize='14px'
          _hover={{ boxShadow: 'md' }}
          onClick={handleClick}
          h='200px'
        >
          {loading && <Spinner />}

          {!loading && '+ Add Attachment'}
        </Center>

        {data?.noteAttachments?.map((na) => {
          return <SingleAttachment key={na?._id} data={na} />;
        })}
      </SimpleGrid>
    </Box>
  );
};

export default SingleNote;
