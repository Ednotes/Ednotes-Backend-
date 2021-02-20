import {
  Box,
  Text,
  Button,
  Flex,
  SimpleGrid,
  Center,
  Input,
  Image,
  Spacer,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import img1 from "../../images/Ellipse 274.png";
import img2 from "../../images/Icon material-edit.png";
import img3 from "../../images/Icon awesome-check-circle.png";

export default function Requests() {
  return (
    <Box mt={-100} ml={-14} w="65vw">
      <Text color="#fff" fontWeight="bold" fontSize="xl" mb={2}>
        Assistance Requests (222)
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
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
          <Box bg="#fff" px={8} py={4} h="220px" borderRadius="10px">
            <Flex>
              <Image src={img1} alt="" h="32px" w="32px" />{" "}
              <Text fontSize="sm" my="auto" mx={1}>
                Vijay Maliya
              </Text>
              <Spacer />
              <Image src={img2} alt="" h="14px" w="14px" mt={2} />
            </Flex>
            <Flex mt={2}>
              <Text fontSize="sm" fontWeight="bold">
                Need Assistance with My Science Project
              </Text>
              <Spacer />
              <Text fontWeight="bold">$500</Text>
            </Flex>
            <Box mt={2}>
              <Text fontSize="xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                feugiat orci ut augue laoreet, tristique iaculis sem ornare.
                Morbi iaculis vitae nunc ac tincidunt.
              </Text>
            </Box>
            <Flex mt={2}>
              <Text fontSize="sm">Bids: 52</Text>
              <Spacer />
              <Image src={img3} alt="" h="10px" w="10px" my="auto" mr={1} />
              <Text color="#F7B928" fontSize="sm">
                Bids Accepted
              </Text>
            </Flex>
          </Box>
          <Box bg="#fff" px={8} py={4} h="220px" borderRadius="10px">
            <Flex>
              <Image src={img1} alt="" h="32px" w="32px" />{" "}
              <Text fontSize="sm" my="auto" mx={1}>
                Vijay Maliya
              </Text>
              <Spacer />
              <Image src={img2} alt="" h="14px" w="14px" mt={2} />
            </Flex>
            <Flex mt={2}>
              <Text fontSize="sm" fontWeight="bold">
                Need Assistance with My Science Project
              </Text>
              <Spacer />
              <Text fontWeight="bold">$500</Text>
            </Flex>
            <Box mt={2}>
              <Text fontSize="xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                feugiat orci ut augue laoreet, tristique iaculis sem ornare.
                Morbi iaculis vitae nunc ac tincidunt.
              </Text>
            </Box>
            <Flex mt={2}>
              <Text fontSize="sm">Bids: 52</Text>
              <Spacer />
              <Image src={img3} alt="" h="10px" w="10px" my="auto" mr={1} />
              <Text color="#0D93C6" fontSize="sm">
                Open for Bidding
              </Text>
            </Flex>
          </Box>
          <Box bg="#fff" px={8} py={4} h="220px" borderRadius="10px">
            <Flex>
              <Image src={img1} alt="" h="32px" w="32px" />{" "}
              <Text fontSize="sm" my="auto" mx={1}>
                Vijay Maliya
              </Text>
              <Spacer />
              <Image src={img2} alt="" h="14px" w="14px" mt={2} />
            </Flex>
            <Flex mt={2}>
              <Text fontSize="sm" fontWeight="bold">
                Need Assistance with My Science Project
              </Text>
              <Spacer />
              <Text fontWeight="bold">$500</Text>
            </Flex>
            <Box mt={2}>
              <Text fontSize="xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                feugiat orci ut augue laoreet, tristique iaculis sem ornare.
                Morbi iaculis vitae nunc ac tincidunt.
              </Text>
            </Box>
            <Flex mt={2}>
              <Text fontSize="sm">Bids: 52</Text>
              <Spacer />
              <Image src={img3} alt="" h="10px" w="10px" my="auto" mr={1} />
              <Text color="#F7B928" fontSize="sm">
                Bids Accepted
              </Text>
            </Flex>
          </Box>
          <Box bg="#fff" px={8} py={4} h="220px" borderRadius="10px">
            <Flex>
              <Image src={img1} alt="" h="32px" w="32px" />{" "}
              <Text fontSize="sm" my="auto" mx={1}>
                Vijay Maliya
              </Text>
              <Spacer />
              <Image src={img2} alt="" h="14px" w="14px" mt={2} />
            </Flex>
            <Flex mt={2}>
              <Text fontSize="sm" fontWeight="bold">
                Need Assistance with My Science Project
              </Text>
              <Spacer />
              <Text fontWeight="bold">$500</Text>
            </Flex>
            <Box mt={2}>
              <Text fontSize="xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                feugiat orci ut augue laoreet, tristique iaculis sem ornare.
                Morbi iaculis vitae nunc ac tincidunt.
              </Text>
            </Box>
            <Flex mt={2}>
              <Text fontSize="sm">Bids: 52</Text>
              <Spacer />
              <Image src={img3} alt="" h="10px" w="10px" my="auto" mr={1} />
              <Text color="#F7B928" fontSize="sm">
                Bids Accepted
              </Text>
            </Flex>
          </Box>
          <Box bg="#fff" px={8} py={4} h="220px" borderRadius="10px">
            <Flex>
              <Image src={img1} alt="" h="32px" w="32px" />{" "}
              <Text fontSize="sm" my="auto" mx={1}>
                Vijay Maliya
              </Text>
              <Spacer />
              <Image src={img2} alt="" h="14px" w="14px" mt={2} />
            </Flex>
            <Flex mt={2}>
              <Text fontSize="sm" fontWeight="bold">
                Need Assistance with My Science Project
              </Text>
              <Spacer />
              <Text fontWeight="bold">$500</Text>
            </Flex>
            <Box mt={2}>
              <Text fontSize="xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                feugiat orci ut augue laoreet, tristique iaculis sem ornare.
                Morbi iaculis vitae nunc ac tincidunt.
              </Text>
            </Box>
            <Flex mt={2}>
              <Text fontSize="sm">Bids: 52</Text>
              <Spacer />
              <Image src={img3} alt="" h="10px" w="10px" my="auto" mr={1} />
              <Text color="#0D93C6" fontSize="sm">
                Open for Bidding
              </Text>
            </Flex>
          </Box>
          <Box bg="#fff" px={8} py={4} h="220px" borderRadius="10px">
            <Flex>
              <Image src={img1} alt="" h="32px" w="32px" />{" "}
              <Text fontSize="sm" my="auto" mx={1}>
                Vijay Maliya
              </Text>
              <Spacer />
              <Image src={img2} alt="" h="14px" w="14px" mt={2} />
            </Flex>
            <Flex mt={2}>
              <Text fontSize="sm" fontWeight="bold">
                Need Assistance with My Science Project
              </Text>
              <Spacer />
              <Text fontWeight="bold">$500</Text>
            </Flex>
            <Box mt={2}>
              <Text fontSize="xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                feugiat orci ut augue laoreet, tristique iaculis sem ornare.
                Morbi iaculis vitae nunc ac tincidunt.
              </Text>
            </Box>
            <Flex mt={2}>
              <Text fontSize="sm">Bids: 52</Text>
              <Spacer />
              <Image src={img3} alt="" h="10px" w="10px" my="auto" mr={1} />
              <Text color="#F7B928" fontSize="sm">
                Bids Accepted
              </Text>
            </Flex>
          </Box>
          <Box bg="#fff" px={8} py={4} h="220px" borderRadius="10px">
            <Flex>
              <Image src={img1} alt="" h="32px" w="32px" />{" "}
              <Text fontSize="sm" my="auto" mx={1}>
                Vijay Maliya
              </Text>
              <Spacer />
              <Image src={img2} alt="" h="14px" w="14px" mt={2} />
            </Flex>
            <Flex mt={2}>
              <Text fontSize="sm" fontWeight="bold">
                Need Assistance with My Science Project
              </Text>
              <Spacer />
              <Text fontWeight="bold">$500</Text>
            </Flex>
            <Box mt={2}>
              <Text fontSize="xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                feugiat orci ut augue laoreet, tristique iaculis sem ornare.
                Morbi iaculis vitae nunc ac tincidunt.
              </Text>
            </Box>
            <Flex mt={2}>
              <Text fontSize="sm">Bids: 52</Text>
              <Spacer />
              <Image src={img3} alt="" h="10px" w="10px" my="auto" mr={1} />
              <Text color="#F7B928" fontSize="sm">
                Bids Accepted
              </Text>
            </Flex>
          </Box>
          <Box bg="#fff" px={8} py={4} h="220px" borderRadius="10px">
            <Flex>
              <Image src={img1} alt="" h="32px" w="32px" />{" "}
              <Text fontSize="sm" my="auto" mx={1}>
                Vijay Maliya
              </Text>
              <Spacer />
              <Image src={img2} alt="" h="14px" w="14px" mt={2} />
            </Flex>
            <Flex mt={2}>
              <Text fontSize="sm" fontWeight="bold">
                Need Assistance with My Science Project
              </Text>
              <Spacer />
              <Text fontWeight="bold">$500</Text>
            </Flex>
            <Box mt={2}>
              <Text fontSize="xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                feugiat orci ut augue laoreet, tristique iaculis sem ornare.
                Morbi iaculis vitae nunc ac tincidunt.
              </Text>
            </Box>
            <Flex mt={2}>
              <Text fontSize="sm">Bids: 52</Text>
              <Spacer />
              <Image src={img3} alt="" h="10px" w="10px" my="auto" mr={1} />
              <Text color="#0D93C6" fontSize="sm">
                Open for Bidding
              </Text>
            </Flex>
          </Box>
          <Box bg="#fff" px={8} py={4} h="220px" borderRadius="10px">
            <Flex>
              <Image src={img1} alt="" h="32px" w="32px" />{" "}
              <Text fontSize="sm" my="auto" mx={1}>
                Vijay Maliya
              </Text>
              <Spacer />
              <Image src={img2} alt="" h="14px" w="14px" mt={2} />
            </Flex>
            <Flex mt={2}>
              <Text fontSize="sm" fontWeight="bold">
                Need Assistance with My Science Project
              </Text>
              <Spacer />
              <Text fontWeight="bold">$500</Text>
            </Flex>
            <Box mt={2}>
              <Text fontSize="xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                feugiat orci ut augue laoreet, tristique iaculis sem ornare.
                Morbi iaculis vitae nunc ac tincidunt.
              </Text>
            </Box>
            <Flex mt={2}>
              <Text fontSize="sm">Bids: 52</Text>
              <Spacer />
              <Image src={img3} alt="" h="10px" w="10px" my="auto" mr={1} />
              <Text color="#F7B928" fontSize="sm">
                Bids Accepted
              </Text>
            </Flex>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}
