import {
  Box,
  Button,
  HStack,
  Image,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "../pages/_app";
import { FiTrash2 } from "react-icons/fi";

export const quantities = [0, 1, 2, 3, 4, 5, 6, 7, 8];

export default function CartItem({ item }) {
  const { image, title, price, id, quantity } = item;

  const { setCartItems } = useContext(CartContext);

  function handleQuantityChange(event) {
    const value = event.target.value;
    setCartItems((items) => {
      return items.map((cartItem) => {
        if (cartItem.id === id) {
          return { ...cartItem, quantity: parseInt(value) };
        } else {
          return cartItem;
        }
      });
    });
  }

  function removeProduct() {
    setCartItems((items) => {
      const isSelectedProduct = (product) => product.id === id;
      const itemIndex = items.findIndex(isSelectedProduct);
      const newItems = [...items];
      newItems.splice(itemIndex, 1);
      return newItems;
    });
  }

  return (
    <HStack
      justify="space-between"
      align="center"
      width="100vw"
      maxW="600px"
      padding={4}
      border="solid"
    >
      <Box width={64} margin="0 auto">
        <Image
          alt={title}
          src={image}
          minHeight="0"
          objectFit="contain"
          maxHeight="200px"
          margin="0 auto"
        ></Image>
      </Box>

      <VStack justify="center" align="start" width={["100px", "200px"]}>
        <Text textAlign="center" fontSize={["xs", "md"]}>
          {title}
        </Text>
        <Text fontWeight="bold">{price} €</Text>
        <Select onChange={handleQuantityChange} width={16}>
          {quantities.map((q, i) => (
            <option selected={q === quantity} key={i}>
              {q}
            </option>
          ))}
        </Select>
      </VStack>
      <Button onClick={removeProduct}>
        <FiTrash2 />
      </Button>
    </HStack>
  );
}
