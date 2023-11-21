import streamlit as st
from pydantic import BaseModel
import uuid

from src import vite_app
from response import get_response, init_response_session

class DataModel(BaseModel):
    message: str | None = None
    response: str | None = None
    user_data: dict | None = None
    id: str | None = None


def init_session_state() -> None:
    if 'backend_data' not in st.session_state:
        st.session_state['backend_data'] = DataModel().model_dump()
    if 'frontend_data' not in st.session_state:
        st.session_state['frontend_data'] = DataModel().model_dump()   
    

def set_web():
    hide_streamlit_style = """
                <style>
                iframe {width: 100vw; height: 100vh;}
                div {gap: 0px !important}
                .block-container {padding: 0; max-width: none;}
                header {display: none !important}
                section {overflow: hidden !important}
                footer {display: none;}
                </style>
                """
    st.markdown(hide_streamlit_style, unsafe_allow_html=True) 
    
    
if __name__ == '__main__':
    set_web()
    init_session_state()
    init_response_session()
    frontend = vite_app(data=st.session_state['backend_data'], key="ViteComponent")
    
if frontend is not None and frontend["data"] is not None:
    if frontend["data"]["id"] is not None and frontend["data"]["id"] is not st.session_state['frontend_data']["id"]:
        st.session_state['frontend_data'] = frontend["data"]
        llmResponse = get_response(frontend["data"]["message"])
        newData = DataModel(message=None, response=llmResponse.response, user_data=llmResponse.user_data, id=str(uuid.uuid4()))
        st.session_state['backend_data'] = newData.model_dump()
        st.rerun()


    


