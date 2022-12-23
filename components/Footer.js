import {
  HStack,
  Icon,
  Text,
  VStack,
  Link,
  Box,
  Stack,
  Image,
} from "@chakra-ui/react";
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
      pt="10px"
    >
      <Section py={4}>
        <Stack
          justify="space-between"
          spacing={0}
          width="100%"
          direction={["column", "column", "row"]}
        >
          <HStack
            align="center"
            spacing={[2, 4]}
            justify={["space-between", "start"]}
            mb="10px"
            mt={["0", "0", "10px"]}
          >
            <NextLink href="/shop">Shop</NextLink>
            <NextLink href="/contact">Contact</NextLink>
            <NextLink href="/cart">Cart</NextLink>
            <NextLink href="/">Home</NextLink>
          </HStack>
          <HStack spacing={[2, 4, 8]} h={[14, "auto"]}>
            <HStack spacing={3}>
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
            <Image height="25px" src="/images/logo.png" alt="logo" />
          </HStack>
        </Stack>
        <Text fontSize={["2xs", "xs"]} mt="16px">
          © {getYear()} Created by Marianna Di Vito
        </Text>
      </Section>
    </Box>
  );
}
