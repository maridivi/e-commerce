import { FormLabel, Input, VStack } from "@chakra-ui/react";

export default function CustomInput({
  label,
  value,
  onChange,
  type,
  autoFocus,
  isError = false,
}) {
  return (
    <VStack align="stretch" width="300px">
      <FormLabel mb="-1">{label}</FormLabel>
      <Input
        onChange={onChange}
        value={value}
        type={type}
        autoFocus={autoFocus}
      />
    </VStack>
  );
}
