import {
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
import { useContext, useState } from "react";
import { quantities } from "../../components/CartItem";
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
  const toast = useToast();
  const { quantity, details } = product;
  const [isAdded, setIsAdded] = useState(false);

  function addProduct() {
    setCartItems((currentItems) => [
      ...currentItems,
      { details: product, quantity: 1 },
    ]);
    setIsAdded(true);
    toast({
      title: "Product added to cart.",
      description: "Go to cart to change quantity.",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
  }

  console.log(quantity);
  console.log(product);
  console.log(cartItems);

  function handleQuantityChange(event) {
    const value = event.target.value;
    setCartItems((items) => {
      return items.map((cartItem) => {
        if (cartItem.details.id === id) {
          return { ...cartItem, quantity: parseInt(value) };
        } else {
          return cartItem;
        }
      });
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
        direction={["column", "column", "row"]}
        key={product?.id}
        gap={[4, 8, 16, 32]}
        px={[4, 8]}
        py={32}
        width="100%"
        mx="0 auto"
      >
        <Image
          alt={product?.title}
          src={product?.image}
          minHeight="0"
          objectFit="contain"
          maxHeight="300px"
          mx="0 auto"
          width={["100%", "100%", "50%"]}
        />
        <VStack gap={4} width={["100%", "100%", "50%"]} align="star">
          <Text fontSize="xl" fontWeight="bold">
            {product?.title}
          </Text>
          <Text>{product?.price} €</Text>

          <Text>{product?.description}</Text>

          <HStack>
            {isAdded ? (
              <HStack>
                <Button>-</Button>
                <Text>{quantity}</Text>
                <Button>+</Button>
              </HStack>
            ) : (
              <Select onChange={handleQuantityChange} width={16}>
                {quantities.map((q, i) => (
                  <option key={i}>{q}</option>
                ))}
              </Select>
            )}

            {isAdded ? (
              <Button width="150px">View cart</Button>
            ) : (
              <Button onClick={addProduct} width="150px">
                Add to cart
              </Button>
            )}
          </HStack>
        </VStack>
      </Stack>
    </Page>
  );
}
