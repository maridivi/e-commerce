import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import Page from "../components/Page";

export default function ContactForm() {
  return (
    <Page padding={36}>
      <VStack gap={6}>
        <Text fontSize={32}>Contact us</Text>
        <FormControl>
          <VStack gap={2}>
            <VStack align="stretch" width="300px">
              <FormLabel mb="-1">Name</FormLabel>
              <Input />
            </VStack>
            <VStack align="stretch" width="300px">
              <FormLabel mb="-1">Email address</FormLabel>
              <Input type="email" />
            </VStack>

            <VStack align="stretch" width="300px">
              <FormLabel mb="-1">Message</FormLabel>
              <Textarea></Textarea>
            </VStack>
            <Button type="submit">Submit</Button>
          </VStack>
        </FormControl>
      </VStack>
    </Page>
  );
}
