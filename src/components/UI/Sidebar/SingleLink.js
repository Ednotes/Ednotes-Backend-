import React from "react";

// chakra
import { Flex, Text } from "@chakra-ui/react";

// react router
import { Link, useRouteMatch } from "react-router-dom";

const SingleLink = ({ href, title, icon }) => {
  let match = useRouteMatch(href);
  // console.log(match.isExact);
  return (
    <Link to={href}>
      <Flex
        bg={match?.isExact && "#F7B928"}
        mb={3}
        borderRadius="full"
        py={2}
        px={3}
        color={match?.isExact && "white"}
      >
        {/* <Image h={3} mx={2} my="auto" src={icon} /> */}
        <Text mr={2} my="auto">
          {icon}
        </Text>
        <Text textDecor="none" fontSize="15px" my="auto">
          {title}
        </Text>
      </Flex>
    </Link>
  );
};

export default SingleLink;
