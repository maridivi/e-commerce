import {
  Button,
  Divider,
  List,
  ListItem,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { useContext } from "react";
import Page from "../components/Page";
import { CartContext, UserContext } from "./_app";

export default function ReviewOrder() {
  const { userData } = useContext(UserContext);
  const { cartItems } = useContext(CartContext);

  const {
    "First Name": firstName,
    "Last Name": lastName,
    Email: email,
    "Street Address": address,
    City: city,
    State: state,
    "Zip Code": zip_code,
    "Credit/Debit Card Number": card_number,
    "Expiry Date": exp_date,
  } = userData;

  const subTotal = cartItems.reduce((prevPrice, item) => {
    return prevPrice + item.details.price * item.quantity;
  }, 0);

  return (
    <Page padding={16}>
      <Text fontSize="x-large" mb={12}>
        Review your order
      </Text>
      <Stack
        align="space-between"
        justify="space-around"
        width="100%"
        mt={16}
        direction={["column", "row"]}
      >
        <VStack mb={16}>
          <Text fontWeight="bold">Your personal data</Text>
          <List>
            <ListItem>{firstName.value}</ListItem>
            <ListItem>{lastName.value}</ListItem>
            <ListItem>{email.value}</ListItem>
          </List>
          <Text fontWeight="bold">Your Shipping details</Text>
          <List>
            <ListItem>{address.value}</ListItem>
            <ListItem>
              {city.value + " " + state.value + " " + zip_code.value}
            </ListItem>
          </List>
          <Text fontWeight="bold">Your payment details</Text>
          <List>
            <ListItem>
              XXXX-XXXX-XXXX-{card_number.value.substring(12)}
            </ListItem>
            <ListItem>{exp_date.value}</ListItem>
          </List>
        </VStack>
        <VStack>
          <Text fontWeight="bold">Order Summary</Text>
          <Text>Subtotal: {`${subTotal} €`} </Text>
          <Text>Shipping: 4.99 €</Text>
          <Divider />
          <Text>Total: {`${Round(subTotal + 4.99)} €`}</Text>
        </VStack>
      </Stack>
      <Link href="/order_confirmation">
        <Button>Complete order</Button>
      </Link>
    </Page>
  );
}

function Round(num) {
  return Math.round(num * 100) / 100;
}
