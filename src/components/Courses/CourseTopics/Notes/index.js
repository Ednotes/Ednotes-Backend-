import React, { useState } from 'react';

import { Button, Flex, Box } from '@chakra-ui/react';
import { useQuery } from '@apollo/client';
import { GET_NOTES } from '../../../../graphql/queries/Manager/Notes';
import { Loader, Empty } from '../../../UI/Fetching';
import NewNote from './NewNote';
import Back from '../../../UI/Back';
import drawerAtom from '../../../../atoms/drawerAtom';
import { useRecoilValue } from 'recoil';
import SingleNote from './SingleNote';

const Notes = ({ courseId }) => {
  const drawerState = useRecoilValue(drawerAtom);
  const topicId = drawerState.currentTopicData?._id;

  const { loading, data } = useQuery(GET_NOTES, {
    variables: {
      id: topicId,
    },
  });

  const allTopicNotes = data?.get_topic_notes?.edges;

  const [createNote, setCreateNote] = useState(false);
  const [showNotes, setShowNotes] = useState(true);
  // const [singleNoteValue, setSingleNoteValue] = useState();
  // const [editMode, setEditMode] = useState(false);

  const showAllNotes = () => {
    setCreateNote(false);
    setShowNotes(true);
  };
  return (
    <Box>
      {createNote && (
        <>
          <Back showIcon mb={6} variant='solid' onClick={showAllNotes} />
          <NewNote
            // defaultValue={singleNoteValue}
            goBack={showAllNotes}
            topicId={topicId}
            courseId={courseId}
            editMode={drawerState.editNoteMode}
          />
        </>
      )}

      {showNotes && (
        <>
          {loading && <Loader />}

          {!loading && data && (
            <Flex flexDir='column' w='100%'>
              <Button
                onClick={() => {
                  setCreateNote(true);
                  setShowNotes(false);
                }}
                colorScheme='primary'
                mb={4}
                ml='auto'
                fontSize='14px'
              >
                Add New Note
              </Button>
              {allTopicNotes?.length > 0 && (
                <Flex flexDir='column' w='100%'>
                  {allTopicNotes?.map((cd) => {
                    return (
                      <SingleNote key={cd?._id} data={cd} courseId={courseId} />
                    );
                  })}
                </Flex>
              )}

              {allTopicNotes?.length === 0 && (
                <Empty text='No Notes have been added'>
                  <Button
                    onClick={() => {
                      setCreateNote(true);
                      setShowNotes(false);
                    }}
                    colorScheme='primary'
                    mt={2}
                    fontSize='14px'
                  >
                    Add New Note
                  </Button>
                </Empty>
              )}
            </Flex>
          )}
        </>
      )}
    </Box>
  );
};

export default Notes;
