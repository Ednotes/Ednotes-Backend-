import {
  Box,
  Text,
  Button,
  Flex,
  SimpleGrid,
  Center,
  Input,
  Image,
  Spacer,
  Icon,
  FormLabel,
  FormControl,
  Select,
} from "@chakra-ui/react";
import React from "react";
import img1 from "../../images/Icon material-edit.png";
export default function AddFaculties() {
  return (
    <Box mt={-100} ml={-14}>
      <Text color="#fff" fontWeight="bold" fontSize="xl" mb={2}>
        Add A Faculties
      </Text>
      <Flex>
        <Input h={8} w="15rem" />
        <Button h={8} ml={-15} borderRadius="0px 5px" fontSize="xs">
          Search
        </Button>
        <Spacer />
        <Box>
          <Button
            mr={14}
            w="146.88px"
            h={8}
            borderRadius="5px"
            fontSize="xs"
          >
            <Icon />
            Save changes
          </Button>
        </Box>
      </Flex>
      <Box mt={16}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
          <Box>
            <Flex>
              <Box mx={8}>
                <FormControl id="name">
                  <FormLabel fontWeight="semibold">Name</FormLabel>
                  <Input
                    bg="#fff"
                    w="236px"
                    h="56px"
                    borderRadius="10px"
                    type="text"
                  />
                </FormControl>
              </Box>
              <Box mx={8}>
              <FormLabel fontWeight="semibold">University</FormLabel>
                <Select
                  placeholder="Select option"
                  bg="#fff"
                  w="236px"
                  h="56px"
                  borderRadius="10px"
                  type="text"
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </Box>
              <Box mx={8}>
              <FormLabel fontWeight="semibold">State</FormLabel>
                <Select
                  placeholder="Select option"
                  bg="#fff"
                  w="236px"
                  h="56px"
                  borderRadius="10px"
                  type="text"
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </Box>
            </Flex>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}
