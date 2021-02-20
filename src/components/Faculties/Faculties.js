import { Box, Text, Button, Flex, SimpleGrid, Center, Input, Image, Spacer, Icon } from '@chakra-ui/react'
import React from 'react'
import img1 from '../../images/Icon material-edit.png'
export default function Faculties() {
    return (
        <Box mt={-100} ml={-14} w="65vw">
      <Text color="#fff" fontWeight="bold" fontSize="xl" mb={2}>
        Faculties
      </Text>
      <Flex>
        <Input h={8} w="15rem" />
        <Button h={8} ml={-15} borderRadius="0px 5px" fontSize="xs">
          Search
        </Button>
        <Spacer/>
        <Box>
        <Button mx={2} w="146.88px" h={8} borderRadius="5px" fontSize="xs"><Icon/>Add new</Button>
        <Button mx={2} w="146.88px" h={8} borderRadius="5px" fontSize="xs"><Icon/>Filters</Button>
        </Box>
      </Flex>
      <Box mt={16}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
          <Box
            bg="#fff"
            px={8}
            py={6}
            h="160px"
            borderRadius="10px"
          >
            <Box>
              <Flex>
                  <Text fontWeight="bold">Faculty Name</Text>
                  <Spacer/>
                <Image src={img1} alt="" h="14px" w="14px" />
              </Flex>
              <Text>Department: University of NewYork</Text>
              <Text>University: Three</Text>
              <Text>State: NewYork</Text>
            </Box>
          </Box>
          <Box
            bg="#fff"
            px={8}
            py={6}
            h="160px"
            borderRadius="10px"
          >
            <Box>
              <Flex>
                  <Text fontWeight="bold">Faculty Name</Text>
                  <Spacer/>
                <Image src={img1} alt="" h="14px" w="14px" />
              </Flex>
              <Text>Department: University of NewYork</Text>
              <Text>University: Three</Text>
              <Text>State: NewYork</Text>
            </Box>
          </Box>
          <Box
            bg="#fff"
            px={8}
            py={6}
            h="160px"
            borderRadius="10px"
          >
            <Box>
              <Flex>
                  <Text fontWeight="bold">Faculty Name</Text>
                  <Spacer/>
                <Image src={img1} alt="" h="14px" w="14px" />
              </Flex>
              <Text>Department: University of NewYork</Text>
              <Text>University: Three</Text>
              <Text>State: NewYork</Text>
            </Box>
          </Box>
          <Box
            bg="#fff"
            px={8}
            py={6}
            h="160px"
            borderRadius="10px"
          >
            <Box>
              <Flex>
                  <Text fontWeight="bold">Faculty Name</Text>
                  <Spacer/>
                <Image src={img1} alt="" h="14px" w="14px" />
              </Flex>
              <Text>Department: University of NewYork</Text>
              <Text>University: Three</Text>
              <Text>State: NewYork</Text>
            </Box>
          </Box>
          <Box
            bg="#fff"
            px={8}
            py={6}
            h="160px"
            borderRadius="10px"
          >
            <Box>
              <Flex>
                  <Text fontWeight="bold">Faculty Name</Text>
                  <Spacer/>
                <Image src={img1} alt="" h="14px" w="14px" />
              </Flex>
              <Text>Department: University of NewYork</Text>
              <Text>University: Three</Text>
              <Text>State: NewYork</Text>
            </Box>
          </Box>
          <Box
            bg="#fff"
            px={8}
            py={6}
            h="160px"
            borderRadius="10px"
          >
            <Box>
              <Flex>
                  <Text fontWeight="bold">Faculty Name</Text>
                  <Spacer/>
                <Image src={img1} alt="" h="14px" w="14px" />
              </Flex>
              <Text>Department: University of NewYork</Text>
              <Text>University: Three</Text>
              <Text>State: NewYork</Text>
            </Box>
          </Box>
          <Box
            bg="#fff"
            px={8}
            py={6}
            h="160px"
            borderRadius="10px"
          >
            <Box>
              <Flex>
                  <Text fontWeight="bold">Faculty Name</Text>
                  <Spacer/>
                <Image src={img1} alt="" h="14px" w="14px" />
              </Flex>
              <Text>Department: University of NewYork</Text>
              <Text>University: Three</Text>
              <Text>State: NewYork</Text>
            </Box>
          </Box>
          <Box
            bg="#fff"
            px={8}
            py={6}
            h="160px"
            borderRadius="10px"
          >
            <Box>
              <Flex>
                  <Text fontWeight="bold">Faculty Name</Text>
                  <Spacer/>
                <Image src={img1} alt="" h="14px" w="14px" />
              </Flex>
              <Text>Department: University of NewYork</Text>
              <Text>University: Three</Text>
              <Text>State: NewYork</Text>
            </Box>
          </Box>
          <Box
            bg="#fff"
            px={8}
            py={6}
            h="160px"
            borderRadius="10px"
          >
            <Box>
              <Flex>
                  <Text fontWeight="bold">Faculty Name</Text>
                  <Spacer/>
                <Image src={img1} alt="" h="14px" w="14px" />
              </Flex>
              <Text>Department: University of NewYork</Text>
              <Text>University: Three</Text>
              <Text>State: NewYork</Text>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
    )
}
