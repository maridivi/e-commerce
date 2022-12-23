import Page from "../components/Page";
import { Heading, Button, VStack, Stack } from "@chakra-ui/react";
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
        py={8}
        zIndex={0}
        position="relative"
        mt="-3"
        mb="-3"
        justify="center"
      >
        <Section>
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
          <VStack h="100%" alignItems="start" gap={6} zIndex={1}>
            <Heading
              as="h1"
              fontFamily="Lora"
              color="gray.700"
              lineHeight={1.6}
              zIndex={2}
              mb={6}
            >
              Cozy touch. <br></br> For your dream home.
            </Heading>
            <Link href="/shop">
              <Button
                variant="solid"
                color="white"
                backgroundColor="coral.200"
                width={48}
                height={12}
                fontSize="lg"
                _hover={{ backgroundColor: "coral.100" }}
                cursor="pointer"
                zIndex={2}
              >
                Start shopping
              </Button>
            </Link>
          </VStack>
        </Section>
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
