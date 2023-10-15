from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for the entire app

@app.route('/api/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('username')
    password = data.get('password')

    # Check if either field is empty
    if not email or not password:
        return jsonify(message='Error: Both fields are required.')
    

    return jsonify(message="Log in Successful")


if __name__ == '__main__':
    app.run(debug=True)

# app = Flask(__name__)

# @app.route('/login', methods=['POST'])
# def login():
#     data = request.get_json()
#     email = data.get('email')
#     password = data.get('password')

#     if not email or not password:
#         return jsonify({'message': 'Please provide both email and password'}), 400

#     # Perform further authentication logic here (e.g., check against a database)
#     # For this example, we'll just return a success message.
#     return jsonify({'message': 'Login successful'}), 200

# if __name__ == '__main__':
#     app.run(debug=True)
