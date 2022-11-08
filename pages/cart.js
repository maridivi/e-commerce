import { Button, Stack, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { useContext } from "react";
import CartItem from "../components/CartItem";
import Page from "../components/Page";
import { CartContext } from "./_app";

export default function Cart() {
  const { cartItems, setCartItems } = useContext(CartContext);

  return (
    <Page>
      {cartItems.length === 0 ? (
        <VStack paddingTop={24} gap={8}>
          <Text fontSize={24} fontWeight="semibold">
            Your cart is empty!{" "}
          </Text>
          <Link href="/shop">
            <Button>Go to the shop</Button>
          </Link>
        </VStack>
      ) : (
        <Stack
          direction="column"
          gap={[4, 8, 16]}
          px={[4, 8, 16, 32, 64]}
          py={24}
          align="center"
        >
          <Link href="/shop">
            <Button width="200px">Continue Shopping</Button>
          </Link>
          {cartItems.map((item, index) => {
            return <CartItem key={index} item={item} />;
          })}
          <Link href="/checkout">
            <Button variant="primary" backgroundColor="pink.200" width="200px">
              Go to checkout
            </Button>
          </Link>
        </Stack>
      )}
    </Page>
  );
}
