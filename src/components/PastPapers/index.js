import { Box, SimpleGrid } from "@chakra-ui/react";

// components
import SinglePaper from "./SinglePaper";
import CustomHeader from "../UI/CustomHeader";

export default function CoursesOutline() {
  return (
    <Box mt={-100} ml={-14} w="65vw">
      <CustomHeader title="Past Papers" />

      <Box mt={16}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
          <SinglePaper
            title="Past papers name"
            department="Fundamentals of wcjkqw qwdkjnqw qwdkjqw"
            university="Science"
            state="New York"
          />
          <SinglePaper
            title="Past papers name"
            department="Fundamentals of..."
            university="Science"
            state="New York"
          />
          <SinglePaper
            title="Past papers name"
            department="Fundamentals of wcjkqw qwdkjnqw qwdkjqw"
            university="Science"
            state="New York"
          />
          <SinglePaper
            title="Past papers name"
            department="Fundamentals of wcjkqw qwdkjnqw qwdkjqw"
            university="Science"
            state="New York"
          />
          <SinglePaper
            title="Past papers name"
            department="Fundamentals of wcjkqw qwdkjnqw qwdkjqw"
            university="Science"
            state="New York"
          />
        </SimpleGrid>
      </Box>
    </Box>
  );
}
