import React from "react";

// react-router-dom
import { Link } from "react-router-dom";

// chakra
import {
  Box,
  Flex,
  Input,
  InputGroup,
  Text,
  Spacer,
  InputRightElement,
  Button,
} from "@chakra-ui/react";

// icons
import { PlusIcon, FilterIcon } from "../UI/Svg/Icons";

const CustomHeader = ({
  title,
  inputOnchange,
  hrefNew,
  filterButtonOnClick,
  showButtons = true,
  onAddNewButtonClick,
}) => {
  return (
    <Box>
      <Text color="#fff" fontWeight="bold" fontSize="xl" mb={2}>
        {title}
      </Text>
      <Flex>
        <InputGroup size="md" maxW="25rem" my="auto">
          <Input
            bg="#021A34"
            pr="6.2rem"
            type="text"
            border={0}
            color="white"
            onChange={inputOnchange}
          />
          <InputRightElement width="5.5rem">
            <Button borderRadius="0px 5px" fontWeight="regular">
              Search
            </Button>
          </InputRightElement>
        </InputGroup>

        <Spacer />

        {showButtons && (
          <Box my="auto">
            <Link to={hrefNew}>
              <Button
                mx={2}
                w="146.88px"
                h={10}
                borderRadius="5px"
                fontSize="14px"
                onClick={onAddNewButtonClick}
              >
                <PlusIcon width={24} height={24} />

                <Text as="span" ml={2}>
                  Add new
                </Text>
              </Button>
            </Link>

            <Button
              mx={2}
              onClick={filterButtonOnClick}
              h={10}
              borderRadius="5px"
              fontSize="14px"
            >
              <FilterIcon width={20} height={20} />

              <Text as="span" ml={2}>
                Filters
              </Text>
            </Button>
          </Box>
        )}
      </Flex>
    </Box>
  );
};

export default CustomHeader;
