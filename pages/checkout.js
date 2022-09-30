import { Button, FormControl, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
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
    setUserData({ ...userData, [e.name]: e.target.value });
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
                autoFocus={index === 0}
                value={userData[key]}
                onChange={(e) =>
                  setUserData((data) => ({
                    ...data,
                    [key]: e.target.value,
                  }))
                }
              />
            ))}

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
