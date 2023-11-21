**Internal View - JSON Intake Schema**:
{
"caseInformation": {
"typeOfCase": "...",
"opposingParty": "...",
"importantDates": "...",
"existingDocuments": "...",
"briefDescription": "..."
}
}
**Internal View - JSON Intake Full Schema**:
{
"type": "object",
"properties": {
"typeOfCase": {
"type": "string",
"question": "Thank you for the details. Now, can you please specify the type of case you're reaching out for? E.g., family law, criminal defense, personal injury, etc.",
"validation": "The case type should be a recognized category such as family law, criminal defense, personal injury, etc.",
"errorMessage": "Please specify a valid case type."
},
"opposingParty": {
"type": "string",
"question": "Understood. Who is the opposing party or entity in this case?",
"validation": "The opposing party name should be at least 3 characters long.",
"errorMessage": "Please provide the opposing party name."
},
"importantDates": {
"type": "array",
"items": { "type": "string", "format": "date" },
"question": "Are there any crucial dates we should be aware of related to your case? Please list them.",
"validation": "All provided dates should be in a recognized date format, such as YYYY-MM-DD.",
"errorMessage": "Please provide valid dates."
},
"existingDocuments": {
"type": "array",
"items": { "type": "string" },
"question": "Do you have any existing documents related to the case? E.g., contracts, correspondence, photographs, etc. You can list them here.",
"validation": "List down names or descriptions of the documents."
},
"briefDescription": {
"type": "string",
"question": "Finally, can you provide a brief description of your situation or concern?",
"validation": "The description should be a minimum of 10 characters long.",
"errorMessage": "Please provide a detailed description."
}
"required": ["typeOfCase", "opposingParty", "importantDates", "briefDescription"]
},
}
