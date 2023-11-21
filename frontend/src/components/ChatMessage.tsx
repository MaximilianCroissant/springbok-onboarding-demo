import styled from "styled-components";
import { Palette } from "./Theme";
import Typography from "./Typography";

const StyledChatMessage = styled.div<ChatMessageProps>`
  padding: 12px;
  width: fit-content;
  text-wrap: wrap;
  border-radius: 12px;
  background-color: ${(props) =>
    props.role === "assistant" ? Palette.primary.muted : Palette.primary.main};
  color: ${(props) =>
    props.role === "assistant"
      ? Palette.secondary.contrastText
      : Palette.primary.contrastText};
  margin-top: 1em;
  align-self: ${(props) =>
    props.role === "assistant" ? "flex-start" : "flex-end"};
`;

export interface ChatMessageProps {
  role: string;
  content: string;
}

const ChatMessage = ({ role, content }: ChatMessageProps) => {
  return (
    <StyledChatMessage role={role} content={content}>
      <pre style={{ margin: 0 }}>
        <Typography
          color="inherit"
          variant="body2"
          style={{ whiteSpace: "normal" }}
        >
          {content}
        </Typography>
      </pre>
    </StyledChatMessage>
  );
};

export default ChatMessage;
