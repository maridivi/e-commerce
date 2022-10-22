import { Image, Stack, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";

export default function SingleProduct({ product }) {
  const { title, price, id, image } = product;

  return (
    <Link href={{ pathname: "shop/[id]", query: { id: id } }}>
      <Stack
        align="center"
        justify="space-between"
        height="250px"
        overflow="hidden"
        width="100%"
        cursor="pointer"
      >
        <Image alt={title} src={image} objectFit="contain" minHeight="0" />

        <VStack justify="center" maxW="100%" flexShrink="0">
          <Text
            align="center"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden"
            maxWidth="100%"
          >
            {title}
          </Text>
          <Text>{price}</Text>
        </VStack>
      </Stack>
    </Link>
  );
}
