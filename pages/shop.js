import {
  Grid,
  HStack,
  Select,
  Text,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import { createContext, useContext, useState } from "react";
import FilterBox from "../components/FilterBox";
import FilterModal from "../components/FilterModal";
import Page from "../components/Page";
import Section from "../components/Section";
import SingleProduct from "../components/SingleProduct";
import getProducts from "../utils/airtable/getProducts";
import { FilterContext } from "./_app";

const ProductsContext = createContext({
  fetchedProducts: undefined,
});

export async function getServerSideProps() {
  try {
    const products = await getProducts();
    return { props: { products } };
  } catch (err) {
    console.log(err);
    return { props: {} };
  }
}

export default function Shop({ products }) {
  const [isBiggerThan960] = useMediaQuery("(min-width: 960px)");
  const [isSmallerThan960] = useMediaQuery("(max-width: 960px)");
  const [order, setOrder] = useState("a-z");
  const { selectedCategories, sliderValue } = useContext(FilterContext);

  const minPrice = sliderValue[0];
  const maxPrice = sliderValue[1];

  function changeProductsOrder(e) {
    setOrder(e.target.value);
  }

  const shownProducts = (() => {
    if (!products) return [];
    let res = [];
    if (selectedCategories.length > 0) {
      res = products.filter((item) =>
        selectedCategories.includes(item.category)
      );
    } else {
      res = products;
    }
    return res.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );
  })();

  const sortedProducts = (() => {
    let copyOfSortedProducts;
    if (order === "a-z") {
      copyOfSortedProducts = shownProducts.sort((a, b) => {
        return a.title.localeCompare(b.title);
      });
    }
    if (order === "z-a") {
      copyOfSortedProducts = shownProducts.sort((a, b) => {
        return b.title.localeCompare(a.title);
      });
    }
    if (order === "lowest") {
      copyOfSortedProducts = shownProducts.sort((a, b) => {
        return a.price - b.price;
      });
    }
    if (order === "highest") {
      copyOfSortedProducts = shownProducts.sort((a, b) => {
        return b.price - a.price;
      });
    }

    return copyOfSortedProducts;
  })();

  return (
    <ProductsContext.Provider value={products}>
      <Page>
        <Section>
          <HStack
            borderColor="blue"
            width="100%"
            alignItems="flex-start"
            gap={2}
          >
            {isBiggerThan960 && <FilterBox />}

            <VStack w="100%" gap={8}>
              <HStack justify="space-between" width="100%">
                {isSmallerThan960 && <FilterModal />}

                <HStack flexGrow="0">
                  <Text whiteSpace="nowrap" fontSize={["xs", "sm"]}>
                    Order by:
                  </Text>
                  <Select
                    onChange={changeProductsOrder}
                    color="gray.700"
                    fontSize={["xs", "sm"]}
                  >
                    <option value="lowest">Price: lowest first</option>
                    <option value="highest">Price: highest first</option>
                    <option value="a-z">Name: A-Z</option>
                    <option value="z-a">Name: Z-A</option>
                  </Select>
                </HStack>
              </HStack>
              <Grid
                templateColumns="repeat( auto-fit, minmax(150px, 1fr) )"
                templateRows="minmax(200px, 1fr)"
                gap={[4, 8]}
                w="100%"
              >
                {sortedProducts?.map((product, index) => (
                  <SingleProduct product={product} key={index} />
                ))}
              </Grid>
            </VStack>
          </HStack>
        </Section>
      </Page>
    </ProductsContext.Provider>
  );
}
