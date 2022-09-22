import { ChakraProvider } from "@chakra-ui/react";
import { createContext, useState } from "react";
import "../styles/globals.css";

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
  const [cartItems, setCartItems] = useState([]);

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
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </CartContext.Provider>
    </FilterContext.Provider>
  );
}

export default MyApp;
