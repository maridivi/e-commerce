import { ChakraProvider } from "@chakra-ui/react";
import { createContext, useState } from "react";
import "../styles/globals.css";
import useLocalStorage from "../utils/hooks/useLocalStorage";
import "@fontsource/lora/400.css";
import "@fontsource/inter/400.css";
import theme from "../utils/theme";

export const FilterContext = createContext({
  selectedCategories: [],
  setSelectedCategories: () => {},
  sliderValue: [0, 1000],
  setSliderValue: () => {},
});

export const CartContext = createContext({
  cartItems: [],
  setCartItems: () => {},
});

function MyApp({ Component, pageProps }) {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sliderValue, setSliderValue] = useState([0, 1000]);
  const [cartItems, setCartItems] = useLocalStorage("cartItems", []);

  return (
    <FilterContext.Provider
      value={{
        selectedCategories,
        setSelectedCategories,
        sliderValue,
        setSliderValue,
      }}
    >
      <CartContext.Provider value={{ cartItems, setCartItems }}>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </CartContext.Provider>
    </FilterContext.Provider>
  );
}

export default MyApp;
