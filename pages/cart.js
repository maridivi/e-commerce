import { Button, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { useContext } from "react";
import CartItem from "../components/CartItem";
import Page from "../components/Page";
import { CartContext } from "./_app";

export default function Cart() {
  const { cartItems } = useContext(CartContext);

  console.log(cartItems);

  return (
    <Page>
      {!cartItems ? (
        <VStack>
          <Text>Your cart is empty! </Text>
          <Button>Go to the shop</Button>
        </VStack>
      ) : (
        <Stack direction={["column", "row"]}>
          {cartItems.map((item, index) => {
            return (
              <CartItem
                key={index}
                itemImg={item.details.image}
                itemTitle={item.details.title}
              />
            );
          })}
        </Stack>
      )}
    </Page>
  );
}
