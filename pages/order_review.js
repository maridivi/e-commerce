import {
  Button,
  Divider,
  Grid,
  GridItem,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { useContext } from "react";
import Page from "../components/Page";
import Section from "../components/Section";
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
    return prevPrice + item.price * item.quantity;
  }, 0);

  return (
    <Page>
      <Section>
        <Text fontSize="x-large" mb={12}>
          Review your order
        </Text>

        <VStack alignItems="start" mb="20px">
          <VStack align="start" spacing={0} padding={6}>
            <Text fontWeight="bold" mt={6} mb={2}>
              Your Shipping details
            </Text>

            <Text>{firstName.value}</Text>
            <Text>{lastName.value}</Text>
            <Text>{address.value}</Text>
            <Text pb={6}>
              {city.value + " " + state.value + " " + zip_code.value}
            </Text>

            <Text fontWeight="bold" pb={2}>
              Your payment details
            </Text>
            <Text>XXXX-XXXX-XXXX-{card_number.value.substring(12)}</Text>
            <Text>{exp_date.value}</Text>
          </VStack>

          <VStack align="left" padding={6} height="100%">
            <Text fontWeight="bold">Order Summary</Text>
            <Text>Subtotal: {`${subTotal} €`} </Text>
            <Text>Shipping: 4.99 €</Text>
            <Divider />
            <Text>Total: {`${Round(subTotal + 4.99)} €`}</Text>
          </VStack>
        </VStack>

        <Link href="/order_confirmation">
          <Button backgroundColor="coral.200" color="white">
            Complete order
          </Button>
        </Link>
      </Section>
    </Page>
  );
}

function Round(num) {
  return Math.round(num * 100) / 100;
}
