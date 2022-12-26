import { Button, FormControl, Grid } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import CustomInput from "../components/CustomInput";
import Page from "../components/Page";
import Section from "../components/Section";
import { UserContext } from "./_app";

export default function CheckOut() {
  const { userData, setUserData } = useContext(UserContext);
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
  const exp_date = getInputValue("Expiry Date");

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
    let isValid = true;
    if (fname.inputName.trim() === "" || fname.inputName.match(/\d/)) {
      setUserData((userData) => ({
        ...userData,
        [fname.key]: {
          ...userData[fname.key],
          errorMessage: "Enter a valid first name",
        },
      }));
      isValid = false;
    }
    if (lname.inputName.trim() === "" || lname.inputName.match(/\d/)) {
      setUserData((userData) => ({
        ...userData,
        [lname.key]: {
          ...userData[lname.key],
          errorMessage: "Enter a valid last name",
        },
      }));
      isValid = false;
    }
    if (
      email.inputName.trim() === "" ||
      !email.inputName.match(/^([a-z\d\.-_]+)@([a-z\d\.-_]+)\.([a-z]{2,})$/)
    ) {
      setUserData((userData) => ({
        ...userData,
        [email.key]: {
          ...userData[email.key],
          errorMessage: "Enter a valid email",
        },
      }));
      isValid = false;
    }
    if (
      address.inputName.trim() === "" ||
      !address.inputName.match(/[a-zA-Z0-9]/)
    ) {
      setUserData((userData) => ({
        ...userData,
        [address.key]: {
          ...userData[address.key],
          errorMessage: "Enter a valid address",
        },
      }));
      isValid = false;
    }
    if (city.inputName.trim() === "" || city.inputName.match(/\d/)) {
      setUserData((userData) => ({
        ...userData,
        [city.key]: {
          ...userData[city.key],
          errorMessage: "Enter a valid city",
        },
      }));
      isValid = false;
    }
    if (state.inputName.trim() === "" || state.inputName.match(/[^a-zA-Z]/)) {
      setUserData((userData) => ({
        ...userData,
        [state.key]: {
          ...userData[state.key],
          errorMessage: "Enter a valid state",
        },
      }));
      isValid = false;
    }
    if (
      zipCode.inputName.trim() === "" ||
      zipCode.inputName.match(/[a-zA-z]/)
    ) {
      setUserData((userData) => ({
        ...userData,
        [zipCode.key]: {
          ...userData[zipCode.key],
          errorMessage: "Enter a valid zip code",
        },
      }));
      isValid = false;
    }
    if (
      cardNumber.inputName.trim() === "" ||
      cardNumber.inputName.match("[a-zA-z]")
    ) {
      setUserData((userData) => ({
        ...userData,
        [cardNumber.key]: {
          ...userData[cardNumber.key],
          errorMessage: "Enter a valid card number",
        },
      }));
      isValid = false;
    }
    if (exp_date.inputName.trim() === "") {
      setUserData((userData) => ({
        ...userData,
        [exp_date.key]: {
          ...userData[exp_date.key],
          errorMessage: "Enter a valid expiry date",
        },
      }));
      isValid = false;
    }

    return isValid;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!validateForm()) return;

    router.push({ pathname: "/order_review" });
  }

  return (
    <Page padding={4}>
      <Section>
        <FormControl onSubmit={handleSubmit}>
          <InputGrid gap={4}>
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
          </InputGrid>
          <Button type="submit" width={32} onClick={handleSubmit}>
            Review
          </Button>
        </FormControl>
      </Section>
    </Page>
  );
}

function InputGrid({ children }) {
  return (
    <Grid gridTemplateColumns={["1fr", "1fr", "1fr 1fr"]} gap={6} mb={8}>
      {children}
    </Grid>
  );
}
