import { Stack, Text } from "@chakra-ui/react";
import Page from "../components/Page";

export default function OrderConfirmed() {
  return (
    <Page>
      <Stack padding={16}>
        <Text fontWeight="extrabold" align="center" fontSize="2xl">
          Thank you for your purchase!
        </Text>
        <Text align="center">
          Check your email for your order review and updates.
        </Text>
      </Stack>
    </Page>
  );
}
