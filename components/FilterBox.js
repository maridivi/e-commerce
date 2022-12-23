import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import PricesSlider from "./PricesSlider";
import { categories } from "../utils/filterData";
import { useContext, useEffect, useState } from "react";
import { FilterContext } from "../pages/_app";

export default function FilterBox() {
  const { setSelectedCategories, sliderValue, setSliderValue } =
    useContext(FilterContext);

  const defaultCheckedStates = new Array(categories.length).fill(false);

  const [checkedState, setCheckedState] = useState(defaultCheckedStates);

  function resetFilters() {
    setSelectedCategories([]);
    setSliderValue([0, 5000]);
    setCheckedState(defaultCheckedStates);
  }

  const handleCheckboxChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };

  function handleSliderChange(value) {
    setSliderValue(value);
  }

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
    <Stack padding={2} gap={8}>
      <Stack>
        <Text fontWeight="extrabold" fontSize="lg">
          Categories
        </Text>
        <CheckboxGroup colorScheme="gray">
          {categories.map((category, index) => {
            return (
              <Checkbox
                key={index}
                name={category}
                onChange={() => handleCheckboxChange(index)}
                isChecked={checkedState[index]}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Checkbox>
            );
          })}
        </CheckboxGroup>

        <Box mt="30px">
          <PricesSlider
            onChange={handleSliderChange}
            sliderValue={sliderValue}
          />
        </Box>
      </Stack>
      <Button variant="solid" onClick={resetFilters} width="100px" px={16}>
        Reset Filters
      </Button>
    </Stack>
  );
}
