import React, { useState, useId } from "react";
import { InputFieldProps } from "@/types";
import clsx from "clsx";

const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled = false,
  invalid = false,
  variant = "outlined",
  size = "md",
  type = "text", // Default type to text
  showToggleButton = false,
}) => {
  const id = useId();
  const [showPassword, setShowPassword] = useState(type !== "password");

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const baseStyles =
    "rounded-md focus:outline-none transition-all duration-200 w-full";
  const sizeStyles = {
    sm: "px-2 py-1 text-sm",
    md: "px-3 py-2 text-base",
    lg: "px-4 py-3 text-lg",
  };
  const variantStyles = {
    filled: "bg-gray-100 border border-gray-200 focus:border-blue-500",
    outlined: "border border-gray-300 focus:border-blue-500",
    ghost: "bg-transparent border-b border-gray-300 focus:border-blue-500",
  };

  const inputPaddingRight = type === "password" && showToggleButton ? "pr-10" : "";

  return (
    <div className="flex flex-col w-full">
      {label && (
        <label htmlFor={id} className="mb-1 text-sm font-medium text-gray-700">{label}</label>
      )}
      <div className="relative">
        <input
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          aria-invalid={invalid}
          type={type === "password" && showToggleButton ? (showPassword ? "text" : "password") : type}
          className={clsx(
            baseStyles,
            sizeStyles[size],
            variantStyles[variant],
            invalid && "border-red-500",
            disabled && "bg-gray-200 cursor-not-allowed opacity-70",
            inputPaddingRight
          )}
        />
        {type === "password" && showToggleButton && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-0 pr-3 flex items-center focus:outline-none"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.243 4.243l-4.243-4.243" />
              </svg>
            )}
          </button>
        )}
      </div>
      {helperText && !invalid && (
        <span className="mt-1 text-xs text-gray-500">{helperText}</span>
      )}
      {invalid && errorMessage && (
        <span className="mt-1 text-xs text-red-500">{errorMessage}</span>
      )}
    </div>
  );
};

export default InputField;
