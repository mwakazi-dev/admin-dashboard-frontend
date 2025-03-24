"use client";

import React, { FC } from "react";
import { ButtonType } from "antd/es/button";

import StyledButton from "@/styles/Button";

interface Props {
  children: React.ReactNode;
  variant?: ButtonType;
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}
const Button: FC<Props> = ({
  children,
  variant = "primary",
  loading = false,
  disabled = false,
  onClick = () => {},
}) => {
  return (
    <StyledButton
      type={variant}
      loading={loading}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
