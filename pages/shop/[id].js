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

  const addedProduct = (() => {
    return cartItems.find((item) => item.details.id === product.id);
  })();

  console.log(addedProduct);

  function handleQuantityChange(event) {
    const value = event.target.value;
    setCartItems((items) => {
      return items.map((cartItem) => {
        if (cartItem.details.id === product.id) {
          return { ...cartItem, quantity: parseInt(value) };
        } else {
          return cartItem;
        }
      });
    });
  }

  function increaseQuantity() {
    setCartItems((items) => {
      return items.map((cartItem) => {
        if (cartItem.details.id === product.id && addedProduct.quantity < 10) {
          return { ...cartItem, quantity: addedProduct.quantity + 1 };
        } else {
          toast({
            title: "You have reached maximum quantity!",

            status: "warning",
            duration: 4000,
            isClosable: true,
          });
          return cartItem;
        }
      });
    });
  }

  function decreaseQuantity() {
    setCartItems((items) => {
      return items.map((cartItem) => {
        if (cartItem.details.id === product.id && addedProduct.quantity > 0) {
          return { ...cartItem, quantity: addedProduct.quantity - 1 };
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
          <Button> Continue Shopping</Button>
        </Link>
        <Link href="/cart">
          <Button>Go to cart</Button>
        </Link>
      </HStack>

      <Stack
        direction={["column", "column", "row"]}
        key={product?.id}
        gap={[4, 8, 16]}
        px={[4, 8]}
        py={20}
        width="100%"
        mx="0 auto"
        mb="100px"
      >
        <Image
          alt={product?.title}
          src={product?.image}
          minHeight="0"
          objectFit="contain"
          maxHeight="300px"
          mx="0 auto"
          width={["100%", "100%", "50%"]}
          borderRadius="20px"
          padding={4}
          boxShadow="md"
        />
        <VStack gap={14} width={["100%", "100%", "50%"]} align="star">
          <Text fontSize="2xl" fontWeight="bold">
            {product?.title}
          </Text>
          <Text fontSize="lg">{product?.price} €</Text>

          <HStack>
            {isAdded ? (
              <HStack border="solid" borderRadius="5px">
                <Button variant="unstyled" onClick={decreaseQuantity}>
                  -
                </Button>
                <Text>{addedProduct.quantity}</Text>
                <Button variant="unstyled" onClick={increaseQuantity}>
                  +
                </Button>
              </HStack>
            ) : (
              <Select onChange={handleQuantityChange} width={16}>
                {quantities.map((q, i) => (
                  <option key={i}>{q}</option>
                ))}
              </Select>
            )}

            {isAdded ? (
              <Link href="/cart">
                <Button width="150px" backgroundColor="pink.200">
                  View cart
                </Button>
              </Link>
            ) : (
              <Button
                onClick={addProduct}
                width="150px"
                backgroundColor="pink.200"
              >
                Add to cart
              </Button>
            )}
          </HStack>
        </VStack>
      </Stack>
      <Stack px={[4, 8]}>
        <Text fontWeight="bold" fontSize="xl" mt={6}>
          About the product
        </Text>
        <Text>{product?.description}</Text>
      </Stack>
    </Page>
  );
}
