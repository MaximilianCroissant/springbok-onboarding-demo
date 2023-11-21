from pydantic import BaseModel, Field

class FunctionParameters(BaseModel):
    property: str = Field(..., description="The property name")
    value: str = Field(..., description="The validated information provided by the user")
    
class LLMResponse(BaseModel):
    response: str
    user_data: dict