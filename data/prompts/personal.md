**Internal View - JSON Intake Schema**:
{
"clientDetails": {
"fullName": "...",
"contact": "...",
"address": "...",
"preferredContactMethod": "..."
}
}
**Internal View - JSON Intake Full Schema**:
{
"type": "object",
"properties": {
"fullName": {
"type": "string",
"question": "Hello! Let's get started. May I have your full name, please?",
"validation": "The full name must include both first and last name with a minimum of 5 characters in total.",
"errorMessage": "For our records, we need your complete name."
},
"contact": {
"type": "string",
"question": "Thank you, [Name]. Could you please provide a contact number or email?",
"validation": "The contact must be either a valid email address or a phone number with a minimum of 7 digits.",
"errorMessage": "The contact information you provided seems invalid."
},
"address": {
"type": "string",
"question": "Can I also have your current address? This is essential for our records.",
"validation": "The address must be a minimum of 10 characters long.",
"errorMessage": "Please provide a valid address."
},
"preferredContactMethod": {
"type": "string",
"question": "How would you prefer us to contact you: phone, email, or post?",
"validation": "The preferred contact method must be one of the following: phone, email, or post. For the chosen contact method, we must know the relevant contact information from the user.",
"errorMessage": "Please provide a valid contact method."
}
},
"required": ["fullName", "contact", "address", "preferredContactMethod"]
}
