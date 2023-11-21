import React from "react";
import styled from "styled-components";
import Typography from "./Typography";

const StyledTopbar = styled.div`
  width: 100%;
  height: 100px;
  padding-top: 8px;
  padding-left: 32px;
`;

export interface TopbarProps extends React.HTMLAttributes<HTMLBaseElement> {
  title?: string;
}

const Topbar = React.memo(
  ({ title, children }: React.PropsWithChildren<TopbarProps>) => {
    return (
      <StyledTopbar>
        <Typography variant="h1">{title}</Typography>
        {children}
      </StyledTopbar>
    );
  }
);

export default Topbar;
