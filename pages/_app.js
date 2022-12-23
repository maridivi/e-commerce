import { ChakraProvider } from "@chakra-ui/react";
import { createContext, useState } from "react";
import "../styles/globals.css";
import "@fontsource/lora/400.css";
import "@fontsource/inter/400.css";
import theme from "../utils/theme";

export const FilterContext = createContext({
  selectedCategories: [],
  setSelectedCategories: () => {},
  sliderValue: [0, 5000],
  setSliderValue: () => {},
});

export const CartContext = createContext({
  cartItems: [],
  setCartItems: () => {},
});

export const UserContext = createContext({
  userData: {},
  setUserData: () => {},
});

function MyApp({ Component, pageProps }) {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sliderValue, setSliderValue] = useState([0, 5000]);
  const [cartItems, setCartItems] = useState([]);
  const [userData, setUserData] = useState(defaultFormData);

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
        <UserContext.Provider value={{ userData, setUserData }}>
          <ChakraProvider theme={theme}>
            <Component {...pageProps} />
          </ChakraProvider>
        </UserContext.Provider>
      </CartContext.Provider>
    </FilterContext.Provider>
  );
}

const defaultFormData = {
  "First Name": {
    value: "",
    type: "text",
  },
  "Last Name": {
    value: "",
    type: "text",
  },
  Email: {
    value: "",
    type: "email",
  },
  "Street Address": {
    value: "",
    type: "text",
    minLength: "5",
  },
  State: {
    value: "",
    type: "text",
    minLength: "2",
  },
  City: {
    value: "",
    type: "text",
    minLength: "2",
  },
  "Zip Code": {
    value: "",

    minLength: "5",
    maxLength: "12",
  },
  "Credit/Debit Card Number": {
    value: "",
    type: "number",
    minLength: "16",
    maxLength: "16",
  },
  "Expiry Date": {
    value: "",
    type: "month",
  },
};

export default MyApp;
