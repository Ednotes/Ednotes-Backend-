import React from 'react'
import {Text, Box, Input, Button, Flex} from '@chakra-ui/react'
export default function states() {
    return (
        <Box mt={-100} ml={-14}>
          <Text color="#fff" fontWeight="bold" fontSize="xl" mb={2}>States</Text>  
          <Flex>
          <Input h={8}/>
          <Button h={8} ml={-15} borderRadius="0px 5px" fontSize="xs">Search</Button>
          </Flex>
        </Box>
    )
}
