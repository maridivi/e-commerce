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
        opacity={0.6}
        padding={8}
      />

      <Heading
        as="h4"
        position="absolute"
        color="gray.700"
        fontSize="2xs"
        top="910px"
        right="10px"
      >
        Photo by{" "}
        <a href="https://unsplash.com/@anotherlovely?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Alyssa Strohmann
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/s/photos/clothes?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Unsplash
        </a>
      </Heading>

      <Heading
        as="h1"
        fontFamily="Lora"
        position="absolute"
        color="gray.700"
        top="350px"
        left="50px"
        lineHeight={1.6}
      >
        Everything you need. <br></br> All in one place.
      </Heading>
      <Link href="/shop">
        <Button
          position="absolute"
          left="50px"
          top="520px"
          variant="solid"
          color="white"
          backgroundColor="pink.300"
          width={48}
          height={12}
          fontSize="lg"
        >
          Start shopping
        </Button>
      </Link>
    </Page>
  );
}
