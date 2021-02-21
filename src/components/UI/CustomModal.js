import React from "react";

// chakra
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";

const CustomModal = ({ disclosure, children, title, size }) => {
  return (
    <Modal size={size} isOpen={disclosure.isOpen} onClose={disclosure.onClose}>
      <ModalOverlay />
      <ModalContent borderRadius="12px" pt={5} pb={3} px={5}>
        <ModalHeader fontWeight="bold">{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>

        <ModalFooter flexDir="column">
          <Button
            height="46px"
            colorScheme="primary"
            w="100%"
            onClick={disclosure.onClose}
          >
            Apply Filters
          </Button>

          <Button height="46px" mt={2} w="100%" onClick={disclosure.onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;
