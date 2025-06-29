from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from hashlib import sha256
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)
CORS(app)

mongoURI = os.getenv("DBKEY")
client = MongoClient(mongoURI)
db = client["CreekIQ"]
credentialsCollection = db["credentials"]

@app.route('/api/register', methods=['POST'])
def registerUser():
    data = request.json
    fullName = data.get("name")
    email = data.get("email")
    password = data.get("password")

    if not fullName or not email or not password:
        return jsonify({ "error": "Missing fields" }), 400

    existingUser = credentialsCollection.find_one({ "email": email })
    if existingUser:
        return jsonify({ "error": "Email already registered" }), 409

    hashedPassword = sha256(password.encode()).hexdigest()

    credentialsCollection.insert_one({
        "name": fullName,
        "email": email,
        "password": hashedPassword
    })

    return jsonify({ "message": "User registered successfully" }), 201

@app.route('/api/login', methods=['POST'])
def loginUser():
    data = request.json
    email = data.get("email")
    password = data.get("password")

    if not email or not password:
        return jsonify({ "error": "Missing fields" }), 400

    user = credentialsCollection.find_one({ "email": email })
    if not user:
        return jsonify({ "error": "Invalid email or password" }), 401

    hashedInput = sha256(password.encode()).hexdigest()
    if user["password"] != hashedInput:
        return jsonify({ "error": "Invalid email or password" }), 401

    return jsonify({ "message": "Login successful" }), 200

if __name__ == '__main__':
    app.run(debug=True)
