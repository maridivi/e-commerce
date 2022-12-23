import { Box } from "@chakra-ui/react";

export default function Section({ children, maxW = 1200, py = 6, gap }) {
  return (
    <Box
      width="100%"
      maxW={maxW}
      py={py}
      px={[8, 10]}
      mx="auto"
      overflow="hidden"
      gap={gap}
    >
      {children}
    </Box>
  );
}
