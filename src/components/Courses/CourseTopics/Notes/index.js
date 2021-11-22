import React from "react";

import { Button, Flex, Box, Tag } from "@chakra-ui/react";
import { useQuery } from "@apollo/client";
import { GET_NOTES } from "../../../../graphql/queries/Manager/Notes";
import { Loader, Empty } from "../../../UI/Fetching";
import drawerAtom from "../../../../atoms/drawerAtom";
import { useRecoilState } from "recoil";
import SingleNote from "./SingleNote";

const Notes = ({ courseId }) => {
	const [drawerState, setDrawerState] = useRecoilState(drawerAtom);
	const topicId = drawerState.currentTopicData?._id;

	const { loading, data } = useQuery(GET_NOTES, {
		variables: {
			id: topicId,
		},
	});

	const allTopicNotes = data?.get_topic_notes?.edges;

	const showCreateNote = () => {
		setDrawerState({
			...drawerState,
			createNote: true,
		});
	};

	return (
		<Box>
			{loading && <Loader />}

			{!loading && data && (
				<Flex flexDir="column" w="100%">
					<Flex>
						<Tag
							my="auto"
							// color='gray.500'
							fontSize="14px"
							fontWeight="bold"
						>
							{allTopicNotes?.length} Note(s)
						</Tag>
						<Button
							onClick={showCreateNote}
							colorScheme="primary"
							mb={4}
							ml="auto"
							fontSize="14px"
						>
							Add New Note
						</Button>
					</Flex>

					{allTopicNotes?.length > 0 && (
						<Flex flexDir="column" w="100%">
							{allTopicNotes?.map((cd) => {
								return (
									<SingleNote key={cd?._id} data={cd} courseId={courseId} />
								);
							})}
						</Flex>
					)}

					{allTopicNotes?.length === 0 && (
						<Empty text="No Notes have been added">
							<Button
								onClick={showCreateNote}
								colorScheme="primary"
								mt={2}
								fontSize="14px"
							>
								Add New Note
							</Button>
						</Empty>
					)}
				</Flex>
			)}
		</Box>
	);
};

export default Notes;
