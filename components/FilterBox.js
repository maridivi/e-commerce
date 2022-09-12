import { CheckboxGroup, Text, VStack } from "@chakra-ui/react";

export default function FilterBox() {
  return (
    <VStack>
      <Text>Categories</Text>
      <CheckboxGroup></CheckboxGroup>
      <CheckboxGroup></CheckboxGroup>
      <CheckboxGroup></CheckboxGroup>
    </VStack>
  );
}
