import React from "react";
import { Box, Text, Flex, Image, Spacer } from "@chakra-ui/react";
import img1 from "../../images/Icon material-edit.png";
export default function SingleOutline({
  title,
  department,
  university,
  state,
}) {
  return (
    <Box bg="#fff" px={8} py={6} borderRadius="10px">
      <Box>
        <Flex mb={3}>
          <Text mr={2} fontWeight="bold" fontSize="16px">
            {title}
          </Text>
          <Spacer />
          <Image ml="auto" src={img1} alt="" h="14px" w="14px" />
        </Flex>

        <Text fontSize="14px">Department: {department}</Text>
        <Text fontSize="14px">University: {university}</Text>
        <Text fontSize="14px">State: {state}</Text>
      </Box>
    </Box>
  );
}
