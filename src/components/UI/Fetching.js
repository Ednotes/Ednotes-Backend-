import React from "react";

import { Center, Spinner } from "@chakra-ui/react";

const Loader = () => {
  return (
    <Center py={16}>
      <Spinner />
    </Center>
  );
};

const Empty = ({ text }) => {
  return (
    <Center fontSize="14px" p={6} bg="white" w="100%" textAlign="center">
      {text}
    </Center>
  );
};

export { Loader, Empty };
