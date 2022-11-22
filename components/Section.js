import { Box } from "@chakra-ui/react";

export default function Section({ children, maxW = 1000, py = 6 }) {
  return (
    <Box
      width="100%"
      maxW={maxW}
      py={py}
      px={[8, 10]}
      mx="auto"
      overflow="hidden"
    >
      {children}
    </Box>
  );
}
