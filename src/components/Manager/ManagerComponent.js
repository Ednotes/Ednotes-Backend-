import React from "react";

// react router
import { Link } from "react-router-dom";

// chakra
import { Flex, Center, Image, Text, Button, Box } from "@chakra-ui/react";

const StateComponent = ({ imageIcon, href, title }) => {
  return (
    <Flex
      bg="white"
      borderRadius="md"
      px={6}
      py={6}
      h="222px"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
      textAlign="center"
    >
      <Box bg="#E8EBF2" rounded="full" w={10} h={10}>
        <Center h="40px" w="40px">
          <Image src={imageIcon} alt="" h="15px" w="20px" />
        </Center>
      </Box>
      <Text fontWeight="bold" p={3}>
        {title}
      </Text>

      <Link to={href}>
        <Button colorScheme="brand" w="125px" h="36px" p={2}>
          View
        </Button>
      </Link>
    </Flex>
  );
};

export default StateComponent;
