import { ChakraProvider } from "@chakra-ui/react";
import { createContext, useEffect, useState } from "react";
import "../styles/globals.css";
import useLocalStorage from "../utils/hooks/useLocalStorage";

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

  // useEffect(() => {
  //   localStorage.setItem("cartItems", JSON.stringify(cartItems));
  // }, [cartItems]);
  // useEffect(() => {
  //   const items = JSON.parse(localStorage.getItem("cartItems"));
  //   if (items) {
  //     setCartItems(items);
  //   }
  // }, [setCartItems]);

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
