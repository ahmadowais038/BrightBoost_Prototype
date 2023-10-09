from flask import Flask, request, render_template, jsonify

app = Flask(__name__)

@app.route('/')
def hello():
    return jsonify('Hello World!')

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
