import React from "react";
import styled from "styled-components";
import { Palette } from "./Theme";

const StyledCard = styled.div<CardProps>`
  padding: 16px;
  background-color: ${(props) =>
    props.color ? props.color : Palette.background.paper};
  border-radius: 15px;
  box-shadow: ${(props) => (props.color ? props.color : Palette.common.black)}16
    0px 0px 48px;
`;

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: string;
}

const Card = ({
  color,
  children,
  ...props
}: React.PropsWithChildren<CardProps>) => {
  return (
    <StyledCard color={color} {...props}>
      {children}
    </StyledCard>
  );
};

export default Card;
