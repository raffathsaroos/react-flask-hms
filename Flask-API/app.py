# backend/app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
import logging
from werkzeug.security import generate_password_hash, check_password_hash
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app)  # Configure CORS properly
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', 'default-secret-key')

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# User storage (in production, use a database)
USERS = {
    "admin": generate_password_hash("admin123"),  # Hashed password
    "doctor": generate_password_hash("med123")
}

@app.route("/login", methods=["POST"])
def login():
    """
    Authenticate users
    ---
    tags:
      - Authentication
    parameters:
      - in: body
        name: credentials
        description: User credentials
        schema:
          type: object
          required:
            - username
            - password
          properties:
            username:
              type: string
            password:
              type: string
    responses:
      200:
        description: Login successful
      400:
        description: Invalid input
      401:
        description: Invalid credentials
    """
    try:
        data = request.get_json()
        
        # Validate input
        if not data or 'username' not in data or 'password' not in data:
            logger.warning("Missing credentials in request")
            return jsonify({"message": "Username and password required"}), 400
            
        username = data['username']
        password = data['password']
        
        # Check user exists and password matches
        if username in USERS and check_password_hash(USERS[username], password):
            logger.info(f"Successful login for {username}")
            return jsonify({
                "message": "Login successful",
                "user": username
            }), 200
            
        logger.warning(f"Failed login attempt for {username}")
        return jsonify({"message": "Invalid credentials"}), 401
        
    except Exception as e:
        logger.error(f"Login error: {str(e)}")
        return jsonify({"message": "Server error"}), 500

@app.route("/health")
def health_check():
    """Service health check"""
    return jsonify({"status": "healthy"}), 200

if __name__ == "__main__":
    port = int(os.getenv("FLASK_PORT", 5000))
    app.run(host='0.0.0.0', port=port, debug=os.getenv("FLASK_DEBUG", "True") == "True")
