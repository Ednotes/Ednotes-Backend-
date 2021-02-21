// chakra
import { Box, SimpleGrid } from "@chakra-ui/react";

// components
import CustomHeader from "../UI/CustomHeader";
import SingleOutline from "./SingleOutline";

export default function CoursesOutline() {
  return (
    <Box mt={-100} ml={-14} w="65vw">
      <CustomHeader title="Courses Outline" />

      <Box mt={16}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
          <SingleOutline
            title="Discovery of Biological Systems"
            department="Fundamentals of..."
            university="Science"
            state="New York"
          />
          <SingleOutline
            title="Discovery of Biological Systems"
            department="Fundamentals of..."
            university="Science"
            state="New York"
          />
          <SingleOutline
            title="Discovery of Biological Systems"
            department="Fundamentals of..."
            university="Science"
            state="New York"
          />
          <SingleOutline
            title="Discovery of Biological Systems"
            department="Fundamentals of..."
            university="Science"
            state="New York"
          />
          <SingleOutline
            title="Discovery of Biological Systems"
            department="Fundamentals of..."
            university="Science"
            state="New York"
          />
        </SimpleGrid>
      </Box>
    </Box>
  );
}
