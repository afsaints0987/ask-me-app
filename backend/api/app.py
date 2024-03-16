import os
from flask import Flask, request, jsonify
from dotenv import load_dotenv
from openai import OpenAI
from flask_cors import CORS

load_dotenv()
app = Flask(__name__)
CORS(app)

api_key = os.getenv("OPENAI_TOKEN")
client = OpenAI(api_key=api_key)

def ask_question(prompt, context):
    response = client.chat.completions.create(
        model = "gpt-3.5-turbo",
        messages = [
            {
                "role": "user",
                "content": prompt,
            }
        ],
        temperature=0.9,
        max_tokens=50,
        top_p=1
    )
    answer = response.choices[0].message.content
    return answer
document_body = ""

context = document_body if document_body else "Default context"

@app.route("/ask", methods=["POST"])
def ask():
    data = request.get_json()
    question = data["prompt"]
    answer = ask_question(question, context)
    return jsonify({"answer": answer})

if __name__ == "__main__":
    app.run(debug=True)