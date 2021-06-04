import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm/>);
});

test("form shows success message on submit with form details", () => {
  render(<CheckoutForm/>);
  const firstName = screen.getByLabelText("First Name:");
  userEvent.type(firstName, "John");

  const lastName= screen.getByLabelText("Last Name:");
  userEvent.type(lastName, "Doe");

  const address = screen.getByLabelText("Address:");
  userEvent.type(address, "1234 fake drive");

  const city= screen.getByLabelText("City:");
  userEvent.type(city, "Fake City");

  const state = screen.getByLabelText("State:");
  userEvent.type(state, "FL");

  const zip = screen.getByLabelText("Zip:");
  userEvent.type(zip, "12345");

  const submit = screen.getByRole("button");
  userEvent.click(submit);

  const success = screen.getByTestId("successMessage");
});
