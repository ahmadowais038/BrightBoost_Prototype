from flask import Flask, request, render_template, jsonify
app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form.get('email')
        password = request.form.get('password')

        if not email or not password:
            return jsonify({'message': 'Please provide both email and password.'})

        # Perform your actual login verification here, e.g., checking against a database.
        # Replace the following line with your verification logic.
        if email == 'example@email.com' and password == 'password':
            return jsonify({'message': 'Login successful'})
        else:
            return jsonify({'message': 'Login failed'})
