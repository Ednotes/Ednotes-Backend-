import React from "react";
import { Text, Box, Input, Button, Flex, SimpleGrid } from "@chakra-ui/react";
import img1 from "../../images/Path 984.png";

// components
import StateComponent from "./StateComponent";

export default function states() {
  const allManagement = [
    {
      title: "Manage Courses",
      href: "/courses",
      icon: img1,
    },

    {
      title: "Manage Course Outlines",
      href: "/courses-outline",
      icon: img1,
    },

    {
      title: "Manage Universities",
      href: "/courses",
      icon: img1,
    },

    {
      title: "Manage Faculties",
      href: "/faculties",
      icon: img1,
    },

    {
      title: "Manage Departments",
      href: "/courses",
      icon: img1,
    },
  ];

  return (
    <Box mt={-100} ml={-14} w="65vw">
      <Text color="#fff" fontWeight="bold" fontSize="xl" mb={2}>
        States
      </Text>
      <Flex>
        <Input h={8} w="15rem" />
        <Button h={8} ml={-15} borderRadius="0px 5px" fontSize="xs">
          Search
        </Button>
      </Flex>

      <Box mt={16}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
          {allManagement.map((manager, index) => {
            return (
              <StateComponent
                key={index}
                title={manager.title}
                href={manager.href}
                imageIcon={manager.icon}
              />
            );
          })}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
