import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  VStack,
} from "@chakra-ui/react";
import Page from "../components/Page";

export default function CheckOut() {
  return (
    <Page>
      <Stack direction={["column", "row"]}>
        <FormControl>
          <VStack gap={2}>
            <VStack align="stretch" width="300px">
              <FormLabel mb="-1">First Name</FormLabel>
              <Input />
            </VStack>
            <VStack align="stretch" width="300px">
              <FormLabel mb="-1">Last Name</FormLabel>
              <Input />
            </VStack>
            <VStack align="stretch" width="300px">
              <FormLabel mb="-1">Email address</FormLabel>
              <Input type="email" />
            </VStack>

            <VStack align="stretch" width="300px">
              <FormLabel mb="-1">Street Address</FormLabel>
              <Input />
            </VStack>
            <VStack align="stretch" width="300px">
              <FormLabel mb="-1">State</FormLabel>
              <Input />
            </VStack>
            <VStack align="stretch" width="300px">
              <FormLabel mb="-1">City</FormLabel>
              <Input />
            </VStack>
            <VStack align="stretch" width="300px">
              <FormLabel mb="-1">Zip Code</FormLabel>
              <Input />
            </VStack>
            <VStack align="stretch" width="300px">
              <FormLabel mb="-1">Credit/Debit Card Number</FormLabel>
              <Input />
            </VStack>
            <VStack align="stretch" width="300px">
              <FormLabel mb="-1">Expiration Date</FormLabel>
              <Input />
            </VStack>
            <Button type="submit">Review</Button>
          </VStack>
        </FormControl>
      </Stack>
    </Page>
  );
}
