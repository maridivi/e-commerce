import {
  Box,
  Button,
  HStack,
  Image,
  Input,
  Select,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "../pages/_app";
import { FiTrash2 } from "react-icons/fi";

export default function CartItem({ item }) {
  const { quantity, details } = item;
  const { image, title, price, id } = details;

  const { setCartItems } = useContext(CartContext);

  const quantities = [0, 1, 2, 3, 4, 5, 6, 7, 8];
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

  function removeProduct() {
    setCartItems((items) => {
      const isSelectedProduct = (product) => product.details.id === id;
      const itemIndex = items.findIndex(isSelectedProduct);
      const newItems = [...items];
      newItems.splice(itemIndex, 1);
      return newItems;
    });
  }

  return (
    <Stack
      direction={["column", "column", "row"]}
      justify="space-between"
      gap={[2, 4, 6, 8, 10, 12]}
      align="center"
      width="100%"
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

      <VStack justify="center" align="center" width={["200", "300px", "400px"]}>
        <Text textAlign="center">{title}</Text>
        <Text fontWeight="bold">{price}</Text>
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
    </Stack>
  );
}
