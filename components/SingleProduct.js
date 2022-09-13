import {
  AspectRatio,
  Box,
  Button,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { url } from "./utils/filterData";

export default function SingleProduct({ product }) {
  const { title, price, description, image } = product;

  return (
    <VStack
      borderColor="red"
      align="center"
      justify="space-between"
      height="250px"
      overflow="hidden"
      width="100%"
    >
      {/* <Box bgImage={`url(${images[0]})`} bgSize="cover"></Box> */}

      <Image alt={title} src={image} objectFit="contain" minHeight="0" />

      <VStack justify="center" maxW="100%" flexShrink="0">
        <Text
          align="center"
          whiteSpace="nowrap"
          textOverflow="ellipsis"
          overflow="hidden"
          maxWidth="100%"
        >
          {/* {title.length > 60 ? `${title.slice(0, 60)}...` : title} */}
          {title}
        </Text>
        <Text>{price}</Text>
      </VStack>
    </VStack>
  );
}
