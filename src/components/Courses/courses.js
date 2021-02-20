import React from "react";

// chakra
import {
  Text,
  Box,
  Input,
  Button,
  Flex,
  SimpleGrid,
  Spacer,
  Icon,
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
          <Input h={8} w="15rem" />
          <Button h={8} ml={-15} borderRadius="0px 5px" fontSize="xs">
            Search
          </Button>
          <Spacer />
          <Box>
            <Button mx={2} w="146.88px" h={8} borderRadius="5px" fontSize="xs">
              <Icon />
              Add new
            </Button>
            <Button mx={2} w="146.88px" h={8} borderRadius="5px" fontSize="xs">
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