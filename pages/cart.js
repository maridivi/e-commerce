import { Button, Stack, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { useContext } from "react";
import CartItem from "../components/CartItem";
import Page from "../components/Page";
import { CartContext } from "./_app";

export default function Cart() {
  const { cartItems, setCartItems } = useContext(CartContext);

  return (
    <Page padding={8}>
      <Link href="/shop">
        <Button>Continue Shopping</Button>
      </Link>

      {!cartItems ? (
        <VStack>
          <Text>Your cart is empty! </Text>
          <Button>Go to the shop</Button>
        </VStack>
      ) : (
        <Stack
          direction="column"
          gap={[4, 8, 16]}
          px={[4, 8, 16, 32, 64]}
          py={32}
        >
          {cartItems.map((item, index) => {
            return <CartItem key={index} item={item} />;
          })}
        </Stack>
      )}
      <Link href="/checkout">
        <Button variant="primary">Go to checkout</Button>
      </Link>
    </Page>
  );
}
