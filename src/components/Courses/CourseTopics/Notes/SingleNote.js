import { useMutation } from "@apollo/client";
import {
	Box,
	SimpleGrid,
	Text,
	Flex,
	Center,
	Input,
	useToast,
	Spinner,
	IconButton,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import drawerAtom from "../../../../atoms/drawerAtom";
import { UPLOAD_NOTE_ATTACHMENT } from "../../../../graphql/Mutations/Manager/Notes";
import { GET_NOTES } from "../../../../graphql/queries/Manager/Notes";
import SingleAttachment from "./SingleAttachment";

const SingleNote = ({ data }) => {
	const [drawerState, setDrawerState] = useRecoilState(drawerAtom);
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
					description: "Note Attachment Added Succesfully",
					status: "success",
					duration: 9000,
					isClosable: true,
					position: "top-right",
				});
			},
			onError(error) {
				// error.graphQLErrors[0]["message"]["message"]
				toast({
					description: error.message,
					status: "error",
					duration: 9000,
					isClosable: true,
					position: "top-right",
				});

				// console.log(
				// 	"new err",
				// 	error,
				// 	JSON.stringify(error),
				// 	"zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz",
				// 	error.graphQLErrors[0]["message"]["message"]
				// );
			},
			refetchQueries: [{ query: GET_NOTES, variables: { id: topicId } }],
		}
	);

	const hiddenFileInput = React.useRef(null);
	const handleClick = () => {
		hiddenFileInput.current.click();
	};

	const [showRest, setShowRest] = useState(false);

	const editNoteHandler = () => {
		setDrawerState({
			...drawerState,
			editNoteMode: true,
			currentNoteData: data,
			createNote: true,
		});
	};

	return (
		<Box
			borderWidth="1px"
			boxShadow="md"
			borderRadius="lg"
			pt={6}
			pb={5}
			px={6}
			d="flex"
			flexDir="column"
			maxHeight="60vh"
			overflowY="auto"
			mb={5}
		>
			<Flex>
				<Flex my="auto">
					<Text my="auto" fontWeight="bold">
						{data?.name}
					</Text>

					<IconButton
						onClick={editNoteHandler}
						variant="ghost"
						size="sm"
						borderRadius="full"
						ml={2}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							width="16px"
							height="16px"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
							/>
						</svg>
					</IconButton>
				</Flex>

				<IconButton
					cursor="pointer"
					onClick={() => {
						setShowRest(!showRest);
					}}
					ml="auto"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20px"
						height="20px"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M19 9l-7 7-7-7"
						/>
					</svg>
				</IconButton>
			</Flex>

			{showRest && (
				<>
					<Text mt={1} fontSize="14px">
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
								as="span"
								color="blue.500"
								fontWeight={600}
								cursor="pointer"
							>
								... {expanded ? "Read less" : "Read more"}
							</Text>
						)}
					</Text>

					{/* Attachments */}
					<SimpleGrid mt={5} columnGap={5} columns={{ base: 1, md: 4 }}>
						<Input
							type="file"
							ref={hiddenFileInput}
							d="none"
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
							cursor="pointer"
							borderColor="gray.300"
							borderRadius="md"
							borderWidth="1px"
							borderStyle="dashed"
							fontSize="14px"
							_hover={{ boxShadow: "md" }}
							onClick={handleClick}
							h="200px"
						>
							{loading && <Spinner />}

							{!loading && "+ Add Attachment"}
						</Center>

						{data?.noteAttachments?.map((na) => {
							return <SingleAttachment key={na?._id} data={na} />;
						})}
					</SimpleGrid>
				</>
			)}
		</Box>
	);
};

export default SingleNote;
