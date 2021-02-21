import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import SingleState from "../../components/State/SingleState";
import CustomHeader from "../UI/CustomHeader";

export default function State() {
  return (
    <Box mt={-100} ml={-14} w="65vw">
      <CustomHeader title="States" />

      <Box mt={16}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
          <SingleState state="NewYork" />
          <SingleState state="NewYork" />
          <SingleState state="NewYork" />
          <SingleState state="NewYork" />
          <SingleState state="NewYork" />
          <SingleState state="NewYork" />
          <SingleState state="NewYork" />
          <SingleState state="NewYork" />
          <SingleState state="NewYork" />
        </SimpleGrid>
      </Box>
    </Box>
  );
}
