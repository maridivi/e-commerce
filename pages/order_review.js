import {
  Box,
  Button,
  Divider,
  Grid,
  GridItem,
  List,
  ListItem,
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

        <Grid mb={16} gridTemplateColumns={["2fr 1fr"]}>
          <GridItem gap={6}>
            <Box spacing={6}>
              <Text fontWeight="bold">Your Shipping details</Text>
              <List>
                <ListItem>{firstName.value}</ListItem>
                <ListItem>{lastName.value}</ListItem>
                <ListItem>{address.value}</ListItem>
                <ListItem>
                  {city.value + " " + state.value + " " + zip_code.value}
                </ListItem>
              </List>
            </Box>

            <Divider width="50%" />
            <Text fontWeight="bold">Your payment details</Text>
            <List>
              <ListItem>
                XXXX-XXXX-XXXX-{card_number.value.substring(12)}
              </ListItem>
              <ListItem>{exp_date.value}</ListItem>
            </List>
          </GridItem>
          <GridItem>
            <VStack
              align="left"
              boxShadow="lg"
              borderRadius="10px"
              padding={6}
              height="100%"
            >
              <Text fontWeight="bold">Order Summary</Text>
              <Text>Subtotal: {`${subTotal} €`} </Text>
              <Text>Shipping: 4.99 €</Text>
              <Divider />
              <Text>Total: {`${Round(subTotal + 4.99)} €`}</Text>
            </VStack>
          </GridItem>
        </Grid>
        {/* </Stack> */}
        <Link href="/order_confirmation">
          <Button>Complete order</Button>
        </Link>
      </Section>
    </Page>
  );
}

function Round(num) {
  return Math.round(num * 100) / 100;
}
