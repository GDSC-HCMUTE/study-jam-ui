"use client";

import { Button } from "antd";
import { CgSpinner } from "react-icons/cg";

interface CustomButtonProps {
  label: string;
  type: "primary" | "secondary" | "danger";
  isLoading?: boolean;
  isDisabled?: boolean;
  onClick: () => void;
}

const CustomButton = ({
  label,
  type,
  isLoading = false,
  isDisabled = false,
  onClick,
}: CustomButtonProps) => {
  const shouldDisable = isLoading || isDisabled;
  return (
    <Button
      className={`!h-12 !text-base ${!shouldDisable && "hover:brightness-75"} ${
        type === "primary"
          ? `!bg-blue !text-white !border-none`
          : type === "secondary"
          ? `!border-black ${!shouldDisable && "hover:!text-black"}`
          : `!bg-red !text-white !border-none`
      } ${shouldDisable && "opacity-60 pointer-events-none"}`}
      onClick={onClick}
    >
      {label}
      {isLoading && <CgSpinner className="animate-spin text-lg" />}
    </Button>
  );
};

export default CustomButton;
