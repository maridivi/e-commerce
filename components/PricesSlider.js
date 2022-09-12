import {
  Box,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Text,
} from "@chakra-ui/react";

function PricesSlider({ sliderValue, onChange }) {
  return (
    <Box height="100px" width="300px" marginTop="40px" textAlign="center">
      <Text fontWeight="bold" fontSize="lg">
        Price
      </Text>
      <Text fontSize="md">{`${convertTime(sliderValue[0])}-${convertTime(
        sliderValue[1]
      )}`}</Text>
      <RangeSlider
        aria-label={["min", "max"]}
        min={0}
        max={300}
        step={10}
        onChange={onChange}
        value={sliderValue}
      >
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
      </RangeSlider>
    </Box>
  );
}

export default PricesSlider;
