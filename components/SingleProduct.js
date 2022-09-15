import {
  AspectRatio,
  Box,
  Button,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { url } from "../utils/filterData";

// export const ProductContext = createContext({
//   fetchedProduct: undefined,
//   setFetchedProduct: () => {},
// });

export default function SingleProduct({ product }) {
  const [fetchedProduct, setFetchedProduct] = useState();
  const { title, price, id, image } = product;

  // const getSingleProduct = useCallback(async () => {
  //   try {
  //     const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  //     console.log(response);
  //     const product = await response.json();
  //     setFetchedProduct(product);
  //   } catch (error) {
  //     //handle error
  //   }
  // }, [id]);

  // console.log(fetchedProduct);

  // useEffect(() => {
  //   getSingleProduct();
  // }, [getSingleProduct]);

  return (
    <Link href={{ pathname: "shop/[id]", query: { id: id } }}>
      <VStack
        borderColor="red"
        align="center"
        justify="space-between"
        height="250px"
        overflow="hidden"
        width="100%"
        cursor="pointer"
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
    </Link>
  );
}
