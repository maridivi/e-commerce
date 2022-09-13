import {
  Button,
  Grid,
  GridItem,
  HStack,
  Select,
  Stack,
  Text,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import FilterBox from "../components/FilterBox";
import Page from "../components/Page";
import { url } from "../components/utils/filterData";
import Product from "../components/SingleProduct";
import SingleProduct from "../components/SingleProduct";

export default function Shop() {
  const [isBiggerThan960] = useMediaQuery("(min-width: 960px)");
  const [isBiggerThan500] = useMediaQuery("(min-width: 500px)");
  const [isBiggerThan768] = useMediaQuery("(min-width: 768px)");
  const [isBiggerThan1200] = useMediaQuery("(min-width: 1200px)");
  const [isBiggerThan1400] = useMediaQuery("(min-width: 1400px)");

  const [fetchedProducts, setFetchedProducts] = useState();

  const getProducts = useCallback(async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products?limit=5");
      const products = await response.json();
      setFetchedProducts([...products]);
    } catch (error) {
      //handle error
      console.log(error);
    }
  }, []);

  console.log(fetchedProducts);

  useEffect(() => {
    if (!fetchedProducts) {
      getProducts();
    }
  }, [fetchedProducts, getProducts]);

  return (
    <Page padding={12}>
      <HStack borderColor="blue" align="center" width="100%">
        {isBiggerThan960 && <FilterBox />}

        <VStack w="100%">
          <HStack justify="space-between" width="100%">
            <Button>Show filters</Button>
            <HStack flexGrow="0">
              <Text>Order by:</Text>
              <Select>
                <option>Price: lowest first</option>
                <option>Price: higher first</option>
                <option>Name: A-Z</option>
                <option>Name: Z-A</option>
              </Select>
            </HStack>
          </HStack>
          <Grid
            padding={4}
            templateColumns="repeat( auto-fit, minmax(150px, 1fr) )"
            templateRows="minmax(200px, 1fr)"
            gap={8}
            w="100%"
          >
            {fetchedProducts?.map((product, index) => {
              return <SingleProduct product={product} key={index} />;
            })}
          </Grid>
        </VStack>
      </HStack>
    </Page>
  );
}
