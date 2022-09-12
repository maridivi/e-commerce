import { Stack, VStack } from "@chakra-ui/react";
import Footer from "./Footer";
import Header from "./Header";

export default function Page({
  children,
  padding,
  alignContent,
  justifyContent,
}) {
  return (
    <VStack minHeight="100vH" border="solid">
      <Header />
      <VStack
        minH="100vh"
        border="solid"
        minW="100%"
        padding={padding}
        alignContent={alignContent}
        justify={justifyContent}
      >
        {children}
      </VStack>
      <Footer />
    </VStack>
  );
}
