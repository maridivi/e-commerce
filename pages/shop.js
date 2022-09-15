import {
  Button,
  Grid,
  HStack,
  Select,
  Text,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import { createContext, useCallback, useEffect, useState } from "react";
import FilterBox from "../components/FilterBox";
import FilterModal from "../components/FilterModal";
import Page from "../components/Page";
import SingleProduct from "../components/SingleProduct";

const ProductsContext = createContext({
  fetchedProducts: undefined,
  setFetchedProducts: () => {},
});

export default function Shop() {
  const [isBiggerThan960] = useMediaQuery("(min-width: 960px)");
  const [isSmallerThan960] = useMediaQuery("(max-width: 960px)");

  const [filterShown, setFilterShown] = useState(true);
  const [fetchedProducts, setFetchedProducts] = useState(undefined);

  function showFilters() {
    setFilterShown(true);
  }

  const getProducts = useCallback(async () => {
    try {
      const response = await fetch("/api/get-products/");
      const products = await response.json();
      setFetchedProducts([...products]);
    } catch (error) {
      //handle error
    }
  }, []);

  useEffect(() => {
    if (!fetchedProducts) {
      getProducts();
    }
  }, [fetchedProducts, getProducts]);

  return (
    <ProductsContext.Provider value={{ fetchedProducts, setFetchedProducts }}>
      <Page padding={12}>
        <HStack
          borderColor="blue"
          width="100%"
          alignItems="flex-start"
          gap={[2]}
        >
          {isBiggerThan960 && <FilterBox />}

          <VStack w="100%">
            <HStack justify="space-between" width="100%">
              {isSmallerThan960 && <FilterModal />}

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
              gap={[8, 16]}
              w="100%"
            >
              {fetchedProducts?.map((product, index) => {
                return <SingleProduct product={product} key={index} />;
              })}
            </Grid>
          </VStack>
        </HStack>
      </Page>
    </ProductsContext.Provider>
  );
}
