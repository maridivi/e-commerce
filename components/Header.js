import {
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

export default function Header() {
  const breakpoints = {
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1536px",
  };

  const theme = extendTheme({ breakpoints });
  const [isSmallerThan550] = useMediaQuery("(max-width: 550px)");

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
    >
      <NextLink href="/">
        <Link fontSize={28}>HOME</Link>
      </NextLink>
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
            <MenuItem>Cart</MenuItem>
            <MenuItem>Contact</MenuItem>
          </MenuList>
        </Menu>
      ) : (
        <HStack>
          <NextLink href="/shop">Shop</NextLink>
          <NextLink href="/cart">Cart</NextLink>
          <NextLink href="/contact">Contact</NextLink>
        </HStack>
      )}
    </Stack>
  );
}
