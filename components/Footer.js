import { HStack, Icon, Text, VStack, Link } from "@chakra-ui/react";
import NextLink from "./NextLink";
import { GiBowTie } from "react-icons/gi";
import {
  AiOutlineInstagram,
  AiFillFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";
import Section from "./Section";

export default function Footer() {
  const getYear = () => {
    const date = new Date();
    const year = date.getFullYear();
    return year;
  };
  return (
    <VStack
      bottom="0"
      width="100%"
      // bgGradient="linear(to-t, #FAF7F0, white)"
      bgColor="rgb(251 247 243)"
      flexGrow={0}
      minHeight={0}
      gap={6}
      color="gray.700"
    >
      <Section>
        <HStack justify="space-between" width="100%">
          <HStack spacing={8} align="center">
            <NextLink href="/shop">Shop</NextLink>
            <NextLink href="/contact">Contact</NextLink>
            <NextLink href="/cart">Cart</NextLink>
            <NextLink href="/">Home</NextLink>
          </HStack>
          <HStack spacing={8}>
            <HStack spacing={4}>
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
            <Icon as={GiBowTie} boxSize="4rem" />
          </HStack>
        </HStack>
        <Text fontSize="xs" mb={4}>
          © {getYear()} Created by Marianna Di Vito
        </Text>
      </Section>
    </VStack>
  );
}
