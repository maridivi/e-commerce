import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import FilterBox from "./FilterBox";

export default function FilterModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Show filters</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <FilterBox />
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost">Reset Filters</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
