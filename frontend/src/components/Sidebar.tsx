import React from "react";
import styled from "styled-components";
import Typography from "./Typography";
import { Palette } from "./Theme";

const StyledSidebar = styled.div`
  height: 100%;
  width: 500px;
  background-color: #130934;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.16) 16px 0px 48px;
`;

const ImageContainer = styled.div`
  margin-top: 32px;
`;

const InfoContainer = styled.div`
  margin-top: 64px;
  margin-left: auto;
  margin-right: auto;
  width: 300px;
  text-align: center;
  height: -webkit-fill-available;
`;

const CustomObjectContainer = styled.div`
  margin-top: 64px;
`;

const BottomContainer = styled.div`
  margin-bottom: 16px;
`;

const Logo = styled.img`
  object-fit: contain;
  transition: 0.3s ease all;
  border-radius: 25px;

  &:hover {
    box-shadow: ${Palette.secondary.main}32 0px 0px 48px;
  }
`;

export interface SidebarProps extends React.HTMLAttributes<HTMLBaseElement> {
  title?: string;
  description?: string;
}

const Sidebar = React.memo(
  ({ title, description, children }: React.PropsWithChildren<SidebarProps>) => {
    return (
      <StyledSidebar>
        <ImageContainer>
          <Logo
            src="/springbok.svg"
            alt="Springbok Logo"
            width="90"
            height="auto"
          />
        </ImageContainer>
        <InfoContainer>
          <Typography
            variant="h4"
            color={Palette.primary.contrastText}
            style={{ marginBottom: 24 }}
          >
            {title}
          </Typography>
          <Typography variant="body1" color={Palette.primary.contrastText}>
            {description}
          </Typography>
          <CustomObjectContainer>{children}</CustomObjectContainer>
        </InfoContainer>
        <BottomContainer>
          <Typography variant="body1" color={Palette.primary.contrastText}>
            This is space for links (privacy? T&S?).
          </Typography>
        </BottomContainer>
      </StyledSidebar>
    );
  }
);

export default Sidebar;
