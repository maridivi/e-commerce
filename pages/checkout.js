import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { forwardRef, useState } from "react";
import CustomInput from "../components/CustomInput";
import Page from "../components/Page";

export default function CheckOut() {
  const [userData, setUserData] = useState({
    "First Name": "",
    "Last Name": "",
    Email: "",
    "Street Address": "",
    State: "",
    City: "",
    "Zip Code": "",
    "Credit/Debit Card Number": "",
    "Expiry Date": "",
  });

  const [isError, setIsError] = useState(false);
  const router = useRouter();

  function handleChange(e, key) {
    setUserData({ ...userData, key: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      Object.values(userData).some(
        (data) => data === null || data === undefined || data === ""
      )
    ) {
      setIsError(true);
    } else {
      setIsError(false);

      router.push({ pathname: "/order_review", query: userData });
    }
  }

  console.log(userData);
  return (
    <Page padding={16}>
      <Stack direction="column">
        <FormControl
          isRequired={isError === true && true}
          onSubmit={handleSubmit}
        >
          <Stack gap={4}>
            {Object.keys(userData).map((key, index) => (
              <CustomInput
                label={key}
                key={index}
                input={key.valueOf}
                onChange={(e) =>
                  setUserData({ ...userData, key: e.target.value })
                }
              />
            ))}
            {/* <CustomInput
              label="First Name"
              onChange={(e) =>
                setUserData({ ...userData, first_name: e.target.value })
              }
              input={userData.first_name}
            />
            <CustomInput
              label="Last Name"
              onChange={(e) =>
                setUserData({ ...userData, last_name: e.target.value })
              }
              input={userData.last_name}
            />
            <CustomInput
              label="Email address"
              type="email"
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
              input={userData.email}
            />
            <CustomInput
              label="Street Address"
              onChange={(e) =>
                setUserData({ ...userData, address: e.target.value })
              }
              input={userData.address}
            />
            <CustomInput
              label="State"
              onChange={(e) =>
                setUserData({ ...userData, state: e.target.value })
              }
              input={userData.state}
            />
            <CustomInput
              label="City"
              onChange={(e) =>
                setUserData({ ...userData, city: e.target.value })
              }
              input={userData.city}
            />
            <CustomInput
              label="Zip Code"
              onChange={(e) =>
                setUserData({ ...userData, zip_code: e.target.value })
              }
              input={userData.zip_code}
            />
            <CustomInput
              label="Credit/Debit Card Number"
              onChange={(e) =>
                setUserData({ ...userData, card_number: e.target.value })
              }
              input={userData.card_number}
              type="number"
            />
            <CustomInput
              label="Expiration Date"
              onChange={(e) =>
                setUserData({ ...userData, exp_date: e.target.value })
              }
              input={userData.exp_date}
            /> */}
            {isError && (
              <Text fontSize="xs" color="red.400">
                *: fields required
              </Text>
            )}

            <Button type="submit" width={32} mx="auto" onClick={handleSubmit}>
              Review
            </Button>
          </Stack>
        </FormControl>
      </Stack>
    </Page>
  );
}
