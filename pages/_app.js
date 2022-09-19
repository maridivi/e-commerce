import { ChakraProvider } from "@chakra-ui/react";
import { createContext, useState } from "react";
import "../styles/globals.css";

export const FilterContext = createContext({
  selectedCategories: [],
  setSelectedCategories: () => {},
  sliderValue: [0, 1000],
  setSliderValue: () => {},
});

function MyApp({ Component, pageProps }) {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sliderValue, setSliderValue] = useState([0, 300]);

  return (
    <FilterContext.Provider
      value={{
        selectedCategories,
        setSelectedCategories,
        sliderValue,
        setSliderValue,
      }}
    >
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </FilterContext.Provider>
  );
}

export default MyApp;
