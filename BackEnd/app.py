from flask import Flask, jsonify, request, flash, session
from flask_sqlalchemy import SQLAlchemy
#from flask_session import Session
#from flask_bcrypt import Bcrypt
from flask_mysqldb import MySQL
from flask_cors import CORS, cross_origin
#from uuid import uuid4
#from models import db, User

app = Flask(__name__)

# SQLAlchemy configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:@localhost:3307/brightboost'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

SQL_DB = SQLAlchemy(app)
#bcrypt=Bcrypt(app)
#Session(app)
CORS(app)  # Enable CORS for the entire app

# class User(SQL_DB.Model):
#     __tablename__ = 'registration'
#     id = SQL_DB.Column(SQL_DB.Integer, primary_key=True, autoincrement=True)
#     email = SQL_DB.Column(SQL_DB.String(255), nullable = False)  
#     uname = SQL_DB.Column(SQL_DB.String(20))  
#     password = SQL_DB.Column(SQL_DB.String(20))  

#     def __repr__(self):
#         return f'User("{self.id}","{self.email}","{self.uname}","{self.password}")'
    

class Student(SQL_DB.Model):
    __tablename__ = 'students'
    Student_ID = SQL_DB.Column(SQL_DB.Integer, primary_key=True, autoincrement=True)
    First_Name = SQL_DB.Column(SQL_DB.String(25))  
    Last_Name = SQL_DB.Column(SQL_DB.String(25))  
    Email = SQL_DB.Column(SQL_DB.String(255), nullable = False)  
    Username = SQL_DB.Column(SQL_DB.String(25))  
    Password = SQL_DB.Column(SQL_DB.String(25))
    Card_Num = SQL_DB.Column(SQL_DB.String(16))
    CVV = SQL_DB.Column(SQL_DB.String(3))
    Expiry = SQL_DB.Column(SQL_DB.String(5))
    Subjects = SQL_DB.Column(SQL_DB.String(150))


    def __repr__(self):
        return f'User("{self.Student_ID}","{self.First_Name}","{self.Last_Name}","{self.Email}","{self.Username}","{self.Password}","{self.Card_Num}","{self.CVV}","{self.Expiry}","{self.Subjects}")'

class Tutors(SQL_DB.Model):
    __tablename__ = 'tutors'
    Tutor_ID = SQL_DB.Column(SQL_DB.Integer, primary_key=True, autoincrement=True)
    First_Name = SQL_DB.Column(SQL_DB.String(25))  
    Last_Name = SQL_DB.Column(SQL_DB.String(25))  
    Email = SQL_DB.Column(SQL_DB.String(255), nullable = False)  
    Username = SQL_DB.Column(SQL_DB.String(25))  
    Password = SQL_DB.Column(SQL_DB.String(25))
    Subjects = SQL_DB.Column(SQL_DB.String(150))


    def __repr__(self):
        return f'User("{self.Student_ID}","{self.First_Name}","{self.Last_Name}","{self.Email}","{self.Username}","{self.Password}","{self.Subjects}")'
    
class Approve(SQL_DB.Model):
    __tablename__ = 'registration'
    ID = SQL_DB.Column(SQL_DB.Integer, primary_key=True, autoincrement=True)
    FName = SQL_DB.Column(SQL_DB.String(25))  
    LName = SQL_DB.Column(SQL_DB.String(25))  
    email = SQL_DB.Column(SQL_DB.String(255), nullable = False)  
    uname = SQL_DB.Column(SQL_DB.String(25))  
    password = SQL_DB.Column(SQL_DB.String(25))
    Subjects = SQL_DB.Column(SQL_DB.String(150))


    def __repr__(self):
        return f'User("{self.ID}","{self.FName}","{self.LName}","{self.email}","{self.uname}","{self.password}","{self.Subjects}")'



@app.route('/')
def hello():
    return 'Hello World!'

@app.route('/api/reg', methods=['POST'])
def Register():
    data = request.json
    role = data.get('Account_type')

    
    email = data.get('email')
    username = data.get('username')
    password = data.get('password')

    existing_user = User.query.filter_by(email=email).first()
    if existing_user:
        return jsonify({"message": "Account associated with this email already exists"}), 400
    
    else:
        reg = User(email=email, uname=username, password = password)

        SQL_DB.session.add(reg)
        SQL_DB.session.commit()
        return jsonify({"message": "Account Successfully registered"}), 200
   

if __name__ == '__main':
    app.run(debug=True)