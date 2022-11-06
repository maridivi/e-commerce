import { Button, FormControl, Stack, Text, Toast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import CustomInput from "../components/CustomInput";
import Page from "../components/Page";
import { UserContext } from "./_app";

export default function CheckOut() {
  const ctx = useContext(UserContext);
  const { userData, setUserData } = ctx;

  const [isError, setIsError] = useState(false);
  const router = useRouter();

  function handleChange(e) {
    setUserData((userData) => ({
      ...userData,
      [e.target.name]: {
        ...userData[e.target.name],
        value: e.target.value,
        errorMessage: undefined,
      },
    }));
  }

  function validateForm() {}

  console.log(userData);

  function handleSubmit(e) {
    e.preventDefault();

    let canProceed = true;

    Object.entries(userData).forEach(([key, data]) => {
      if (data.value.length === 0) {
        canProceed = false;
        setUserData((userData) => ({
          ...userData,
          [key]: {
            ...userData[key],
            errorMessage: "Empty text",
          },
        }));
      }
    });
    console.log(canProceed);

    if (!canProceed) return;

    router.push({ pathname: "/order_review" });
    // if (
    //   Object.values(userData).some(
    //     (data) => data === null || data === undefined || data === ""
    //   )
    // ) {
    //   setIsError(true);
    // } else {
    //   setIsError(false);

    //   router.push({ pathname: "/order_review" });
    // }
  }

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
                value={userData[key].value}
                onChange={handleChange}
                type={userData[key].type}
                minLength={userData[key].minLength}
                maxLength={userData[key].maxLength}
                min={userData[key].min}
                isValid={userData[key].errorMessage}
              />
            ))}

            <Button type="submit" width={32} mx="auto" onClick={handleSubmit}>
              Review
            </Button>
          </Stack>
        </FormControl>
      </Stack>
    </Page>
  );
}
