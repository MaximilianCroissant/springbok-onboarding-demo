import {
  useState,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import styled from "styled-components";
import ChatMessage from "./ChatMessage";
import Topbar from "./Topbar";
import InputField from "./InputField";

const StyledChat = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

const ChatContainer = styled.div`
  height: 100%;
  padding: 32px 0px 32px 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: hidden;
`;

const ScrollDiv = styled.div`
  overflow-y: scroll;
`;

const MessagesContainer = styled.div`
  height: -webkit-fill-available;
  max-width: 1000px;
  margin: auto;
  padding: 0px 32px 0px 32px;
  display: flex;
  flex-direction: column;
`;

const InputContainer = styled.div`
  height: 80px;
  padding: 32px;
  position: relative;
`;

const StyledForm = styled.form`
  margin: auto;
  max-width: 1200px;
`;

interface UIMessage {
  role: "assistant" | "system" | "user";
  content: string;
  data?: any;
}

export interface ChatProps {
  firstMessage: string;
  onSubmit: (query: string) => void;
  title?: string;
}

export interface ChatMethods {
  onResponse: (response: string) => void;
}

const Chat = forwardRef(({ firstMessage, onSubmit, title }: ChatProps, ref) => {
  const scrollDivRef = useRef<HTMLDivElement | null>(null);
  const [currPrompt, setCurrPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [uiMessages, setUiMessages] = useState<UIMessage[]>([
    {
      content: firstMessage,
      role: "assistant",
    },
  ]);

  //Scroll Chat to newest answer
  useEffect(() => {
    ScrollChat();
  }, [uiMessages.length]);

  //Expose OnResponse
  useImperativeHandle(ref, () => ({
    onResponse(response: string) {
      setUiMessages((prevMessages) => [
        ...prevMessages,
        { role: "assistant", content: response },
      ]);
      setIsLoading(false);
    },
  }));

  const ScrollChat = () => {
    const scrollDiv = scrollDivRef.current;
    if (scrollDiv)
      scrollDiv.scrollTop = scrollDiv.scrollHeight - scrollDiv.clientHeight;
  };

  const OnSubmit = () => {
    setUiMessages((prevMessages) => [
      ...prevMessages,
      { role: "user", content: currPrompt },
    ]);
    onSubmit(currPrompt);
    setCurrPrompt("");
    setIsLoading(true);
  };

  const handleFieldKeyDown = (e: any) => {
    if (e.key === "Enter" && !e.shiftKey) {
      OnSubmit();
    }
  };

  return (
    <StyledChat>
      <Topbar title={title} />
      <ChatContainer>
        <ScrollDiv ref={scrollDivRef}>
          <MessagesContainer>
            {uiMessages.map((m, i) => (
              <ChatMessage
                key={i + "_" + m.role}
                role={m.role}
                content={m.content}
              />
            ))}
            {isLoading ? (
              <ChatMessage role="assistant" content="Typing..." />
            ) : (
              <></>
            )}
          </MessagesContainer>
        </ScrollDiv>
      </ChatContainer>
      <InputContainer>
        <StyledForm onSubmit={OnSubmit}>
          <InputField
            value={currPrompt}
            onChange={(e) => setCurrPrompt(e.target.value)}
            onKeyDown={handleFieldKeyDown}
            disabled={isLoading}
          />
        </StyledForm>
      </InputContainer>
    </StyledChat>
  );
});

export default Chat;
