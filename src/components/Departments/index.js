import React from "react";

// chakra
import {
	Box,
	SimpleGrid,
	Flex,
	Center,
	Text,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
} from "@chakra-ui/react";

// react-router-dom
import { useParams } from "react-router-dom";

// graphql
import { useQuery } from "@apollo/client";
import { GET_DEPARTMENTS } from "../../graphql/queries/Manager/Departments";

// components
import SingleDepartment from "./SingleDepartment";
import CustomHeader from "../../components/UI/CustomHeader";
import { Empty, Loader } from "../../components/UI/Fetching";
import AddDepartment from "./AddDepartment";
import Back from "../UI/Back";

export default function Departments() {
	// chakra modal
	const addDepartmentDisclosure = useDisclosure();

	// university id
	const { id } = useParams();

	// Graphql
	const { data, loading } = useQuery(GET_DEPARTMENTS, {
		variables: {
			id,
		},
	});

	const allDepartments = data?.school?.departments;
	const schoolData = data?.school;

	return (
		<>
			<Box mt={-100} ml={-14} w="65vw">
				{/* header */}
				<CustomHeader
					title="Departments"
					onAddNewButtonClick={addDepartmentDisclosure.onOpen}
				/>

				<Box mt={16}>
					<Back />
					{loading && <Loader />}
					{!loading && data && (
						<Flex flexDir="column" w="100%">
							<Center flexDir="column" bg="gray.200" py={5} mb={5}>
								<Text fontWeight="bold">{schoolData?.name}</Text>
								<Text fontSize="sm">{schoolData?.faculty?.name}</Text>
							</Center>

							<SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
								{allDepartments?.map((singleDepartmentData) => {
									return (
										<SingleDepartment
											title={singleDepartmentData?.name}
											description={singleDepartmentData?.description}
											faculty={singleDepartmentData?.faculty}
											pay_per_semester={singleDepartmentData?.pay_per_semester}
										/>
									);
								})}
							</SimpleGrid>

							{allDepartments?.length === 0 && (
								<Empty text="No Departments have been added" />
							)}
						</Flex>
					)}
				</Box>
			</Box>

			<Modal
				isOpen={addDepartmentDisclosure.isOpen}
				onClose={addDepartmentDisclosure.onClose}
			>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Add Department</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<AddDepartment
							universityData={schoolData}
							modalDisclosure={addDepartmentDisclosure}
						/>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
}
