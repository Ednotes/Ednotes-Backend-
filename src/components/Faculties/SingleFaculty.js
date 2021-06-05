import React from "react";
// import img1 from "../../images/Icon material-edit.png";
import { Box, Text, Flex, Spacer } from "@chakra-ui/react";

const singleFaculty = ({ description, name, school }) => {
  return (
    <Flex
      flexDir="column"
      // alignItems="center"
      justifyContent="center"
      bg="#fff"
      px={8}
      py={6}
      h="160px"
      borderRadius="10px"
    >
      <Box>
        <Flex mb={3}>
          <Text fontWeight="bold" mr={2} fontSize="16px">
            {name}
          </Text>
          <Spacer />
          {/* <Image my="auto" ml="auto" src={img1} alt="" h="14px" w="14px" /> */}
        </Flex>
        <Text fontSize="14px">{description}</Text>
        {/* <Text fontSize="14px">Department: University of NewYork</Text> */}
        {/* <Text fontSize="14px">University: {school}</Text> */}
        {/* <Text fontSize="14px">State: NewYork</Text> */}
      </Box>
    </Flex>
  );
};

export default singleFaculty;
