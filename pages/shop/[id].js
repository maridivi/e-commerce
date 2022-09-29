import {
  Box,
  Button,
  HStack,
  Image,
  Select,
  Stack,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useRef, useState } from "react";
import Page from "../../components/Page";
import { CartContext } from "../_app";

export async function getServerSideProps(context) {
  const id = context.query.id;
  try {
    const product = (await axios.get(`https://fakestoreapi.com/products/${id}`))
      .data;
    return { props: { product } };
  } catch (err) {
    console.error(err.toString(), id);
    return { props: {} };
  }
}

export default function ProductPage({ product: fetchedProduct }) {
  const { setCartItems, cartItems } = useContext(CartContext);
  const router = useRouter();
  const product = fetchedProduct;
  const [quantity, setQuantity] = useState(0);
  const toast = useToast();

  // const [product, setProduct] = useState(undefined);

  function addProduct() {
    setCartItems((currentItems) => [
      ...currentItems,
      { details: product, quantity: 1 },
    ]);
    toast({
      title: "Product added to cart.",
      description: "Go to cart to change quantity.",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
  }

  return (
    <Page padding={8}>
      <HStack>
        <Link href="/shop">
          <Button>Continue Shopping</Button>
        </Link>
        <Link href="/cart">
          <Button>Go to cart</Button>
        </Link>
      </HStack>

      <Stack
        key={product?.id}
        direction={["column", "column", "row"]}
        gap={[4, 8, 16, 32, 64]}
        px={[4, 8, 16, 32, 64]}
        py={32}
      >
        <Image
          alt={product?.title}
          src={product?.image}
          minHeight="0"
          objectFit="contain"
          maxHeight="300px"
        />
        <VStack gap={4}>
          <Text fontSize="xl" fontWeight="bold">
            {product?.title}
          </Text>
          <Text>{product?.price}</Text>

          <Text>{product?.description}</Text>

          <Button onClick={addProduct}>Add to cart</Button>
        </VStack>
      </Stack>
    </Page>
  );
}
