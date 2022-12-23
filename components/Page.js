import { VStack } from "@chakra-ui/react";
import Footer from "./Footer";
import Header from "./Header";

export default function Page({
  children,
  padding,
  alignContent,
  justifyContent,
  position,
}) {
  return (
    <VStack minHeight="100vh" minW="100%" maxW="100%" overflow="hidden">
      <Header />
      <VStack
        minH="100%"
        minW="100%"
        padding={padding}
        alignContent={alignContent}
        justify={justifyContent}
        flex={1}
        position={position}
      >
        {children}
      </VStack>
      <Footer />
    </VStack>
  );
}
