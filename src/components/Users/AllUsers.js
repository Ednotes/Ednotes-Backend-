import {
  Box,
  Text,
  Flex,
  SimpleGrid,
  Image,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";

import img1 from "../../images/Ellipse 274.png";
import img2 from "../../images/Icon material-edit.png";

// components
import CustomHeader from "../UI/CustomHeader";
import CustomModal from "../UI/CustomModal";
import Filter from "./Filter";

export default function AllUsers() {
  const filterDisclosure = useDisclosure();

  return (
    <Box mt={-100} ml={-14} w="65vw">
      <CustomHeader
        title="All Users(222)"
        filterButtonOnClick={filterDisclosure.onOpen}
      />

      <Box mt={16}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
          <Box bg="#fff" px={8} py={6} borderRadius="10px">
            <Flex>
              <Image src={img1} alt="" h="32px" w="32px" />
              <Spacer />
              <Image src={img2} alt="" h="14px" w="14px" mt={2} />
            </Flex>
            <Box mt={2}>
              <Text fontSize="md" fontWeight="bold">
                Department Name
              </Text>
            </Box>
            <Box mt={2}>
              <Text fontSize="sm">Active Time: 22 Hours</Text>
              <Text fontSize="sm">University: University Of Newyork</Text>
              <Text fontSize="sm">State: NewYork</Text>
            </Box>
          </Box>
          <Box bg="#fff" px={8} py={6} borderRadius="10px">
            <Flex>
              <Image src={img1} alt="" h="32px" w="32px" />
              <Spacer />
              <Image src={img2} alt="" h="14px" w="14px" mt={2} />
            </Flex>
            <Box mt={2}>
              <Text fontSize="md" fontWeight="bold">
                Department Name
              </Text>
            </Box>
            <Box mt={2}>
              <Text fontSize="sm">Active Time: 22 Hours</Text>
              <Text fontSize="sm">University: University Of Newyork</Text>
              <Text fontSize="sm">State: NewYork</Text>
            </Box>
          </Box>
          <Box bg="#fff" px={8} py={6} borderRadius="10px">
            <Flex>
              <Image src={img1} alt="" h="32px" w="32px" />
              <Spacer />
              <Image src={img2} alt="" h="14px" w="14px" mt={2} />
            </Flex>
            <Box mt={2}>
              <Text fontSize="md" fontWeight="bold">
                Department Name
              </Text>
            </Box>
            <Box mt={2}>
              <Text fontSize="sm">Active Time: 22 Hours</Text>
              <Text fontSize="sm">University: University Of Newyork</Text>
              <Text fontSize="sm">State: NewYork</Text>
            </Box>
          </Box>
          <Box bg="#fff" px={8} py={6} borderRadius="10px">
            <Flex>
              <Image src={img1} alt="" h="32px" w="32px" />
              <Spacer />
              <Image src={img2} alt="" h="14px" w="14px" mt={2} />
            </Flex>
            <Box mt={2}>
              <Text fontSize="md" fontWeight="bold">
                Department Name
              </Text>
            </Box>
            <Box mt={2}>
              <Text fontSize="sm">Active Time: 22 Hours</Text>
              <Text fontSize="sm">University: University Of Newyork</Text>
              <Text fontSize="sm">State: NewYork</Text>
            </Box>
          </Box>
          <Box bg="#fff" px={8} py={6} borderRadius="10px">
            <Flex>
              <Image src={img1} alt="" h="32px" w="32px" />
              <Spacer />
              <Image src={img2} alt="" h="14px" w="14px" mt={2} />
            </Flex>
            <Box mt={2}>
              <Text fontSize="md" fontWeight="bold">
                Department Name
              </Text>
            </Box>
            <Box mt={2}>
              <Text fontSize="sm">Active Time: 22 Hours</Text>
              <Text fontSize="sm">University: University Of Newyork</Text>
              <Text fontSize="sm">State: NewYork</Text>
            </Box>
          </Box>
          <Box bg="#fff" px={8} py={6} borderRadius="10px">
            <Flex>
              <Image src={img1} alt="" h="32px" w="32px" />
              <Spacer />
              <Image src={img2} alt="" h="14px" w="14px" mt={2} />
            </Flex>
            <Box mt={2}>
              <Text fontSize="md" fontWeight="bold">
                Department Name
              </Text>
            </Box>
            <Box mt={2}>
              <Text fontSize="sm">Active Time: 22 Hours</Text>
              <Text fontSize="sm">University: University Of Newyork</Text>
              <Text fontSize="sm">State: NewYork</Text>
            </Box>
          </Box>
          <Box bg="#fff" px={8} py={6} borderRadius="10px">
            <Flex>
              <Image src={img1} alt="" h="32px" w="32px" />
              <Spacer />
              <Image src={img2} alt="" h="14px" w="14px" mt={2} />
            </Flex>
            <Box mt={2}>
              <Text fontSize="md" fontWeight="bold">
                Department Name
              </Text>
            </Box>
            <Box mt={2}>
              <Text fontSize="sm">Active Time: 22 Hours</Text>
              <Text fontSize="sm">University: University Of Newyork</Text>
              <Text fontSize="sm">State: NewYork</Text>
            </Box>
          </Box>
          <Box bg="#fff" px={8} py={6} borderRadius="10px">
            <Flex>
              <Image src={img1} alt="" h="32px" w="32px" />
              <Spacer />
              <Image src={img2} alt="" h="14px" w="14px" mt={2} />
            </Flex>
            <Box mt={2}>
              <Text fontSize="md" fontWeight="bold">
                Department Name
              </Text>
            </Box>
            <Box mt={2}>
              <Text fontSize="sm">Active Time: 22 Hours</Text>
              <Text fontSize="sm">University: University Of Newyork</Text>
              <Text fontSize="sm">State: NewYork</Text>
            </Box>
          </Box>
          <Box bg="#fff" px={8} py={6} borderRadius="10px">
            <Flex>
              <Image src={img1} alt="" h="32px" w="32px" />
              <Spacer />
              <Image src={img2} alt="" h="14px" w="14px" mt={2} />
            </Flex>
            <Box mt={2}>
              <Text fontSize="md" fontWeight="bold">
                Department Name
              </Text>
            </Box>
            <Box mt={2}>
              <Text fontSize="sm">Active Time: 22 Hours</Text>
              <Text fontSize="sm">University: University Of Newyork</Text>
              <Text fontSize="sm">State: NewYork</Text>
            </Box>
          </Box>{" "}
        </SimpleGrid>
      </Box>

      <CustomModal size="xl" title="Filter Users" disclosure={filterDisclosure}>
        <Filter />
      </CustomModal>
    </Box>
  );
}
