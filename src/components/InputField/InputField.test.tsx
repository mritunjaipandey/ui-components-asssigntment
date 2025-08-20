import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import InputField from "./InputField";

describe("InputField Component", () => {
  test("renders label and placeholder", () => {
    render(<InputField label="Username" placeholder="Enter username" />);
    expect(screen.getByText("Username")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter username")).toBeInTheDocument();
  });

  test("renders helper text", () => {
    render(<InputField helperText="This is a helper" />);
    expect(screen.getByText("This is a helper")).toBeInTheDocument();
  });

  test("shows error message when invalid", () => {
    render(<InputField invalid errorMessage="Required field" />);
    expect(screen.getByText("Required field")).toBeInTheDocument();
  });

  test("handles onChange event", () => {
    const handleChange = jest.fn();
    render(<InputField onChange={handleChange} />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "hello" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

    test("disables input when disabled prop is true", () => {
    render(<InputField disabled />);
    const input = screen.getByRole("textbox");
    expect(input).toBeDisabled();
  });

  test("toggles password visibility when showToggleButton is true", () => {
    render(<InputField type="password" showToggleButton label="Password" />);

    const passwordInput = screen.getByLabelText("Password");
    expect(passwordInput).toHaveAttribute("type", "password");

    const showPasswordButton = screen.getByRole("button", {
      name: "Show password",
    });
    fireEvent.click(showPasswordButton);

    expect(passwordInput).toHaveAttribute("type", "text");

    const hidePasswordButton = screen.getByRole("button", {
      name: "Hide password",
    });
    fireEvent.click(hidePasswordButton);

    expect(passwordInput).toHaveAttribute("type", "password");
  });
});
