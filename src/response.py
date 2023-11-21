import os
import openai
import json
import time
from models import FunctionParameters, LLMResponse
import streamlit as st

FILE_PATH = os.path.join(os.getcwd(), 'data', 'prompts', 'base.md')
SCHEMA_FILE_PATHS = [os.path.join(os.getcwd(), 'data', 'prompts', 'personal.md'),
                     os.path.join(os.getcwd(), 'data', 'prompts', 'case.md')]
FIRST_MESSAGES = ['Hello! Let\'s get started. May I have your full name, please?',
"Thank you for your input so far. Let's get over the next section. Can you please specify the type of case you're reaching out for? E.g., family law, criminal defense, personal injury, etc."]

with open(FILE_PATH, 'r', encoding='utf-8') as file:
    INITIAL_PROMPT = file.read()
with open(SCHEMA_FILE_PATHS[0], 'r', encoding='utf-8') as file:
    INITIAL_PROMPT += file.read()

INITIAL_MEMORY = [
    {"content": INITIAL_PROMPT, "role": "system"},
    {"content": FIRST_MESSAGES[0], "role": "assistant"}
]

OPEN_AI_KEY = os.getenv('OPENAI_API_KEY')

# AZURE
openai.api_key = os.getenv('AZURE_KEY')
openai.api_base = os.getenv('AZURE_ENDPOINT')
openai.api_type = 'azure'
openai.api_version = os.getenv('AZURE_API_VERSION')
DEPLOYMENT_NAME=os.getenv('AZURE_NAME')

def init_response_session() -> None:
    if "memory" not in st.session_state:
        st.session_state["memory"] = INITIAL_MEMORY
    if 'user_data' not in st.session_state:
        st.session_state['user_data'] = {}
    if 'curr_section' not in st.session_state:
        st.session_state['curr_section'] = 0
    if 'tokens' not in st.session_state:
        st.session_state['tokens'] = 0      
        
def save_field(property, value):
    st.session_state['user_data'][property] = value

    return f"{property} with value {value} was saved."

def validate_overall():
    sec = st.session_state['curr_section'] + 1
    if sec >= len(FIRST_MESSAGES):
        return "Thank you for filling out the form. All sections are now complete!"

    # Slotting new schema into prompt
    with open(FILE_PATH, 'r', encoding='utf-8') as file:
        new_prompt = file.read()
    with open(SCHEMA_FILE_PATHS[sec], 'r', encoding='utf-8') as file:
        new_prompt += file.read()

    # Reset system prompt
    new_memory = [
        {"content": new_prompt, "role": "system"},
        {"content": FIRST_MESSAGES[sec], "role": "assistant"}
    ]
    st.session_state['curr_section'] = sec
    st.session_state['memory'] = new_memory
    return FIRST_MESSAGES[sec]


def orchestrate_call(choice):
    available_functions = {
        "save_field": save_field,
        "validate_overall": validate_overall
    }     
    function_name = choice['message']['function_call']['name']
    function_to_call = available_functions[function_name]
    function_args = choice['message']['function_call']['arguments']
    function_args = json.loads(function_args)
                    
    function_response = function_to_call(function_args['property'], function_args['value'])

    return function_response

def get_response(query : str):
    conversation_history = st.session_state['memory'].copy()
    conversation_history.append({"content": query, "role": "user"})
            
    response = openai.ChatCompletion.create(
        engine=DEPLOYMENT_NAME, 
        messages=conversation_history, 
        max_tokens=4000,
        functions=[
        {
          "name": "save_field",
          "description": "Save the validated user information",
          "parameters": FunctionParameters.model_json_schema()
        }
        ],
        temperature=0)
    results = ""
    
    for choice in response['choices']:
        if 'message' in choice:
            if 'function_call' in choice['message']:
                response = orchestrate_call(choice)                    
                conversation_history.append({
                    "role": "function",
                    "name": choice['message']['function_call']['name'],
                    "content": response
                })
                
                
                #Second Response
                secondResponse = openai.ChatCompletion.create(
                    engine=DEPLOYMENT_NAME, 
                    messages=conversation_history, 
                    functions=[{
                    "name": "validate_overall",
                    "description": "Validate the overall details of the user",
                    "parameters": {
                        "type": "object",
                        "properties": {},
                    }}],
                    temperature=0)
                for choice in secondResponse['choices']:
                    if 'message' in choice:
                        if 'function_call' in choice['message']:
                            results = orchestrate_call(choice)
                        else:
                            conversation_history.append(choice['message'])
                            results += choice['message']['content']
                            st.session_state['memory'] = conversation_history
            else:
                conversation_history.append(choice['message'])
                results += choice['message']['content']
                st.session_state['memory'] = conversation_history

    data = st.session_state['user_data']
    response_data = LLMResponse(response=results, user_data=data)
    return response_data
    