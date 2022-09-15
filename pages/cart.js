import { Button, HStack, Image, Text, VStack } from "@chakra-ui/react";
import Page from "../components/Page";

export default function Cart({ selectedProducts }) {
  return (
    <Page>
      {!selectedProducts ? (
        <VStack>
          <Text>Your cart is empty! </Text>
          <Button>Go to the shop</Button>
        </VStack>
      ) : (
        selectedProducts.map((product, index) => {
          return (
            <HStack key={index}>
              <Image alt={product.title}></Image>
              <VStack>
                <Text>{product.title}</Text>
              </VStack>
            </HStack>
          );
        })
      )}
    </Page>
  );
}
