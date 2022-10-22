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
    <VStack minHeight="100vh">
      <Header />
      <VStack
        minH="100%"
        minW="100%"
        padding={padding}
        alignContent={alignContent}
        justify={justifyContent}
        flex={1}
      >
        {children}
      </VStack>
      <Footer />
    </VStack>
  );
}
