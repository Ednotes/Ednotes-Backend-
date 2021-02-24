import React from "react";
import { Box, Text, Button, Flex, SimpleGrid, Input, Spacer, Icon } from '@chakra-ui/react'
import SingleState from '../../components/State/SingleState'
export default function State() {
  return (
    <Box mt={-100} ml={-14} w="65vw">
      <Text color="#fff" fontWeight="bold" fontSize="xl" mb={2}>
        Courses Outline
      </Text>
      <Flex>
        <Input h={8} w="15rem" />
        <Button h={8} ml={-15} borderRadius="0px 5px" fontSize="xs">
          Search
        </Button>
        <Spacer />
        <Box>
          <Button mx={2} w="146.88px" h={8} borderRadius="5px" fontSize="xs">
            <Icon />
            Add new
          </Button>
          <Button mx={2} w="146.88px" h={8} borderRadius="5px" fontSize="xs">
            <Icon />
            Filters
          </Button>
        </Box>
      </Flex>
      <Box mt={16}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
          <SingleState
            state="NewYork"
          />
           <SingleState
            state="NewYork"
          />
           <SingleState
            state="NewYork"
          />
           <SingleState
            state="NewYork"
          />
           <SingleState
            state="NewYork"
          />
           <SingleState
            state="NewYork"
          />
           <SingleState
            state="NewYork"
          />
           <SingleState
            state="NewYork"
          />
           <SingleState
            state="NewYork"
          />
        </SimpleGrid>
      </Box>
    </Box>
  );
}
