import openai
from api_secrets import API_KEY #generate/find in dashboard and store in separate file

openai.api_key = API_KEY

prompt = "Say this is a test"

response = openai.Completion.create(engine="text-davinci-001", prompt=prompt, max_tokens=6)

print(response)