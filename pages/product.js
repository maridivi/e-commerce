import { Button, HStack, Image, Text, VStack } from "@chakra-ui/react";
import Page from "../components/Page";

export default function Product({ product }) {
  const { title, price, description } = product;
  return (
    <Page>
      <HStack>
        <Image alt={title} />
        <VStack>
          <Text>{title}</Text>
          <Text>{price}</Text>

          <Button>Add to cart</Button>
          <Text>{description}</Text>
        </VStack>
      </HStack>
    </Page>
  );
}
