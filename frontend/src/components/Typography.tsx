import React from "react";
import styled from "styled-components";
import { Breakpoints, Palette } from "./Theme";

const StyledH1 = styled.h1<TypographyProps>`
  margin: 0px;
  font-weight: 400;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "3.5rem")};
  font-family: Titillium Web, -apple-system, system-ui, Segoe UI, Helvetica Neue,
    sans-serif;
  color: ${(props) =>
    props.color
      ? props.color
      : props.disabled
      ? Palette.text.disabled
      : Palette.text.primary};

  @media (max-width: ${Breakpoints.lg}) {
    font-size: ${(props) => (props.fontSize ? props.fontSize : "3.2rem")};
  }
  @media (max-width: ${Breakpoints.md}) {
    font-size: ${(props) => (props.fontSize ? props.fontSize : "3rem")};
  }
`;

const StyledH2 = styled.h2<TypographyProps>`
  margin: 0px;
  font-weight: 400;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "3.2rem")};
  font-family: Titillium Web, -apple-system, system-ui, Segoe UI, Helvetica Neue,
    sans-serif;
  color: ${(props) =>
    props.color
      ? props.color
      : props.disabled
      ? Palette.text.disabled
      : Palette.text.primary};

  @media (max-width: ${Breakpoints.lg}) {
    font-size: ${(props) => (props.fontSize ? props.fontSize : "2.5rem")};
  }
  @media (max-width: ${Breakpoints.md}) {
    font-size: ${(props) => (props.fontSize ? props.fontSize : "2.3rem")};
  }
`;

const StyledH3 = styled.h3<TypographyProps>`
  margin: 0px;
  font-weight: 600;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "2.2rem")};
  font-family: Rubik, -apple-system, system-ui, Segoe UI, Helvetica Neue,
    sans-serif;
  color: ${(props) =>
    props.color
      ? props.color
      : props.disabled
      ? Palette.text.disabled
      : Palette.text.secondary};

  @media (max-width: ${Breakpoints.lg}) {
    font-size: ${(props) => (props.fontSize ? props.fontSize : "2rem")};
  }
  @media (max-width: ${Breakpoints.md}) {
    font-size: ${(props) => (props.fontSize ? props.fontSize : "1.8rem")};
  }
`;

const StyledH4 = styled.h4<TypographyProps>`
  margin: 0px;
  font-weight: 400;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "2.2rem")};
  font-family: Rubik, -apple-system, system-ui, Segoe UI, Helvetica Neue,
    sans-serif;
  color: ${(props) =>
    props.color
      ? props.color
      : props.disabled
      ? Palette.text.disabled
      : Palette.text.primary};

  @media (max-width: ${Breakpoints.md}) {
    font-size: ${(props) => (props.fontSize ? props.fontSize : "2rem")};
  }
  @media (max-width: ${Breakpoints.md}) {
    font-size: ${(props) => (props.fontSize ? props.fontSize : "1.8rem")};
  }
`;

const StyledH5 = styled.h5<TypographyProps>`
  margin: 0px;
  font-weight: 400;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1.4rem")};
  font-family: Courier New, -apple-system, system-ui, Segoe UI, Helvetica Neue,
    sans-serif;
  color: ${(props) =>
    props.color
      ? props.color
      : props.disabled
      ? Palette.text.disabled
      : Palette.text.primary};

  @media (max-width: ${Breakpoints.md}) {
    font-size: ${(props) => (props.fontSize ? props.fontSize : "1.3rem")};
  }
`;

const StyledH6 = styled.h6<TypographyProps>`
  margin: 0px;
  font-weight: 600;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1rem")};
  font-family: Titillium Web, -apple-system, system-ui, Segoe UI, Helvetica Neue,
    sans-serif;
  color: ${(props) =>
    props.color
      ? props.color
      : props.disabled
      ? Palette.text.disabled
      : Palette.text.primary};

  @media (max-width: ${Breakpoints.md}) {
    font-size: ${(props) => (props.fontSize ? props.fontSize : "0.9rem")};
  }
`;

const StyledBody1 = styled.p<TypographyProps>`
  margin: 0px;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1rem")};
  font-family: Titillium Web, -apple-system, system-ui, Segoe UI, Helvetica Neue,
    sans-serif;
  color: ${(props) =>
    props.color
      ? props.color
      : props.disabled
      ? Palette.text.disabled
      : Palette.text.primary};
`;

const StyledBody2 = styled.p<TypographyProps>`
  margin: 0px;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1rem")};
  font-family: Rubik, -apple-system, system-ui, Segoe UI, Helvetica Neue,
    sans-serif;
  color: ${(props) =>
    props.color
      ? props.color
      : props.disabled
      ? Palette.text.disabled
      : Palette.text.primary};
`;

const StyledLabel = styled.p<TypographyProps>`
  margin: 0px;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "0.9rem")};
  font-family: Rubik, -apple-system, system-ui, Segoe UI, Helvetica Neue,
    sans-serif;
  color: ${(props) =>
    props.color
      ? props.color
      : props.disabled
      ? Palette.text.disabled
      : Palette.text.secondary};
`;

const StyledComponents = {
  h1: StyledH1,
  h2: StyledH2,
  h3: StyledH3,
  h4: StyledH4,
  h5: StyledH5,
  h6: StyledH6,
  body1: StyledBody1,
  body2: StyledBody2,
  label: StyledLabel,
};

export interface TypographyProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "body1"
    | "body2"
    | "label"
    | undefined;
  disabled?: boolean;
  color?: string | undefined;
  fontSize?: string | undefined;
}

const Typography = React.memo(
  ({
    variant = "body1",
    disabled = false,
    color,
    fontSize,
    children,
    ...props
  }: React.PropsWithChildren<TypographyProps>) => {
    const Component = StyledComponents[variant];

    return (
      <Component
        {...props}
        color={color}
        fontSize={fontSize}
        aria-disabled={disabled}
      >
        {children}
      </Component>
    );
  }
);

export default Typography;
