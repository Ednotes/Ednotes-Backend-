import React from "react";

// chakra
import { Box, Text, Flex } from "@chakra-ui/react";
export default function SingleOutline({
  title,
  department,
  university,
  state,
}) {
  return (
    <Box bg="#fff" px={8} py={6} borderRadius="10px">
      <Box>
        <Flex mb={4}>
          <Text fontWeight="bold">{title}</Text>

          <Text my="auto" ml="auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 22.837 22.837"
            >
              <path
                id="Icon_material-edit"
                data-name="Icon material-edit"
                d="M4.5,22.576v4.757H9.257L23.287,13.3,18.53,8.546ZM26.966,9.624a1.263,1.263,0,0,0,0-1.789L24,4.867a1.263,1.263,0,0,0-1.789,0L19.888,7.189l4.757,4.757,2.321-2.321Z"
                transform="translate(-4.5 -4.496)"
              />
            </svg>
          </Text>
        </Flex>

        <Text fontSize="14px">
          <Text as="span" fontWeight="medium">
            Department:
          </Text>{" "}
          {department}
        </Text>
        <Text fontSize="14px">
          <Text as="span" fontWeight="medium">
            University:
          </Text>{" "}
          {university}
        </Text>
        <Text fontSize="14px">
          <Text as="span" fontWeight="medium">
            State:
          </Text>{" "}
          {state}
        </Text>
      </Box>
    </Box>
  );
}
