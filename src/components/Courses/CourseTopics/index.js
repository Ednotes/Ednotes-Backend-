import { useQuery } from '@apollo/client';
import { Button, Flex, Box, SimpleGrid } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import drawerAtom from '../../../atoms/drawerAtom';
import { GET_TOPICS } from '../../../graphql/queries/Manager/Topics';
import Back from '../../UI/Back';
import { Empty, Loader } from '../../UI/Fetching';
import NewTopic from './NewTopic';
import Notes from './Notes';
import SingleTopic from './SingleTopic';

// useRecoilState;

const CourseTopics = ({ courseId }) => {
  const { loading, data } = useQuery(GET_TOPICS, {
    variables: {
      id: courseId,
    },
  });

  const [drawerState, setDrawerState] = useRecoilState(drawerAtom);
  const allCourseTopics = data?.get_course_topics?.edges;

  const [singleTopicValue, setSingleTopicValue] = useState();
  const [editMode, setEditMode] = useState(false);

  const showAllTopics = () => {
    setDrawerState({
      ...drawerState,
      showTopics: true,
      showNotes: false,
      createTopic: false,
    });
  };

  return (
    <Box mb={6}>
      {drawerState.showTopics && drawerState.createTopic && (
        <>
          <Back showIcon mb={6} variant='solid' onClick={showAllTopics} />
          <NewTopic
            defaultValue={singleTopicValue}
            goBack={showAllTopics}
            courseId={courseId}
            editMode={editMode}
          />
        </>
      )}

      {drawerState.showTopics &&
        !drawerState.createTopic &&
        !drawerState.showNotes && (
          <>
            {loading && <Loader />}

            {!loading && data && (
              <Flex flexDir='column'>
                <Button
                  onClick={() => {
                    setDrawerState({
                      ...drawerState,
                      showTopics: true,
                      createTopic: true,
                    });
                  }}
                  colorScheme='primary'
                  mb={4}
                  ml='auto'
                  fontSize='14px'
                >
                  Add New Topic
                </Button>
                {allCourseTopics?.length > 0 && (
                  <Flex flexDir='column' w='100%'>
                    <SimpleGrid
                      columns={{ base: 1, md: 2, lg: 3 }}
                      spacing={5}
                      mb={10}
                    >
                      {allCourseTopics?.map((cd) => {
                        return (
                          <SingleTopic
                            setSingleTopicValue={setSingleTopicValue}
                            setEditMode={setEditMode}
                            data={cd}
                            courseId={courseId}
                          />
                        );
                      })}
                    </SimpleGrid>
                  </Flex>
                )}

                {allCourseTopics?.length === 0 && (
                  <Empty text='No Topics have been added'>
                    <Button
                      onClick={() => {
                        setDrawerState({
                          ...drawerState,
                          showTopics: true,
                          createTopic: true,
                        });
                      }}
                      colorScheme='primary'
                      mt={2}
                      fontSize='14px'
                    >
                      Add New Topic
                    </Button>
                  </Empty>
                )}
              </Flex>
            )}
          </>
        )}

      {!drawerState.showTopics && drawerState.showNotes && (
        <Box>
          <Back showIcon mb={6} variant='solid' onClick={showAllTopics} />
          <Notes courseId={courseId} />
        </Box>
      )}
    </Box>
  );
};

export default CourseTopics;
