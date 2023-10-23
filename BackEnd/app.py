from flask import Flask, jsonify, request, flash, session
from flask_sqlalchemy import SQLAlchemy
from flask_session import Session
from flask_bcrypt import Bcrypt
from flask_cors import CORS, cross_origin
#from uuid import uuid4
#from models import db, User

app = Flask(__name__)
app.secret_key = "our_secret_key"
app.config['SQLALCHEMY_DATABASE_URI']= "sqlite:///accounts.sqlite"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False
app.config["SESSION_PERMANENT"]=False
app.config["SESSION_TYPE"]='filesystem'
db = SQLAlchemy(app)
bcrypt=Bcrypt(app)
Session(app)
CORS(app)  # Enable CORS for the entire app

class Account(db.Model):
    id = db.Column(db.Integer, primary_key=True, unique=True)
    fname = db.Column(db.String(200), nullable=False)
    lname = db.Column(db.String(200), nullable=False)
    email=db.Column(db.String(200), nullable=False, unique=True)
    uname = db.Column(db.String(200), nullable=False)
    password = db.Column(db.String(200), nullable=False)

    def __repr__(self):
        return f'Account("{self.id}","{self.fname}","{self.lname}","{self.email}","{self.uname}","{self.password}")'

app.app_context().push()
db.create_all()


@app.route('/')
def hello():
    return 'Hello World!'

@app.route('/api/reg', methods=['POST'])
def Register():
    # data = request.json
    # email = data.get('username')
    # password = data.get('password')
    fname=request.json['FirstName']
    lname=request.json['LastName']
    email=request.json['email']
    username=request.json['username']
    password=request.json['password']
    

    is_email=Account.query.filter_by(email=email).first()
    if is_email:
        return jsonify("Account associated with this email already exists")
    
    else:
        #hash_password=bcrypt.generate_password_hash(password,10)
        user=Account(fname=fname,lname=lname,email=email,uname=username,password=password)
        db.session.add(user)
        db.session.commit()
        return jsonify(message='Account Created Successfully')
        # flash('Account Created Successfully')


if __name__ == '__main':
    app.run(debug=True)