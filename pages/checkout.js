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

  function getInputValue(key) {
    const inputName = Object.entries(userData).find((arr) => arr[0] === key)[1]
      .value;
    return { inputName, key };
  }

  const fname = getInputValue("First Name");
  const lname = getInputValue("Last Name");
  const email = getInputValue("Email");
  const address = getInputValue("Street Address");
  const state = getInputValue("State");
  const city = getInputValue("City");
  const zipCode = getInputValue("Zip Code");
  const cardNumber = getInputValue("Credit/Debit Card Number");
  const expDate = getInputValue("Expiry Date");

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

  function validateForm() {
    console.log(fname);
    if (fname.inputName.match(/\d/)) {
      setUserData((userData) => ({
        ...userData,
        [fname.key]: {
          ...userData[fname.key],
          // value: e.target.value,
          errorMessage: "Enter a valid first name",
        },
      }));
    }
    if (lname.inputName.match(/\d/)) {
      setUserData((userData) => ({
        ...userData,
        [lname.key]: {
          ...userData[lname.key],
          // value: e.target.value,
          errorMessage: "Enter a valid last name",
        },
      }));
    }
    if (
      !email.inputName.match(/^([a-z\d\.-_]+)@([a-z\d\.-_]+)\.([a-z]{2,})$/)
    ) {
      setUserData((userData) => ({
        ...userData,
        [email.key]: {
          ...userData[email.key],
          // value: e.target.value,
          errorMessage: "Enter a valid email",
        },
      }));
    }
    if (!address.inputName.match(/[a-zA-Z0-9]/)) {
      setUserData((userData) => ({
        ...userData,
        [address.key]: {
          ...userData[address.key],
          // value: e.target.value,
          errorMessage: "Enter a valid address",
        },
      }));
    }
    if (city.inputName.match(/\d/)) {
      setUserData((userData) => ({
        ...userData,
        [city.key]: {
          ...userData[city.key],
          // value: e.target.value,
          errorMessage: "Enter a valid city",
        },
      }));
    }
    if (state.inputName.match(/[^a-zA-Z]/)) {
      setUserData((userData) => ({
        ...userData,
        [state.key]: {
          ...userData[state.key],
          // value: e.target.value,
          errorMessage: "Enter a valid state",
        },
      }));
    }
    if (zipCode.inputName.match("[a-zA-z]")) {
      setUserData((userData) => ({
        ...userData,
        [zipCode.key]: {
          ...userData[zipCode.key],
          // value: e.target.value,
          errorMessage: "Enter a valid zip code",
        },
      }));
    }
    if (cardNumber.inputName.match("[a-zA-z]")) {
      setUserData((userData) => ({
        ...userData,
        [cardNumber.key]: {
          ...userData[cardNumber.key],
          // value: e.target.value,
          errorMessage: "Enter a valid card number",
        },
      }));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    validateForm();

    let canProceed = true;

    Object.entries(userData).forEach(([key, data]) => {
      if (data.value.length === 0) {
        canProceed = false;
        setUserData((userData) => ({
          ...userData,
          [key]: {
            ...userData[key],
            errorMessage: "Field required",
          },
        }));
      }
    });
    console.log(canProceed);

    if (!canProceed) return;

    router.push({ pathname: "/order_review" });
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
                errorMessage={userData[key].errorMessage}
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
