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
      height="16"
      padding="6"
      width="100%"
      align="center"
      position="sticky"
      top="0"
      zIndex={10}
      color="gray.900"
      // bgGradient="linear(to-b, #FAF7F0, white)"
      bgColor="rgb(251 247 243)"
    >
      <NextLink href="/">
        <Link fontSize={22} fontFamily="lora, serif">
          HOME
        </Link>
      </NextLink>
      <HStack gap={[2, 4, 6, 8]}>
        {isSmallerThan550 ? (
          <Menu>
            <MenuButton
              variant="ghost"
              as={IconButton}
              aria-label="Options"
              icon={<GiHamburgerMenu size={24} color="black" />}
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
          <HStack gap={[2, 4, 6, 8]}>
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
                width: 20,
                height: 20,

                right: 11,
                top: 5,
                alignItems: "center",
                justifyContent: "center",
                zIndex: 2,
              }}
              backgroundColor="pink.300"
              position="absolute"
              border="solid"
              borderRadius="100%"
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
