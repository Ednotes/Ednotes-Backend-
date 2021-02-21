import React from "react";

// react router
import { Link } from "react-router-dom";

// chakra
import { Flex, Center, Image, Text, Button, Box } from "@chakra-ui/react";
// import { ManageCoursesIcon } from "../UI/Svg/ManagerIcons";

const ManagerComponent = ({ icon, href, title, children }) => {
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
      <Center bg="#E8EBF2" rounded="full" w={10} h={10}>
        <Image src={icon} />
      </Center>
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

export default ManagerComponent;
