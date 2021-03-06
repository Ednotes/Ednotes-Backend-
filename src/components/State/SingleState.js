import React from "react";
import img1 from "../../images/Icon material-edit.png";
import { Box, Text, Image, Flex } from "@chakra-ui/react";

export default function SingleState({ state }) {
  return (
    <Box bg="#fff" px={8} py={6} h="70px" borderRadius="10px">
      <Flex>
        <Text my="auto" mr={2} fontWeight="bold">
          {state}
        </Text>

        <Image my="auto" ml="auto" src={img1} alt="" h="14px" w="14px" />
      </Flex>
    </Box>
  );
}
