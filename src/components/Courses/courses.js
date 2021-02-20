import React from "react";

// chakra
import {
  Text,
  Box,
  Button,
  Flex,
  SimpleGrid,
  Spacer,
  Icon,
  InputGroup,
  Input,
  InputRightElement,
} from "@chakra-ui/react";

// components
import SingleCourse from "./SingleCourse";

export default function courses() {
  return (
    <>
      <Box mt={-100} ml={-14} w="65vw">
        <Text color="#fff" fontWeight="bold" fontSize="xl" mb={2}>
          Courses
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
              <Icon />
              Add new
            </Button>
            <Button
              mx={2}
              w="146.88px"
              h={10}
              borderRadius="5px"
              fontSize="14px"
            >
              <Icon />
              Filters
            </Button>
          </Box>
        </Flex>

        <Box mt={16}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
            <SingleCourse
              title="a"
              outline="aefa"
              department="afa"
              university="afafa"
            />

            <SingleCourse
              title="a"
              outline="aefa"
              department="afa"
              university="afafa"
            />

            <SingleCourse
              title="a"
              outline="aefa"
              department="afa"
              university="afafa"
            />

            <SingleCourse
              title="a"
              outline="aefa"
              department="afa"
              university="afafa"
            />
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
}
