import { useEffect, useRef, useState } from "react";
import { Streamlit, withStreamlitConnection } from "streamlit-component-lib";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Chat, { ChatMethods } from "./components/Chat";
import Card from "./components/Card";
import { Palette } from "./components/Theme";
import Typography from "./components/Typography";
import styled from "styled-components";

const DataRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const DataCol = styled.div`
  max-width: 50%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

interface AppProps {
  args: {
    data: {
      message: string | null;
      response: string | null;
      user_data: any;
      id: string | null;
    };
  };
}

interface ResponseType {
  message: string | null;
  response: string | null;
  user_data: any;
  id: string | null;
}

//Component that wraps the frontend and acts as interface to streamlit
//This is the only piece of code with custom logic
//All other components are pure and controlled through this component
const App = (props: AppProps) => {
  const [backendData, setBackendData] = useState<ResponseType>({
    message: null,
    response: null,
    user_data: null,
    id: null,
  });
  const chatRef = useRef<ChatMethods>(null);

  useEffect(() => {
    if (
      chatRef.current &&
      props.args.data.response &&
      props.args.data.id !== backendData.id
    ) {
      chatRef.current.onResponse(props.args.data.response);
      setBackendData(props.args.data);
    }
  }, [props]);

  const onSubmit = (query: string) => {
    Streamlit.setComponentValue({
      data: { message: query, response: null, id: crypto.randomUUID() },
    });
  };

  return (
    <>
      <main>
        <Sidebar
          title="Client Onboarding Demo"
          description="This bot fills out a pre-defined form together with potential clients. It moves from section to section and validates each entry before saving it. Can have as many sections as necessary."
        >
          <Card color={Palette.background.paper}>
            <Typography variant="h6">User information</Typography>
            <div>
              {backendData &&
                backendData.user_data &&
                Object.keys(backendData.user_data).map((key) => (
                  <DataRow key={key}>
                    <DataCol style={{ textAlign: "left" }}>
                      <Typography variant="body1">{key}</Typography>
                    </DataCol>
                    <DataCol style={{ textAlign: "right" }}>
                      <Typography variant="body1">
                        {backendData.user_data[key]}
                      </Typography>
                    </DataCol>
                  </DataRow>
                ))}
            </div>
          </Card>
        </Sidebar>
        <Chat
          ref={chatRef}
          onSubmit={onSubmit}
          firstMessage="Hello! Let's get started. May I have your full name, please?"
          title="Springbok AI Platform"
        />
      </main>
    </>
  );
};

export default withStreamlitConnection(App);
