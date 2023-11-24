**Internal View - JSON Intake Full Schema**:
{
"type": "object",
"properties": {
"fullName": {
"type": "string",
"question": "Hello! Let's get started. May I have your full name, please?",
"validation": "The full name must include a valid first and last name and no joke names.",
},
"contact": {
"type": "string",
"question": "Thank you, [Name]. Could you please provide a contact number or email?",
"validation": "The contact must be either a valid email address or a phone number with a minimum of 7 digits.",
},
"address": {
"type": "string",
"question": "Can I also have your current address? This is essential for our records.",
"validation": "A valid address that includes street name, post code, and city.",
},
"preferredContactMethod": {
"type": "string",
"question": "How would you prefer us to contact you: phone, email, or post?",
"validation": "Either phone, email, or post. If phone, include phone number (ask if necessary). If email, include email address (ask if necessary).",
},
"typeOfCase": {
"type": "string",
"question": "Thank you for the details. Now, can you please specify the type of case you're reaching out for? E.g., family law, criminal defense, personal injury, etc.",
"validation": "The case type should be a recognized category such as family law, criminal defense, personal injury, etc.",
},
"opposingParty": {
"type": "string",
"question": "Understood. Who is the opposing party or entity in this case?",
"validation": "The opposing party name should be at least 3 characters long.",
},
"importantDates": {
"type": "array",
"items": { "type": "string", "format": "date" },
"question": "Are there any crucial dates we should be aware of related to your case? Please list them.",
"validation": "All provided dates should be in a recognized date format, such as YYYY-MM-DD.",
},
"existingDocuments": {
"type": "array",
"items": { "type": "string" },
"question": "Do you have any existing documents related to the case? E.g., contracts, correspondence, photographs, etc. You can list them here.",
"validation": "List of names or descriptions of the documents."
},
"briefDescription": {
"type": "string",
"question": "Finally, can you provide a brief description of your situation or concern?",
"validation": "The description should be a minimum of 10 characters long.",
},
},
"required": ["fullName", "contact", "address", "preferredContactMethod", "typeOfCase", "opposingParty", "importantDates", "briefDescription"]
}
