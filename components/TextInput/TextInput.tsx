"use client";

import { Input } from "antd";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface TextInputProps {
  label: string;
  helperText?: string;
  placeholder?: string;
  isPasswordField?: boolean;
  isRequired?: boolean;
  showHelperText?: boolean;
  value: string;
  onBlur: () => void;
  onChange: (...event: any[]) => void;
}

const TextInput = ({
  label,
  helperText,
  placeholder,
  isPasswordField = false,
  isRequired = false,
  showHelperText = false,
  value,
  onBlur,
  onChange,
}: TextInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const renderEyeIcon = () => {
    const togglePasswordShown = () => setShowPassword(!showPassword);
    return showPassword ? (
      <FaEyeSlash
        className="text-2xl absolute right-3 top-0 translate-y-1/2 hover:cursor-pointer"
        onClick={togglePasswordShown}
      />
    ) : (
      <FaEye
        className="text-2xl absolute right-3 top-0 translate-y-1/2 hover:cursor-pointer"
        onClick={togglePasswordShown}
      />
    );
  };

  return (
    <div className="flex flex-col gap-2 text-base">
      <p>
        {label}
        {isRequired && (
          <span className="text-red text-base font-bold ml-1">*</span>
        )}
      </p>
      <div className="w-full relative">
        <Input
          className={`h-12 !text-base ${showHelperText && "!border-red"}`}
          placeholder={placeholder ?? `Enter ${label.toLowerCase()}`}
          type={isPasswordField && !showPassword ? "password" : "text"}
          value={value}
          onBlur={onBlur}
          onChange={onChange}
        />
        {isPasswordField && renderEyeIcon()}
      </div>
      {showHelperText && <p className="text-red text-base">{helperText}</p>}
    </div>
  );
};

export default TextInput;
