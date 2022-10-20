import Page from "../components/Page";
import { HStack, Heading, Button, VStack } from "@chakra-ui/react";
import Link from "next/link";

export default function Home() {
  return (
    <Page>
      <HStack
        backgroundImage="url(/images/clothes.jpg)"
        backgroundSize="cover"
        height="100vh"
        width="full"
        opacity={0.2}
        padding={8}
      />

      <Heading
        as="h1"
        fontFamily="Lora"
        position="absolute"
        color="gray.300"
        top="350px"
        left="50px"
        lineHeight={1.6}
      >
        Everything you need. <br></br> All in one place.
      </Heading>
      <Link href="/shop">
        <Button position="absolute" left="50px" top="520px" variant="outline">
          Start shopping
        </Button>
      </Link>
    </Page>
  );
}
