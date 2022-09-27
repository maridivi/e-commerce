import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { forwardRef, useState } from "react";
import CustomInput from "../components/CustomInput";
import Page from "../components/Page";

export default function CheckOut() {
  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    address: "",
    state: "",
    city: "",
    zip_code: "",
    card_number: "",
    exp_date: "",
  });
  const [isError, setIsError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (userData === "") {
      setIsError(true);
      return;
    }
  }

  console.log(userData);
  console.log(isError);

  return (
    <Page>
      <Stack direction={["column", "row"]}>
        <FormControl isInvalid={isError}>
          <VStack gap={2}>
            <CustomInput
              label="First Name"
              onChange={(e) =>
                setUserData({ ...userData, first_name: e.target.value })
              }
              isError={isError}
              input={userData.first_name}
            />
            <CustomInput
              label="Last Name"
              onChange={(e) =>
                setUserData({ ...userData, last_name: e.target.value })
              }
              isError={isError}
              input={userData.last_name}
            />
            <CustomInput
              label="Email address"
              type="email"
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
              isError={isError}
              input={userData.email}
            />
            <CustomInput
              label="Street Address"
              onChange={(e) =>
                setUserData({ ...userData, address: e.target.value })
              }
              isError={isError}
              input={userData.address}
            />
            <CustomInput
              label="State"
              onChange={(e) =>
                setUserData({ ...userData, state: e.target.value })
              }
              isError={isError}
              input={userData.state}
            />
            <CustomInput
              label="City"
              onChange={(e) =>
                setUserData({ ...userData, city: e.target.value })
              }
              isError={isError}
              input={userData.city}
            />
            <CustomInput
              label="Zip Code"
              onChange={(e) =>
                setUserData({ ...userData, zip_code: e.target.value })
              }
              isError={isError}
              input={userData.zip_code}
            />
            <CustomInput
              label="Credit/Debit Card Number"
              onChange={(e) =>
                setUserData({ ...userData, card_number: e.target.value })
              }
              isError={isError}
              input={userData.card_number}
              type="number"
            />
            <CustomInput
              label="Expiration Date"
              onChange={(e) =>
                setUserData({ ...userData, exp_date: e.target.value })
              }
              isError={isError}
              input={userData.exp_date}
            />
            <Link href={{ pathname: "/order_review", query: userData }}>
              <Button type="submit">Review</Button>
            </Link>
          </VStack>
        </FormControl>
      </Stack>
    </Page>
  );
}
