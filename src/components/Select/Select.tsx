import React from "react";
import { SelectProps } from "@/types";
import clsx from "clsx";

const Select: React.FC<SelectProps> = ({
  label,
  options,
  value,
  onChange,
  placeholder,
  disabled = false,
  invalid = false,
  size = "md",
  variant = "outlined",
}) => {
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

  return (
    <div className="flex flex-col w-full">
      {label && (
        <label className="mb-1 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <select
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={clsx(
          baseStyles,
          sizeStyles[size],
          variantStyles[variant],
          invalid && "border-red-500",
          disabled && "bg-gray-200 cursor-not-allowed opacity-70"
        )}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export { Select };
