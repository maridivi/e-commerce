import { Image, Stack, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";

export default function SingleProduct({ product }) {
  const { title, price, id, image } = product;

  return (
    <Link href={{ pathname: "shop/[id]", query: { id: id } }}>
      <Stack
        align="center"
        justify="space-between"
        height="300px"
        overflow="hidden"
        width="100%"
        cursor="pointer"
        borderRadius="10px"
        boxShadow="md"
        padding={4}
        gap={4}
      >
        <Image alt={title} src={image} objectFit="contain" minHeight="0" />

        <VStack
          justify="center"
          maxW="100%"
          flexShrink="0"
          gap={6}
          align="start"
        >
          <Text
            align="center"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden"
            maxWidth="100%"
            fontSize="md"
          >
            {title}
          </Text>
          <Text fontSize="sm">{price} €</Text>
        </VStack>
      </Stack>
    </Link>
  );
}
