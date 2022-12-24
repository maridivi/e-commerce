import { Button, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";

import { useContext } from "react";
import Page from "../../components/Page";
import Section from "../../components/Section";
import { vercelApi } from "../shop";
import { CartContext } from "../_app";

export async function getServerSideProps(context) {
  const id = context.query.id;
  try {
    const product = (await vercelApi.get(`/api/products/${id}`)).data;
    return { props: { product } };
  } catch (err) {
    console.error(err.toString(), id);
    return { props: {} };
  }
}

export default function ProductPage({ product }) {
  const { setCartItems, cartItems } = useContext(CartContext);

  const cartItem = cartItems.find((item) => item.id === product.id);
  const isAdded = !!cartItem;

  function addProduct() {
    const productExists = cartItems.find((item) => item.id === product.id);

    if (productExists) {
      const newCartItems = cartItems.map((item) =>
        item.id === product.id
          ? { ...productExists, quantity: productExists.quantity + 1 }
          : item
      );
      setCartItems(newCartItems);
    } else {
      const newCartItems = [...cartItems, { ...product, quantity: 1 }];
      setCartItems(newCartItems);
    }
  }

  function removeProduct() {
    const productExists = cartItems.find((item) => item.id === product.id);
    if (productExists.quantity === 1) {
      const newCartItems = cartItems.filter((item) => item.id !== product.id);
      setCartItems(newCartItems);
    } else {
      const newCartItems = cartItems.map((item) =>
        item.id === product.id
          ? { ...productExists, quantity: productExists.quantity - 1 }
          : item
      );

      setCartItems(newCartItems);
    }
  }

  return (
    <Page>
      <HStack mt={6}>
        <Link href="/shop">
          <Button> Continue Shopping</Button>
        </Link>
        <Link href="/cart">
          <Button>Go to cart</Button>
        </Link>
      </HStack>
      <Section py={0}>
        <Stack
          direction={["column", "column", "row"]}
          key={product?.id}
          gap={[4, 6, 8]}
          py={20}
          justifyContent="center"
          alignItems="center"
          w="100%"
          maxW={920}
          overflow="hidden"
        >
          <Image
            alt={product?.title}
            src={product?.image}
            objectFit="cover"
            maxWidth={["100%", "100%", "400px", "400px", "500px"]}
            height="auto"
            minWidth={0}
            mx="0 auto"
            borderRadius="10px"
            boxShadow="lg"
          />
          <VStack
            gap={2}
            width={["100%", "100%", "50%"]}
            maxW="100%"
            align="start"
          >
            <Text fontSize="2xl" fontWeight="bold">
              {product?.title}
            </Text>

            <Text fontSize="sm">{product?.description}</Text>
            <Text fontSize="md" fontWeight="semibold">
              {product?.price.toString().replace(".", ",")} €
            </Text>

            <HStack>
              {isAdded && (
                <HStack border="solid" borderRadius="5px">
                  <Button variant="unstyled" onClick={removeProduct}>
                    -
                  </Button>
                  <Text>{cartItem.quantity}</Text>
                  <Button variant="unstyled" onClick={addProduct}>
                    +
                  </Button>
                </HStack>
              )}

              {isAdded ? (
                <Link href="/cart">
                  <Button
                    width="150px"
                    backgroundColor="coral.400"
                    color="white"
                    _hover={{ backgroundColor: "coral.300" }}
                  >
                    View cart
                  </Button>
                </Link>
              ) : (
                <Button
                  onClick={addProduct}
                  width="150px"
                  backgroundColor="coral.200"
                  color="white"
                  _hover={{ backgroundColor: "coral.100" }}
                >
                  Add to cart
                </Button>
              )}
            </HStack>
          </VStack>
        </Stack>
      </Section>
    </Page>
  );
}
