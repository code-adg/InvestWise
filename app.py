from flask import Flask, request, jsonify
from flask_cors import CORS
from langchain.prompts import PromptTemplate
from langchain_groq import ChatGroq
from langchain.chains import LLMChain

app = Flask(__name__)
CORS(app)

# Initialize Groq LLM with API Key
def initialize_llm():
    groq_api_key = "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"
    model_name = "llama-3.3-70b-versatile"  
    llm = ChatGroq(api_key=groq_api_key, model=model_name)
    return llm

prompt_template = PromptTemplate(
    input_variables=["user_query"],
    template="""
    You are an experienced financial planner. Your task is to provide clear and comprehensive advice on financial investments.
    Only answer queries strictly related to finance, investments, or financial planning. If the query is unrelated, respond with:
    'This query is not related to finance. Please ask questions about financial investments or planning.'

    Query: {user_query}

    Provide actionable steps, potential risks, and benefits if applicable.
    
    *IMPORTANT:* Format your response in plain text only. Do not use markdown, bullet points, or special formatting.
    """
)


def create_financial_planner_chain(llm):
    chain = LLMChain(llm=llm, prompt=prompt_template)
    return chain


llm = initialize_llm()
financial_planner_chain = create_financial_planner_chain(llm)


@app.route('/ask', methods=['POST'])
def handle_query():
    data = request.json
    user_query = data.get("user_query", "")
    
    if not user_query:
        return jsonify({"error": "No query provided."}), 400

    response = financial_planner_chain.run({"user_query": user_query})
    
    return jsonify({"response": response})

if __name__ == '__main__':
    app.run(debug=True)