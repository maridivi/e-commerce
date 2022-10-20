import {
  HStack,
  Icon,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import NextLink from "./NextLink";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext } from "react";
import { CartContext } from "../pages/_app";

export default function Header() {
  const [isSmallerThan550] = useMediaQuery("(max-width: 550px)");
  const { cartItems } = useContext(CartContext);

  const cartItemsAmount = cartItems
    .map((item) => item.quantity)
    .reduce((prev, current) => {
      return prev + current;
    }, 0);

  return (
    <Stack
      display="flex"
      direction="row"
      justify="space-between"
      height="20"
      padding="6"
      width="100%"
      align="center"
      position="sticky"
      top="0"
      bgColor="pink.100"
      zIndex={10}
    >
      <NextLink href="/">
        <Link fontSize={28}>HOME</Link>
      </NextLink>
      <HStack>
        {isSmallerThan550 ? (
          <Menu>
            <MenuButton
              variant="ghost"
              as={IconButton}
              aria-label="Options"
              icon={<GiHamburgerMenu size={24} />}
            />
            <MenuList>
              <NextLink href="/shop">
                <MenuItem>Shop</MenuItem>
              </NextLink>
              <NextLink href="/contact">
                <MenuItem>Contact</MenuItem>
              </NextLink>
            </MenuList>
          </Menu>
        ) : (
          <HStack>
            <NextLink href="/shop">Shop</NextLink>
            <NextLink href="/contact">Contact</NextLink>
          </HStack>
        )}
        <NextLink href="/cart">
          <Stack flex={1} alignItems="center" justifyContent="center">
            <Icon
              as={AiOutlineShoppingCart}
              boxSize={7}
              cursor="pointer"
              position="relative"
              mx={-1}
            />
            <Stack
              style={{
                position: "absolute",
                backgroundColor: "",
                border: "solid",
                width: 20,
                height: 20,
                borderRadius: "100%",
                right: 10,
                top: +10,
                alignItems: "center",
                justifyContent: "center",
                zIndex: 2,
              }}
              backgroundColor="pink.600"
            >
              <Text
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#FFFFFF",
                  fontSize: 10,
                }}
              >
                {cartItemsAmount}
              </Text>
            </Stack>
          </Stack>
        </NextLink>
      </HStack>
    </Stack>
  );
}
