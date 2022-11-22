import { Button, Stack, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { useContext } from "react";
import CartItem from "../components/CartItem";
import Page from "../components/Page";
import Section from "../components/Section";
import { CartContext } from "./_app";

export default function Cart() {
  const { cartItems } = useContext(CartContext);

  return (
    <Page>
      <Section py={10}>
        {cartItems.length === 0 ? (
          <VStack gap={8}>
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
            align="center"
            overflow="hidden"
            maxW="100%"
          >
            <Link href="/shop">
              <Button width="200px" fontSize={["xs", "md"]}>
                Continue Shopping
              </Button>
            </Link>
            {cartItems.map((item, index) => {
              return <CartItem key={index} item={item} />;
            })}
            <Link href="/checkout">
              <Button
                variant="primary"
                backgroundColor="pink.400"
                width="200px"
                color="white"
                _hover={{ backgroundColor: "pink.300" }}
              >
                Go to checkout
              </Button>
            </Link>
          </Stack>
        )}
      </Section>
    </Page>
  );
}
