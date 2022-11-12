import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

import FilterBox from "./FilterBox";

export default function FilterModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        onClick={onOpen}
        backgroundColor="pink.400"
        color="white"
        _hover={{ backgroundColor: "pink.300" }}
        fontSize={["xs", "sm"]}
      >
        Show filters
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <FilterBox />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
