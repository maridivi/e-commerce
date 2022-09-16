import { ChakraProvider } from "@chakra-ui/react";
import { createContext, useState } from "react";
import "../styles/globals.css";

export const FilterContext = createContext({
  selectedCategories: [],
  setSelectedCategories: () => {},
});

function MyApp({ Component, pageProps }) {
  const [selectedCategories, setSelectedCategories] = useState([]);

  return (
    <FilterContext.Provider
      value={{ selectedCategories, setSelectedCategories }}
    >
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </FilterContext.Provider>
  );
}

export default MyApp;
