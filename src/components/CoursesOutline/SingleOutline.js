import React from 'react'
import { Box, Text, Button, Flex, SimpleGrid, Center, Input, Image, Spacer, Icon } from '@chakra-ui/react'
import img1 from "../../images/Icon material-edit.png"
export default function SingleOutline({title, head_title, icon, department, university, state}) {
    return (
        <Box
            bg="#fff"
            px={8}
            py={6}
            h="160px"
            borderRadius="10px"
          >
            <Box>
              <Flex>
                  <Text fontWeight="bold" w="233px">{title}</Text>
                  <Spacer/>
                <Image src={img1} alt="" h="14px" w="14px" />
              </Flex>
              <Text>Department: {department}</Text>
              <Text>University: {university}</Text>
              <Text>State: {state}</Text>
            </Box>
          </Box>
    )
}
