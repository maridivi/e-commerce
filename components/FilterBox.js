import {
  Box,
  Checkbox,
  CheckboxGroup,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import PricesSlider from "./PricesSlider";
import { categories, stars } from "./utils/filterData";

export default function FilterBox() {
  return (
    <Stack padding={6} marginRight="30px">
      <Text fontWeight="extrabold" fontSize="lg">
        Categories
      </Text>
      <CheckboxGroup colorScheme="gray">
        {categories.map((cat, index) => {
          return (
            <Checkbox key={index} value={cat} name={cat}>
              {cat}
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
