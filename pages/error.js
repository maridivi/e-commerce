import { Text } from "@chakra-ui/react";
import Link from "next/link";
import Page from "../components/Page";

export default function ErrorPage() {
  return (
    <Page>
      <Text>Oooops,there was an error!</Text>
      <Link href="/">Back to homepage</Link>
    </Page>
  );
}
