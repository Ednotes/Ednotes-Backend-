import React from 'react'
import {Text, Box, Input, Button, Flex, Icon, Grid, Center, Image} from '@chakra-ui/react'
import img1 from '../../images/Path 984.png'

export default function states() {
    return (
        <Box mt={-100} ml={-14}>
          <Text color="#fff" fontWeight="bold" fontSize="xl" mb={2}>States</Text>  
          <Flex>
          <Input h={8} w="15rem"/>
          <Button h={8} ml={-15} borderRadius="0px 5px" fontSize="xs">Search</Button>
          </Flex>
          <Box mt={16}>
          <Grid gap={4} gridTemplateColumns="repeat(3, 1fr)">
          <Box bg="#fff" px={16} py={6} w="394px" h="222px" textAlign="center">
                <Box bg="#E8EBF2" rounded="full" w={10} h={10} m="auto">
                    <Center h="40px" w="40px">
                         <Image src={img1} alt="" h="10px" w="15px"/>
                    </Center>
                </Box>
                <Text fontWeight="bold" p={3}>Manage Courses</Text>
                <Button color="#fff" bg="#003049" w="125px" h="36px" p={2}>View</Button>
            </Box>
            <Box bg="#fff" px={16} py={6} w="394px" h="222px" textAlign="center">
                <Box bg="#E8EBF2" rounded="full" w={10} h={10} m="auto">
                    <Center h="40px" w="40px">
                         <Image src={img1} alt="" h="10px" w="15px"/>
                    </Center>
                </Box>
                <Text fontWeight="bold" p={3}>Manage Courses</Text>
                <Button color="#fff" bg="#003049" w="125px" h="36px" p={2}>View</Button>
            </Box>
            <Box bg="#fff" px={16} py={6} w="394px" h="222px" textAlign="center">
                <Box bg="#E8EBF2" rounded="full" w={10} h={10} m="auto">
                    <Center h="40px" w="40px">
                         <Image src={img1} alt="" h="10px" w="15px"/>
                    </Center>
                </Box>
                <Text fontWeight="bold" p={3}>Manage Courses</Text>
                <Button color="#fff" bg="#003049" w="125px" h="36px" p={2}>View</Button>
            </Box>
            <Box bg="#fff" px={16} py={6} w="394px" h="222px" textAlign="center">
                <Box bg="#E8EBF2" rounded="full" w={10} h={10} m="auto">
                    <Center h="40px" w="40px">
                         <Image src={img1} alt="" h="10px" w="15px"/>
                    </Center>
                </Box>
                <Text fontWeight="bold" p={3}>Manage Courses</Text>
                <Button color="#fff" bg="#003049" w="125px" h="36px" p={2}>View</Button>
            </Box>
            <Box bg="#fff" px={16} py={6} w="394px" h="222px" textAlign="center">
                <Box bg="#E8EBF2" rounded="full" w={10} h={10} m="auto">
                    <Center h="40px" w="40px">
                         <Image src={img1} alt="" h="10px" w="15px"/>
                    </Center>
                </Box>
                <Text fontWeight="bold" p={3}>Manage Courses</Text>
                <Button color="#fff" bg="#003049" w="125px" h="36px" p={2}>View</Button>
            </Box>
            <Box bg="#fff" px={16} py={6} w="394px" h="222px" textAlign="center">
                <Box bg="#E8EBF2" rounded="full" w={10} h={10} m="auto">
                    <Center h="40px" w="40px">
                         <Image src={img1} alt="" h="10px" w="15px"/>
                    </Center>
                </Box>
                <Text fontWeight="bold" p={3}>Manage Courses</Text>
                <Button color="#fff" bg="#003049" w="125px" h="36px" p={2}>View</Button>
            </Box>
            <Box bg="#fff" px={16} py={6} w="394px" h="222px" textAlign="center">
                <Box bg="#E8EBF2" rounded="full" w={10} h={10} m="auto">
                    <Center h="40px" w="40px">
                         <Image src={img1} alt="" h="10px" w="15px"/>
                    </Center>
                </Box>
                <Text fontWeight="bold" p={3}>Manage Courses</Text>
                <Button color="#fff" bg="#003049" w="125px" h="36px" p={2}>View</Button>
            </Box>
            <Box bg="#fff" px={16} py={6} w="394px" h="222px" textAlign="center">
                <Box bg="#E8EBF2" rounded="full" w={10} h={10} m="auto">
                    <Center h="40px" w="40px">
                         <Image src={img1} alt="" h="10px" w="15px"/>
                    </Center>
                </Box>
                <Text fontWeight="bold" p={3}>Manage Courses</Text>
                <Button color="#fff" bg="#003049" w="125px" h="36px" p={2}>View</Button>
            </Box>
          </Grid>
          </Box>
        </Box>
    )
}
