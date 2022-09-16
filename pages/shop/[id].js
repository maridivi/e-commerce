import { Button, Image, Stack, Text, VStack } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Page from "../../components/Page";

export async function getServerSideProps(context) {
  const id = context.query.id;
  try {
    const product = (await axios.get(`https://fakestoreapi.com/products/${id}`))
      .data;
    return { props: { product } };
  } catch (err) {
    console.error(err.toString(), id);
    return { props: {} };
  }
}

export default function ProductPage({ product: fetchedProduct }) {
  const router = useRouter();

  // const [product, setProduct] = useState(undefined);

  const product = fetchedProduct;

  // const { id } = router.query;

  // useEffect(() => {
  //   const getSingleProduct = async () => {
  //     try {
  //       if (!id) return;

  //       const response = await fetch(`https://fakestoreapi.com/products/${id}`);

  //       const fetchedpPoduct = await response.json();
  //       setProduct(fetchedpPoduct);
  //     } catch (error) {
  //       //handle error
  //       console.log(error);
  //     }
  //   };

  //   getSingleProduct();
  // }, [id]);

  return (
    <Page>
      <Stack
        key={product?.id}
        direction={["column", "column", "row"]}
        gap={[4, 8, 16, 32, 64]}
        px={[4, 8, 16, 32, 64]}
        py={32}
      >
        <Image
          alt={product?.title}
          src={product?.image}
          minHeight="0"
          objectFit="contain"
          maxHeight="300px"
        />
        <VStack gap={4}>
          <Text fontSize="xl" fontWeight="bold">
            {product?.title}
          </Text>
          <Text>{product?.price}</Text>

          <Text>{product?.description}</Text>
          <Button>Add to cart</Button>
        </VStack>
      </Stack>
    </Page>
  );
}
