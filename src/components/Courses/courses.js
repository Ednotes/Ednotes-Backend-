import React from 'react'
import {Text, Box, Input, Button, Flex} from '@chakra-ui/react'


export default function courses() {
    return (
        <Box mt={-100} ml={-14}>
          <Text color="#fff" fontWeight="bold" fontSize="xl" mb={2}>Courses</Text>  
            <form>
            <Flex>
            <Input h={8} isRequired color="#fff" bg="#021A34"/>
            <Button type="submit" h={8} ml={-15} borderRadius="0px 5px" fontSize="xs">Search</Button>
            </Flex>
            </form>
        </Box>
    )
}
