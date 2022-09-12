import { Grid, HStack, Stack, useMediaQuery, VStack } from "@chakra-ui/react";
import FilterBox from "../components/FilterBox";
import Page from "../components/Page";

export default function Shop() {
  const [isSmallerThan500] = useMediaQuery("(max-width: 500px)");
  return (
    <Page>
      <HStack>
        <FilterBox />
        <Grid></Grid>
      </HStack>
    </Page>
  );
}
