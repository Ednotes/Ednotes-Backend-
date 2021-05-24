import {
    Box,
    Text,
    Button,
    Flex,
    SimpleGrid,
    Input,
    Image,
    Spacer,
    Icon,
  } from "@chakra-ui/react";
  import React from "react";
  import img3 from "../../images/Ellipse 274.png";

  
  export default function Stats() {
    return (
      <Box mt={-100} ml={-14} w="65vw">
        <Text color="#fff" fontWeight="bold" fontSize="xl" mb={2}>
          Stats
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
              Filters
            </Button>
          </Box>
        </Flex>
        <Box mt={16}>
        <Box bg="#fff" px={8} py={4} h="60px" w="820px" borderRadius="10px">
              <Flex>
                <Text my="auto" mx={1} fontSize="sm" fontWeight="bold">
                  Total Number of Users: 2,501
                </Text>
                <Spacer />
               <Text>View all</Text>
              </Flex>
              </Box>
          <SimpleGrid mt={4} columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
            <Box bg="#fff" py={4} h="550px" w="400px" borderRadius="10px">
              <Flex px={8}>
                <Text fontWeight="semibold" fontSize="sm" my="auto" mx={1}>
                  Active Users (222)
                </Text>
                <Spacer />
               <Text fontSize="sm">View all</Text>
              </Flex>
              <Flex px={8} mt={4} borderBottom="1px solid #707070" pb={8}>
                <Box>
                <Image src={img3} alt="" h="32px" mr={2}/>
                </Box>
                <Box>
                <Text fontSize="xs" fontWeight="semibold">
                  Vijay Maliya
                </Text>
                <Text  fontSize="xs">Last Activity: 2 Days Ago</Text>
                </Box>
                <Spacer/>
                <Button borderRadius="50px" size="sm" w="5rem" fontSize="xs" bg="#0D93C6" colorScheme="#fff" fontWeight="light">Details</Button>
              </Flex>
              <Flex px={8} mt={4} borderBottom="1px solid #707070" pb={8}>
                <Box>
                <Image src={img3} alt="" h="32px" mr={2}/>
                </Box>
                <Box>
                <Text fontSize="xs" fontWeight="semibold">
                  Vijay Maliya
                </Text>
                <Text  fontSize="xs">Last Activity: 2 Days Ago</Text>
                </Box>
                <Spacer/>
                <Button borderRadius="50px" size="sm" w="5rem" fontSize="xs" bg="#0D93C6" colorScheme="#fff" fontWeight="light">Details</Button>
              </Flex>
              <Flex px={8} mt={4} borderBottom="1px solid #707070" pb={8}>
                <Box>
                <Image src={img3} alt="" h="32px" mr={2}/>
                </Box>
                <Box>
                <Text fontSize="xs" fontWeight="semibold">
                  Vijay Maliya
                </Text>
                <Text  fontSize="xs">Last Activity: 2 Days Ago</Text>
                </Box>
                <Spacer/>
                <Button borderRadius="50px" size="sm" w="5rem" fontSize="xs" bg="#0D93C6" colorScheme="#fff" fontWeight="light">Details</Button>
              </Flex>
              <Flex px={8} mt={4} borderBottom="1px solid #707070" pb={8}>
                <Box>
                <Image src={img3} alt="" h="32px" mr={2}/>
                </Box>
                <Box>
                <Text fontSize="xs" fontWeight="semibold">
                  Vijay Maliya
                </Text>
                <Text  fontSize="xs">Last Activity: 2 Days Ago</Text>
                </Box>
                <Spacer/>
                <Button borderRadius="50px" size="sm" w="5rem" fontSize="xs" bg="#0D93C6" colorScheme="#fff" fontWeight="light">Details</Button>
              </Flex>
              <Flex px={8} mt={4} pb={8}>
                <Box>
                <Image src={img3} alt="" h="32px" mr={2}/>
                </Box>
                <Box>
                <Text fontSize="xs" fontWeight="semibold">
                  Vijay Maliya
                </Text>
                <Text  fontSize="xs">Last Activity: 2 Days Ago</Text>
                </Box>
                <Spacer/>
                <Button borderRadius="50px" size="sm" w="5rem" fontSize="xs" bg="#0D93C6" colorScheme="#fff" fontWeight="light">Details</Button>
              </Flex>
            </Box>
            <Box bg="#fff" py={4} h="550px" w="400px" borderRadius="10px">
              <Flex px={8}>
                <Text fontWeight="semibold" fontSize="sm" my="auto" mx={1}>
                  Inactive Users (222)
                </Text>
                <Spacer />
               <Text fontSize="sm">View all</Text>
              </Flex>
              <Flex px={8} mt={4} borderBottom="1px solid #707070" pb={8}>
                <Box>
                <Image src={img3} alt="" h="32px" mr={2}/>
                </Box>
                <Box>
                <Text fontSize="xs" fontWeight="semibold">
                  Vijay Maliya
                </Text>
                <Text  fontSize="xs">Last Activity: 2 Days Ago</Text>
                </Box>
                <Spacer/>
                <Button borderRadius="50px" size="sm" w="5rem" fontSize="xs" bg="#0D93C6" colorScheme="#fff" fontWeight="light">Details</Button>
              </Flex>
              <Flex px={8} mt={4} borderBottom="1px solid #707070" pb={8}>
                <Box>
                <Image src={img3} alt="" h="32px" mr={2}/>
                </Box>
                <Box>
                <Text fontSize="xs" fontWeight="semibold">
                  Vijay Maliya
                </Text>
                <Text  fontSize="xs">Last Activity: 2 Days Ago</Text>
                </Box>
                <Spacer/>
                <Button borderRadius="50px" size="sm" w="5rem" fontSize="xs" bg="#0D93C6" colorScheme="#fff" fontWeight="light">Details</Button>
              </Flex>
              <Flex px={8} mt={4} borderBottom="1px solid #707070" pb={8}>
                <Box>
                <Image src={img3} alt="" h="32px" mr={2}/>
                </Box>
                <Box>
                <Text fontSize="xs" fontWeight="semibold">
                  Vijay Maliya
                </Text>
                <Text  fontSize="xs">Last Activity: 2 Days Ago</Text>
                </Box>
                <Spacer/>
                <Button borderRadius="50px" size="sm" w="5rem" fontSize="xs" bg="#0D93C6" colorScheme="#fff" fontWeight="light">Details</Button>
              </Flex>
              <Flex px={8} mt={4} borderBottom="1px solid #707070" pb={8}>
                <Box>
                <Image src={img3} alt="" h="32px" mr={2}/>
                </Box>
                <Box>
                <Text fontSize="xs" fontWeight="semibold">
                  Vijay Maliya
                </Text>
                <Text  fontSize="xs">Last Activity: 2 Days Ago</Text>
                </Box>
                <Spacer/>
                <Button borderRadius="50px" size="sm" w="5rem" fontSize="xs" bg="#0D93C6" colorScheme="#fff" fontWeight="light">Details</Button>
              </Flex>
              <Flex px={8} mt={4} pb={8}>
                <Box>
                <Image src={img3} alt="" h="32px" mr={2}/>
                </Box>
                <Box>
                <Text fontSize="xs" fontWeight="semibold">
                  Vijay Maliya
                </Text>
                <Text  fontSize="xs">Last Activity: 2 Days Ago</Text>
                </Box>
                <Spacer/>
                <Button borderRadius="50px" size="sm" w="5rem" fontSize="xs" bg="#0D93C6" colorScheme="#fff" fontWeight="light">Details</Button>
              </Flex>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
    );
  }
  