import {
  Box,
  HStack,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Text,
} from "@chakra-ui/react";

function PricesSlider({ sliderValue, onChange }) {
  return (
    <Box height="100px" width="300px" marginTop="40px" textAlign="left">
      <Text fontWeight="bold" fontSize="lg" mb="2">
        Price
      </Text>
      <Text color="blue.500">{`${sliderValue[0]}-${sliderValue[1]}`}</Text>
      <RangeSlider
        aria-label={["min", "max"]}
        min={0}
        max={300}
        step={10}
        onChange={onChange}
        value={sliderValue}
        w="200px"
      >
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
      </RangeSlider>
      <HStack justify="space-between" width="200px">
        <Text fontSize="md">0</Text>
        <Text fontSize="md">1000 $</Text>
      </HStack>
    </Box>
  );
}

export default PricesSlider;
