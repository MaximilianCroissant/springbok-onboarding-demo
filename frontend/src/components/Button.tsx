import React from "react";
import styled from "styled-components";
import { Palette } from "./Theme";

const StyledButton = styled.button<ButtonProps>`
  padding: 14px;
  border: none;
  border-radius: 100px;
  background-color: ${(props) =>
    props.color
      ? props.color
      : props.disabled
      ? Palette.text.disabled
      : props.variant === "secondary"
      ? Palette.secondary.main
      : props.variant === "tertiary"
      ? Palette.tertiary.main
      : Palette.primary.main};
  color: ${(props) =>
    props.textColor
      ? props.textColor
      : props.disabled
      ? Palette.text.disabled
      : props.variant === "secondary"
      ? Palette.secondary.contrastText
      : props.variant === "tertiary"
      ? Palette.tertiary.contrastText
      : Palette.primary.contrastText};
  font-size: 1rem;
  font-family: Rubik, -apple-system, system-ui, Segoe UI, Helvetica Neue,
    sans-serif;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  transition: 0.25s ease all;

  &:hover {
    box-shadow: ${(props) =>
        props.color
          ? props.color
          : props.disabled
          ? "transparent"
          : props.variant === "secondary"
          ? Palette.secondary.main
          : props.variant === "tertiary"
          ? Palette.tertiary.main
          : Palette.primary.main}32
      0px 0px 48px;
  }

  &:active {
    opacity: 0.7;
  }
`;

export interface ButtonProps
  extends React.TextareaHTMLAttributes<HTMLButtonElement> {
  color?: string;
  textColor?: string;
  variant?: "primary" | "secondary" | "tertiary";
}

const Button: React.FC<ButtonProps> = ({ color, ...props }) => {
  return <StyledButton {...props} />;
};

export default Button;
