# Streamlit Onboarding Demo Backend

Streamlit app that renders a full vite app as a custom component and exchanges data with it - so it basically serves as a backend.

## Local Development

```sh
poetry install
poetry run streamlit run src/main.py
```

We need a few env variables for Azure. For local development, you need a .streamlit/secrets.toml
See [here](https://docs.streamlit.io/library/advanced-features/secrets-management)

```sh
AZURE_API_VERSION = "Something with function calling, e.g. 2023-07-01-preview"
AZURE_ENDPOINT = "https://XXX.azure.com"
AZURE_KEY = "XXX123"
AZURE_NAME = "springbok-XXX"
```
