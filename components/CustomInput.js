import { FormLabel, Input, Text, VStack } from "@chakra-ui/react";

export default function CustomInput({
  label,
  value,
  onChange,
  type,
  autoFocus,
  maxLength,
  minLength,
  min,
  isValid,
}) {
  return (
    <VStack align="stretch" width="300px">
      <FormLabel mb="-1" htmlFor={label}>
        {label}
      </FormLabel>
      <Input
        name={label}
        id={label}
        onChange={onChange}
        value={value}
        type={type}
        autoFocus={autoFocus}
        required={true}
        minLength={minLength}
        maxLength={maxLength}
        min={min}
        borderColor={isValid === undefined ? "black" : "red"}
      />
      {isValid && (
        <Text fontSize="xs" color="red.400">
          field required
        </Text>
      )}
    </VStack>
  );
}
