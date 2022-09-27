import {
  Button,
  Divider,
  HStack,
  List,
  ListItem,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import Page from "../components/Page";
import { CartContext } from "./_app";

export default function ReviewOrder() {
  const router = useRouter();
  const query = router.query;
  const {
    first_name,
    last_name,
    email,
    address,
    city,
    state,
    zip_code,
    card_number,
    exp_date,
  } = query;

  const { cartItems } = useContext(CartContext);

  const itemPrices = cartItems.map((item) => {
    return item.details.price;
  });

  const initialValue = 0;
  const subTotal = !itemPrices
    ? 0
    : itemPrices.reduce((prev, current) => {
        return prev + current;
      }, initialValue);

  return (
    <Page padding={16}>
      <Text fontSize="x-large" mb={12}>
        Review your order
      </Text>
      <HStack
        align="space-between"
        justify="space-around"
        border="solid"
        width="100%"
        mt={16}
        mb={12}
      >
        <VStack border="solid">
          <Text fontWeight="bold">Your personal data</Text>
          <List>
            <ListItem>{first_name}</ListItem>
            <ListItem>{last_name}</ListItem>
            <ListItem>{email}</ListItem>
          </List>
          <Text fontWeight="bold">Your Shipping details</Text>
          <List>
            <ListItem>{address}</ListItem>
            <ListItem>{city + " " + state + " " + zip_code}</ListItem>
          </List>
          <Text fontWeight="bold">Your payment details</Text>
          <List>
            <ListItem>XXXX-XXXX-XXXX-{card_number?.substring(12)}</ListItem>
            <ListItem>{exp_date}</ListItem>
          </List>
        </VStack>
        <VStack>
          <Text fontWeight="bold">Order Summary</Text>
          <Text>Subtotal: {`${subTotal} €`} </Text>
          <Text>Shipping: 4.99 €</Text>
          <Divider />
          <Text>Total: {`${subTotal + 4.99} €`}</Text>
        </VStack>
      </HStack>
      <Link href="/order_confirmation">
        <Button>Complete order</Button>
      </Link>
    </Page>
  );
}
