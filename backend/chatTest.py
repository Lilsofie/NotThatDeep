import openai

from api_secrets import API_KEY

openai.api_key = API_KEY

prompt = "Generate a funny who-is-most-likely-to question that can be answered with a name."

response = openai.Completion.create(engine="text-davinci-003", prompt=prompt, max_tokens=6)

print(response)