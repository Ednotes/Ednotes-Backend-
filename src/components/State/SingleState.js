import React from 'react'
import img1 from '../../images/Icon material-edit.png'
import {Box, Text, Spacer, Image, Flex} from '@chakra-ui/react'

export default function SingleState({state}) {
    return (
        <Box
        bg="#fff"
        px={8}
        py={6}
        h="70px"
        borderRadius="10px"
      >
        <Box>
          <Flex>
              <Text fontWeight="bold" w="233px">{state}</Text>
              <Spacer/>
            <Image src={img1} alt="" h="14px" w="14px" />
          </Flex>
        </Box>
      </Box>
    )
}
