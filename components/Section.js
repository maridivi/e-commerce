import { Box } from "@chakra-ui/react";

export default function Section({ children, maxW = 900, py = 5 }) {
  return (
    <Box width="100%" maxW={maxW} py={py} px={[4, 6]} mx="auto">
      {children}
    </Box>
  );
}
