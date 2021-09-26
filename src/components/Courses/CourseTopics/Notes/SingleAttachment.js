import React from "react";
import {
	Text,
	Center,
	Button,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
} from "@chakra-ui/react";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const SingleAttachment = ({ data }) => {
	// console.log("data here", data);
	const splitNote = (text) => {
		if (text.length > 20) {
			return text.slice(0, 20);
		}

		return text;
	};
	console.log("data attach", data);

	return (
		<Center
			borderWidth="1px"
			boxShadow="md"
			borderRadius="lg"
			pt={6}
			pb={5}
			px={6}
			mb={5}
			d="flex"
			flexDir="column"
			h="200px"
			fontSize="14px"
			textAlign="center"
			color="gray.500"
			fontWeight={600}
			pos="relative"
		>
			<Menu autoSelect={false}>
				<MenuButton
					as={Button}
					variant="ghost"
					pos="absolute"
					top={3}
					right={1}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						width="20px"
						height="20px"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
						/>
					</svg>
				</MenuButton>
				<MenuList>
					{/* download attachment */}
					<MenuItem
						fontWeight="500"
						fontSize="14px"
						as="a"
						href={data?.url}
						download
						icon={
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20px"
								height="20px"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
								/>
							</svg>
						}
					>
						Download Attachment
					</MenuItem>
				</MenuList>
			</Menu>

			<Text>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					width="40px"
					height="40px"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
					/>
				</svg>
			</Text>

			<Text mt={2}>{splitNote(data?.file_name)}...</Text>
			<Text fontSize="12px">
				Uploaded {dayjs(data?.date_uploaded).fromNow()}
			</Text>
		</Center>
	);
};

export default SingleAttachment;
