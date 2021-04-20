import React from "react";

// chakra
import {
  Stack,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";

// components
import CustomFormControlSelect from "../UI/Forms/CustomFormControlSelect";

const Filter = () => {
  const [value, setValue] = React.useState("1");
  const [statusValue, setStatusValue] = React.useState("1");

  return (
    <>
      {/* filter */}
      <FormControl id="filter">
        <FormLabel fontSize="14px">Filter Type</FormLabel>

        <RadioGroup onChange={setValue} value={value}>
          <Stack direction="row" spacing={8}>
            <Radio size="sm" value="name" colorScheme="yellow">
              Name
            </Radio>
            <Radio size="sm" value="email" colorScheme="yellow">
              Email
            </Radio>
          </Stack>
        </RadioGroup>
      </FormControl>

      {/* status */}
      <FormControl id="status" mt={10}>
        <FormLabel fontSize="14px">Status</FormLabel>

        <RadioGroup onChange={setStatusValue} value={statusValue}>
          <Stack direction="row" spacing={8}>
            <Radio size="sm" value="name" colorScheme="yellow">
              Active
            </Radio>
            <Radio size="sm" value="email" colorScheme="yellow">
              Inactive
            </Radio>
          </Stack>
        </RadioGroup>
      </FormControl>

      <SimpleGrid mt={10} spacing={4} columns={{ base: 1, md: 2 }}>
        <Box mb={4}>
          <CustomFormControlSelect label="Universities" />
        </Box>
        <Box mb={4}>
          <CustomFormControlSelect label="Faculties" />
        </Box>
        <Box mb={4}>
          <CustomFormControlSelect label="Departments" />
        </Box>
        <Box mb={4}>
          <CustomFormControlSelect label="Level of study" />
        </Box>

        <Box mb={4}>
          <CustomFormControlSelect label="State" />
        </Box>
        <Box mb={4}>
          <CustomFormControlSelect label="Age" />
        </Box>
        <Box mb={4}>
          <CustomFormControlSelect label="Gender" />
        </Box>
        <Box mb={4}>
          <CustomFormControlSelect label="Phone Number" />
        </Box>
      </SimpleGrid>
    </>
  );
};

export default Filter;
