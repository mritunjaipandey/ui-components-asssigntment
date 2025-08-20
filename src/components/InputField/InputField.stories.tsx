import type { Meta, StoryObj } from '@storybook/react-webpack5';
import InputField from "./InputField";

const meta: Meta<typeof InputField> = {
  title: "Components/InputField",
  component: InputField,
  tags: ["autodocs"],
  args: {
    value: "",
    label: "Username",
    placeholder: "Enter your username",
    helperText: "This is a helper text",
    errorMessage: "This field is required",
  },
  argTypes: {
    value: {
      control: "text",
      description: "The value of the input field.",
      table: { category: "Content" },
    },
    label: {
      control: "text",
      description: "The label displayed above the input field.",
      table: { category: "Content" },
    },
    placeholder: {
      control: "text",
      description: "The placeholder text for the input field.",
      table: { category: "Content" },
    },
    helperText: {
      control: "text",
      description: "Text displayed below the input to provide assistance.",
      table: { category: "Content" },
    },
    errorMessage: {
      control: "text",
      description: "The error message displayed when the input is invalid.",
      table: { category: "Content" },
    },
    type: {
      control: { type: "radio" },
      options: ["text", "password"],
      description: "The type of the input field.",
      table: { category: "Appearance" },
    },
    variant: {
      control: { type: "select" },
      options: ["outlined", "filled", "ghost"],
      description: "The visual style of the input field.",
      table: { category: "Appearance" },
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "The size of the input field.",
      table: { category: "Appearance" },
    },
    disabled: {
      control: "boolean",
      description: "If true, the input field is disabled.",
      table: { category: "State" },
    },
    invalid: {
      control: "boolean",
      description: "If true, the input field is in an invalid state.",
      table: { category: "State" },
    },
    showToggleButton: {
      control: "boolean",
      description: "If true, shows a button to toggle password visibility (only for type='password').",
      table: { category: "Appearance" },
    },
    onChange: {
      action: "changed",
      description: "Callback function fired when the value changes.",
      table: { category: "Events" },
    },
  },
};
export default meta;

type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  args: {
    variant: "outlined",
    size: "md",
  },
};

export const Filled: Story = {
  args: {
    variant: "filled",
    size: "md",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    size: "md",
  },
};

export const WithError: Story = {
  args: {
    value: "",
    invalid: true,
    errorMessage: "Please enter a valid value",
  },
};

export const Disabled: Story = {
  args: {
    value: "Disabled input",
    disabled: true,
  },
};

export const Password: Story = {
  args: {
    ...Default.args,
    type: "password",
    showToggleButton: true,
  },
};