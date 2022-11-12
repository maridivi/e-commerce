import Page from "../components/Page";
import { HStack, Heading, Button, VStack, Stack } from "@chakra-ui/react";
import Link from "next/link";
import Section from "../components/Section";

export default function Home() {
  return (
    <Page position="relative">
      <Stack
        backgroundImage={[
          "url(/images/cozy_mobile.jpg)",
          "url(/images/cozy_mobile.jpg)",
          "url(/images/cozy.jpg)",
        ]}
        backgroundSize="cover"
        height="calc( 100vh - 72px )"
        minH={500}
        width="full"
        padding={8}
        zIndex={0}
        position="relative"
        mt="-3"
        mb="-3"
      >
        <Stack
          bgColor="white"
          zIndex={1}
          position="absolute"
          top={0}
          right={0}
          left={0}
          bottom={0}
          opacity={0.3}
        />
        <VStack
          w="80vw"
          h="100%"
          mx="auto"
          alignItems="start"
          justifyContent="center"
          gap={6}
          zIndex={1}
        >
          <Heading
            as="h1"
            fontFamily="Lora"
            color="gray.700"
            lineHeight={1.6}
            zIndex={2}
          >
            Cozy touch. <br></br> For your dream home.
          </Heading>
          <Link href="/shop">
            <Button
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
        </VStack>
      </Stack>

      <Heading
        as="h4"
        position="absolute"
        color="gray.700"
        fontSize="2xs"
        bottom="10px"
        right="40px"
      >
        Photo by{" "}
        <a href="https://unsplash.com/ja/@srosinger3997?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Samantha Gades
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/s/photos/interior-design-cozy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Unsplash
        </a>
      </Heading>
    </Page>
  );
}
