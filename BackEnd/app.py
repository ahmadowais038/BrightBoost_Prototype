from flask import Flask, jsonify, request, session, flash
from flask_cors import CORS, cross_origin
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
# from models import db, User

app = Flask(__name__)
app.secret_key = "our_secret_key"
app.config['SQLALCHEMY_DATABASE_URI']= "sqlite:///ums.sqlite"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False
app.config["SESSION_PERMANENT"]=False
app.config["SESSION_TYPE"]='filesystem'
db=SQLAlchemy(app)
bcrypt=Bcrypt(app)
session(app)
CORS(app)  # Enable CORS for the entire app

class Account(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    fname = db.Column(db.String(255), nullable=False)
    lname = db.Column(db.String(255), nullable=False)
    email=db.Column(db.String(255), nullable=False)
    uname = db.Column(db.String(255), nullable=False)
    password = db.Column(db.String(255), nullable=False)

    def __repr__(self):
        return f'account("{self.id}","{self.fname}","{self.lname}","{self.uname}","{self.password}")'
    
from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello():
    return 'Hello World!'

if __name__ == '__main__':
    app.run(debug=True)

if __name__ == '__main__':
    app.run(debug=True)

@app.route('/reg', methods=['POST','GET'])
def Register():
    # data = request.json
    # email = data.get('username')
    # password = data.get('password')
    fname=request.form.get('fname')
    lname=request.form.get('lname')
    email=request.form.get('email')
    username=request.form.get('username')
    password=request.form.get('password')

    is_email=User().query.filter_by(email=email).first()
    if is_email:
        flash("Account associated with this email already exists")
    
    else:
        hash_password=bcrypt.generate_password_hash(password,10)
        user=Account(fname=fname,lname=lname,email=email,password=hash_password,edu=edu,username=username)
        db.session.add(user)
        db.session.commit()
        return jsonify(message='Account Created Successfully')
        # flash('Account Created Successfully')

    # Check if either field is empty
    # if not email or not password:
    #     return jsonify(message='Error: Both fields are required.')
    

    # return jsonify(message="Log in Successful")


if __name__ == '__main__':
    app = create_app()
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
