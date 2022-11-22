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
  errorMessage,
}) {
  return (
    <VStack align="stretch" maxW="500px">
      <FormLabel
        mb="-1"
        htmlFor={label}
        fontWeight="semibold"
        fontSize={["sm", "md"]}
      >
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
        borderColor={isValid === undefined ? "gray.300" : "red"}
      />
      {isValid && (
        <Text fontSize="xs" color="red.400">
          {errorMessage}
        </Text>
      )}
    </VStack>
  );
}
