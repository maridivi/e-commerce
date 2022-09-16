import {
  Box,
  Checkbox,
  CheckboxGroup,
  Stack,
  Text,
  useCheckbox,
} from "@chakra-ui/react";
import PricesSlider from "./PricesSlider";
import { categories, stars } from "../utils/filterData";
import { createContext, useContext, useEffect, useState } from "react";
import { FilterContext } from "../pages/_app";

export default function FilterBox({ isChecked, onChange }) {
  const { selectedCategories, setSelectedCategories } =
    useContext(FilterContext);

  const [checkedState, setCheckedState] = useState(
    new Array(categories.length).fill(false)
  );

  const handleCheckboxChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };

  useEffect(() => {
    setSelectedCategories(
      categories.filter((cat, index) => {
        if (checkedState[index] === true) {
          return cat;
        }
      })
    );
  }, [checkedState, setSelectedCategories]);

  return (
    <Stack padding={6}>
      <Text fontWeight="extrabold" fontSize="lg">
        Categories
      </Text>
      <CheckboxGroup colorScheme="gray">
        {categories.map((cat, index) => {
          return (
            <Checkbox
              key={index}
              value={cat}
              name={cat}
              onChange={() => handleCheckboxChange(index)}
              isChecked={checkedState[index]}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </Checkbox>
          );
        })}
      </CheckboxGroup>
      <Box mt="30px">
        <PricesSlider />
      </Box>
    </Stack>
  );
}
