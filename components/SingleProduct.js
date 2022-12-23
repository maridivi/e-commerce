import { Image, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";

export default function SingleProduct({ product }) {
  const { title, price, id, image } = product;

  return (
    <Link href={{ pathname: "shop/[id]", query: { id: id } }}>
      <VStack
        alignItems="stretch"
        justifyContent="stretch"
        overflow="hidden"
        width="100%"
        height={200}
        cursor="pointer"
        borderRadius="10px"
        boxShadow="lg"
        spacing={0}
      >
        <Image
          alt={title}
          src={image}
          objectFit="cover"
          minH={0}
          flex="1 1 100%"
        />

        <VStack
          justify="start"
          maxW="100%"
          flexShrink="0"
          align="start"
          spacing={0.5}
          px={3}
          py={2}
          flex="1 0 auto"
        >
          <Text maxWidth="100%" fontSize="sm">
            {title}
          </Text>
          <Text fontSize="xs" color="gray.500">
            {price.toString().replace(".", ",")} €
          </Text>
        </VStack>
      </VStack>
    </Link>
  );
}
