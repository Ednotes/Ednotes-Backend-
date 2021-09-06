import { useMutation } from "@apollo/client";
import { Box, Button, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import drawerAtom from "../../../../atoms/drawerAtom";
import {
	ADD_NOTE,
	EDIT_NOTE,
} from "../../../../graphql/Mutations/Manager/Notes";
import { GET_NOTES } from "../../../../graphql/queries/Manager/Notes";
import CustomFormControl from "../../../UI/Forms/CustomFormControl";

const NewNote = ({ courseId, goBack }) => {
	const toast = useToast();

	const drawerState = useRecoilValue(drawerAtom);
	const topicId = drawerState.currentTopicData?._id;

	const editMode = drawerState.editNoteMode;
	const defaultValue = drawerState.currentNoteData;

	const [data, setData] = useState({
		title: defaultValue?.name,
		text: defaultValue?.text,
	});

	const setDataHandler = (type, value) => {
		setData({
			...data,
			[type]: value,
		});
	};

	const [addNoteHandler, { loading }] = useMutation(ADD_NOTE, {
		onCompleted() {
			toast({
				description: "Note Added Succesfully",
				status: "success",
				duration: 9000,
				isClosable: true,
				position: "top-right",
			});
			setData({
				title: "",
				description: "",
			});
			goBack();
		},
		refetchQueries: [{ query: GET_NOTES, variables: { id: topicId } }],
	});

	const [editNoteHandler, { loading: editLoading }] = useMutation(EDIT_NOTE, {
		onCompleted() {
			toast({
				description: "Note updated Succesfully",
				status: "success",
				duration: 9000,
				isClosable: true,
				position: "top-right",
			});
			setData({
				title: "",
				description: "",
			});
			goBack();
		},
		refetchQueries: [{ query: GET_NOTES, variables: { id: topicId } }],
	});

	return (
		<Box>
			<Box mb={8}>
				<CustomFormControl
					label="Note Title"
					type="text"
					placeholder="Enter note title"
					onChange={(e) => setDataHandler("title", e.target.value)}
					value={data?.title}
				/>
			</Box>

			<Box mb={8}>
				<CustomFormControl
					label="Note text"
					type="textarea"
					rows={10}
					placeholder="Enter Note text"
					onChange={(e) => setDataHandler("text", e.target.value)}
					value={data?.text}
				/>
			</Box>

			<Button
				isDisabled={!data.title || !data.text}
				colorScheme="primary"
				w="100%"
				h="48px"
				isLoading={loading || editLoading}
				onClick={() => {
					if (editMode) {
						editNoteHandler({
							variables: {
								noteId: defaultValue?._id,
								name: data.title,
								text: data.text,
							},
						});
					} else {
						addNoteHandler({
							variables: {
								course: courseId,
								courseTopic: topicId,
								name: data.title,
								text: data.text,
							},
						});
					}
				}}
			>
				{editMode ? "Update Note" : " Create Note"}
			</Button>
		</Box>
	);
};

export default NewNote;
