import { HStack, Icon, Text, VStack, Link, Box, Stack } from "@chakra-ui/react";
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
    <Box
      bottom="0"
      width="100%"
      bgColor="rgb(251 247 243)"
      minHeight={0}
      color="gray.700"
      overflow="hidden"
    >
      <Section py={4}>
        <Stack
          justify="space-between"
          spacing={0}
          width="100%"
          direction={["column", "row"]}
        >
          <HStack
            spacing={[4, 6, 8]}
            align="center"
            justify={["space-between", "start"]}
          >
            <NextLink href="/shop">Shop</NextLink>
            <NextLink href="/contact">Contact</NextLink>
            <NextLink href="/cart">Cart</NextLink>
            <NextLink href="/">Home</NextLink>
          </HStack>
          <HStack
            spacing={[4, 4, 8]}
            h={[14, "auto"]}
            justify={["space-between", "end"]}
          >
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
        </Stack>
        <Text fontSize={["2xs", "xs"]}>
          © {getYear()} Created by Marianna Di Vito
        </Text>
      </Section>
    </Box>
  );
}
