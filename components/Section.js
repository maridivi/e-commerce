import { Box } from "@chakra-ui/react";

export default function Section({ children, maxW = 900, py = 6 }) {
  return (
    <Box width="100%" maxW={maxW} py={py} px={[8, 10]} mx="auto">
      {children}
    </Box>
  );
}
