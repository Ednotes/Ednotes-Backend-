import React from "react";

// chakra
import { Box, SimpleGrid } from "@chakra-ui/react";

// components
import SingleUniversity from "./SingleUniversity";
import CustomHeader from "../UI/CustomHeader";

export default function Universities() {
  return (
    <>
      <Box mt={-100} ml={-14} w="65vw">
        <CustomHeader title="Universities" />

        <Box mt={16}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
            <SingleUniversity title="University of New york" state="New york" />

            <SingleUniversity title="University of New york" state="New york" />

            <SingleUniversity title="University of New york" state="New york" />

            <SingleUniversity title="University of New york" state="New york" />
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
}
