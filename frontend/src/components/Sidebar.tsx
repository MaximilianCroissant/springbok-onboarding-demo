import React from "react";
import styled from "styled-components";
import Typography from "./Typography";
import { Breakpoints, Palette } from "./Theme";

const StyledSidebar = styled.div`
  height: 100vh;
  width: 500px;
  background-color: #130934;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.16) 16px 0px 48px;

  @media only screen and (max-width: ${Breakpoints.md}px) {
    display: none;
  }
`;

const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 96%;
`;

const ImageContainer = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: center;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 64px;
  padding-left: 24px;
  padding-right: 24px;
  text-align: center;
`;

const CustomObjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 64px;
  text-align: center;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

const ScrollDiv = styled.div`
  overflow-y: scroll;
  height: 100%;
  width: 100%;
  padding-right: 24px;
`;

const CustomContentContainer = styled.div`
  padding: 0px 16px 0px 20px;
  display: flex;
  flex-direction: column;
`;

const BottomContainer = styled.div`
  margin-bottom: 16px;
  margin-left: auto;
  margin-right: auto;
  width: 230px;
  display: flex;
  justify-content: space-between;
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

const Sidebar = ({
  title,
  description,
  children,
}: React.PropsWithChildren<SidebarProps>) => {
  return (
    <StyledSidebar>
      <SidebarContent>
        <ImageContainer>
          <a
            href="https://springbok.ai/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Logo
              src="/springbok.svg"
              alt="Springbok Logo"
              width="90"
              height="auto"
            />
          </a>
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
        </InfoContainer>
        <CustomObjectContainer>
          <ScrollDiv>
            <CustomContentContainer>{children}</CustomContentContainer>
          </ScrollDiv>
        </CustomObjectContainer>
      </SidebarContent>
      <BottomContainer>
        <a
          href="https://springbok.ai/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Typography variant="body1" color={Palette.primary.contrastText}>
            Privacy
          </Typography>
        </a>
        <a
          href="https://springbok.ai/terms"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Typography variant="body1" color={Palette.primary.contrastText}>
            Terms & Conditions
          </Typography>
        </a>
      </BottomContainer>
    </StyledSidebar>
  );
};
export default Sidebar;
