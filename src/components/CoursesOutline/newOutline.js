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

export default function NewOutline() {
  return (
    <>
      <Box mt={-100} ml={-14} w="65vw">
        <Text color="#fff" fontWeight="bold" fontSize="xl" mb={2}>
          Add a course outline
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
          <Flex mt={12} justifyContent="space-between">
            <Box w={{ md: "31%" }}>
              <CustomFormControlSelect label="Title" />
            </Box>

            <Box w={{ md: "31%" }}>
              <CustomFormControlSelect label="Course" />
            </Box>

            <Box w={{ md: "31%" }}>
              <CustomFormControlSelect label="Level of study" />
            </Box>
          </Flex>

          <Flex mt={12} justifyContent="space-between">
            <Box w={{ md: "31%" }}>
              <CustomFormControlSelect label="Department" />
            </Box>

            <Box w={{ md: "31%" }}>
              <CustomFormControlSelect label="Faculty" />
            </Box>

            <Box w={{ md: "31%" }}>
              <CustomFormControlSelect label="University" />
            </Box>
          </Flex>

          <Flex mt={12} justifyContent="space-between">
            <Box w={{ md: "31%" }}>
              <CustomFormControlSelect label="State" />
            </Box>
            =
          </Flex>
        </Box>
      </Box>
    </>
  );
}
