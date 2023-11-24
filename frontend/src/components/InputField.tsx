import React from "react";
import styled from "styled-components";
import { Palette } from "./Theme";

const StyledInputField = styled.div`
  display: inline-flex;
  flex-direction: column;
  position: relative;
  min-width: 0px;
  padding: 0px;
  margin: 0px;
  vertical-align: top;
  width: 100%;
  background-color: white;
  border: 1px solid ${Palette.primary.main}10;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 16px 48px;
  border-radius: 15px !important;
`;

const StyledTextArea = styled.textarea`
  padding: 14px;
  border: 0px;
  box-sizing: content-box;
  background: none;
  height: auto;
  margin: 0px;
  -webkit-tap-highlight-color: transparent;
  display: block;
  min-width: 0px;
  resize: none;
  font-size: 1rem;
  font-family: Rubik, -apple-system, system-ui, Segoe UI, Helvetica Neue,
    sans-serif;
  border-radius: 15px !important;

  &::placeholder,
  ::-webkit-input-placeholder {
    color: ${Palette.text.disabled};
  }
`;

interface InputFieldProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const InputField: React.FC<InputFieldProps> = ({ ...props }) => {
  return (
    <StyledInputField style={props.style}>
      <StyledTextArea {...props} placeholder="Write your message" />
    </StyledInputField>
  );
};

export default InputField;
