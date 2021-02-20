import React from "react";

// chakra
import {
  Text,
  Box,
  Button,
  Flex,
  HStack,
  Spacer,
  InputGroup,
  Input,
  Center,
  InputRightElement,
} from "@chakra-ui/react";

// components
import CustomFormControl from "../UI/Forms/CustomFormControl";
import CustomFormControlSelect from "../UI/Forms/CustomFormControlSelect";
import { ImageIcon, DocumentIcon } from "../UI/Svg/Icons";

export default function NewCourse() {
  return (
    <>
      <Box mt={-100} ml={-14} w="65vw">
        <Text color="#fff" fontWeight="bold" fontSize="xl" mb={2}>
          Add a course
        </Text>
        <Flex>
          <InputGroup size="md" maxW="25rem" my="auto">
            <Input
              bg="#021A34"
              pr="4.5rem"
              type="text"
              border={0}
              color="white"
              // placeholder="Enter password"
            />
            <InputRightElement width="6rem">
              <Button borderRadius="0px 5px" fontWeight="regular">
                Search
              </Button>
            </InputRightElement>
          </InputGroup>

          <Spacer />

          <Box my="auto">
            <Button
              mx={2}
              w="146.88px"
              h={10}
              borderRadius="5px"
              fontSize="14px"
            >
              Save Changes
            </Button>
          </Box>
        </Flex>

        <Box mt={16}>
          <Flex justifyContent="space-between">
            <Box w={{ md: "31%" }}>
              <CustomFormControl
                label="Course Title"
                type="text"
                placeholder="Enter name of course"
              />
            </Box>

            <Box w={{ md: "65%" }}>
              <CustomFormControl
                label="Course Description"
                type="text"
                placeholder="Enter description for your course"
              />
            </Box>
          </Flex>

          <Flex mt={12} justifyContent="space-between">
            <Box w={{ md: "31%" }}>
              <CustomFormControlSelect label="Level of Study" />
            </Box>

            <Box w={{ md: "31%" }}>
              <CustomFormControlSelect label="University" />
            </Box>

            <Box w={{ md: "31%" }}>
              <CustomFormControlSelect
                options={["Science", "Technology"]}
                label="Faculty"
              />
            </Box>
          </Flex>

          <Flex mt={12} justifyContent="space-between">
            <Box w={{ md: "31%" }}>
              <CustomFormControlSelect label="State" />
            </Box>
            =
          </Flex>

          {/*  */}
          <HStack mt={10}>
            <Center
              _hover={{ borderColor: "brand.500" }}
              w="224px"
              h="224px"
              borderWidth="1px"
              cursor="pointer"
              p={10}
              flexDir="column"
              textAlign="center"
              borderRadius="12px"
              bg="white"
            >
              <ImageIcon />
              <Text fontSize="16px" mt={2} color="brand.500">
                Upload title Image
              </Text>
            </Center>

            <Center
              _hover={{ borderColor: "brand.500" }}
              w="224px"
              h="224px"
              borderWidth="1px"
              cursor="pointer"
              p={10}
              flexDir="column"
              textAlign="center"
              borderRadius="12px"
              bg="white"
            >
              <DocumentIcon />
              <Text fontSize="16px" mt={2} color="brand.500">
                Upload <br />
                Course
              </Text>
            </Center>
          </HStack>
        </Box>
      </Box>
    </>
  );
}
