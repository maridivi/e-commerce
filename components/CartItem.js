import {
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

export default function CartItem({ itemTitle, itemImg }) {
  const { setCartItems, cartItems } = useContext(CartContext);
  const quantities = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  function handleQuantityChange(event) {
    const value = event.target.value;
    setCartItems((prev) => {
      return prev.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: value };
        } else {
          return cartItem;
        }
      });
    });
  }
  console.log(cartItems);
  return (
    <Stack direction={["column", "row", "row"]}>
      <Image alt={itemTitle} src={itemImg}></Image>
      <Stack>
        <Text>{itemTitle}</Text>
        <Select onChange={handleQuantityChange}>
          {quantities.map((q, i) => (
            <option key={i}>{q}</option>
          ))}
        </Select>
      </Stack>
    </Stack>
  );
}
