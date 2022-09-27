import {
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Stack,
  VStack,
} from "@chakra-ui/react";

export default function CustomInput({
  label,
  input,
  onChange,
  type,
  isError = false,
}) {
  const isInputError = isError;
  return (
    <VStack align="stretch" width="300px">
      <FormLabel mb="-1">{label}</FormLabel>
      <Input onChange={onChange} value={input} type={type} />
      {isInputError === true && (
        <FormErrorMessage>{`${label} is required.`}</FormErrorMessage>
      )}
    </VStack>
  );
}
