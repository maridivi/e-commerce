import {
  Avatar,
  AvatarBadge,
  extendTheme,
  HStack,
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
              <MenuItem>Shop</MenuItem>
              <MenuItem>Contact</MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <HStack>
            <NextLink href="/shop">Shop</NextLink>
            <NextLink href="/contact">Contact</NextLink>
          </HStack>
        )}
        <NextLink href="/cart">
          <Avatar
            icon={<AiOutlineShoppingCart cursor="pointer" />}
            bg="transparent"
            padding="0"
            fontSize="xl"
            size="sm"
          >
            <AvatarBadge borderColor="transparent">
              <Text fontSize="sm" fontWeight="bold">
                {cartItemsAmount}
              </Text>
            </AvatarBadge>
          </Avatar>
        </NextLink>
      </HStack>
    </Stack>
  );
}
