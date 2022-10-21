import { HStack, Icon, Text, VStack, Link } from "@chakra-ui/react";
import NextLink from "./NextLink";
import { GiBowTie } from "react-icons/gi";
import {
  AiOutlineInstagram,
  AiFillFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";

export default function Footer() {
  const getYear = () => {
    const date = new Date();
    const year = date.getFullYear();
    return year;
  };
  return (
    <VStack
      padding={10}
      bottom="0"
      width="100%"
      bgGradient="linear(to-t, #FAF7F0, white)"
      flexGrow={0}
      minHeight={0}
      gap={6}
      color="gray.700"
    >
      <HStack justify="space-evenly" align="center" width="100%">
        <VStack align="flex-start">
          <NextLink href="/shop">Shop</NextLink>
          <NextLink href="/contact">Contact</NextLink>
          <NextLink href="/cart">Cart</NextLink>
          <NextLink href="/">Home</NextLink>
        </VStack>
        <VStack>
          <Icon as={GiBowTie} boxSize="6rem" />
          <HStack>
            <Link href="https://www.instagram.com/" target="_blank">
              <AiOutlineInstagram cursor="pointer" />
            </Link>
            <Link href="https://www.facebook.com/">
              <AiFillFacebook />
            </Link>
            <Link href="https://twitter.com/home">
              <AiOutlineTwitter />
            </Link>
          </HStack>
        </VStack>
      </HStack>

      <Text fontSize="xs">© {getYear()} Created by Marianna Di Vito</Text>
    </VStack>
  );
}
