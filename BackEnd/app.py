from flask import Flask, jsonify, request, flash, session
from flask_sqlalchemy import SQLAlchemy
# from flask_session import Session
# from flask_bcrypt import Bcrypt
from flask_mysqldb import MySQL
from flask_cors import CORS, cross_origin
# from uuid import uuid4
# from models import db, User

app = Flask(__name__)

# SQLAlchemy configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:@localhost:3307/brightboost'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

SQL_DB = SQLAlchemy(app)
# bcrypt=Bcrypt(app)
# Session(app)
CORS(app)  # Enable CORS for the entire app


class Student(SQL_DB.Model):
    __tablename__ = 'students'
    Student_ID = SQL_DB.Column(
        SQL_DB.Integer, primary_key=True, autoincrement=True)
    First_Name = SQL_DB.Column(SQL_DB.String(25))
    Last_Name = SQL_DB.Column(SQL_DB.String(25))
    Email = SQL_DB.Column(SQL_DB.String(255), nullable=False)
    Phone_Num = SQL_DB.Column(SQL_DB.String(255))
    Username = SQL_DB.Column(SQL_DB.String(25))
    Password = SQL_DB.Column(SQL_DB.String(25))
    Card_Num = SQL_DB.Column(SQL_DB.String(19))
    CVV = SQL_DB.Column(SQL_DB.String(3))
    Expiry = SQL_DB.Column(SQL_DB.String(5))
    Subjects = SQL_DB.Column(SQL_DB.String(150))

    def __repr__(self):
        return f'User("{self.Student_ID}","{self.First_Name}","{self.Last_Name}","{self.Email}","{self.Phone_Num}","{self.Username}","{self.Password}","{self.Card_Num}","{self.CVV}","{self.Expiry}","{self.Subjects}")'


class Tutors(SQL_DB.Model):
    __tablename__ = 'tutors'
    Tutor_ID = SQL_DB.Column(
        SQL_DB.Integer, primary_key=True, autoincrement=True)
    First_Name = SQL_DB.Column(SQL_DB.String(25))
    Last_Name = SQL_DB.Column(SQL_DB.String(25))
    Email = SQL_DB.Column(SQL_DB.String(255), nullable=False)
    Phone_Num = SQL_DB.Column(SQL_DB.String(255))
    Username = SQL_DB.Column(SQL_DB.String(25))
    Password = SQL_DB.Column(SQL_DB.String(25))
    Subjects = SQL_DB.Column(SQL_DB.String(150))

    def __repr__(self):
        return f'User("{self.Student_ID}","{self.First_Name}","{self.Last_Name}","{self.Email}","{self.Phone_Num}","{self.Username}","{self.Password}","{self.Subjects}")'


class Approve(SQL_DB.Model):
    __tablename__ = 'registration'
    ID = SQL_DB.Column(SQL_DB.Integer, primary_key=True, autoincrement=True)
    FName = SQL_DB.Column(SQL_DB.String(25))
    LName = SQL_DB.Column(SQL_DB.String(25))
    email = SQL_DB.Column(SQL_DB.String(255), nullable=False)
    Phone_Num = SQL_DB.Column(SQL_DB.String(255))
    uname = SQL_DB.Column(SQL_DB.String(25))
    password = SQL_DB.Column(SQL_DB.String(25))
    Subjects = SQL_DB.Column(SQL_DB.String(150))

    def __repr__(self):
        return f'User("{self.ID}","{self.FName}","{self.LName}","{self.email}","{self.Phone_Num}","{self.uname}","{self.password}","{self.Subjects}")'


@app.route('/')
def hello():
    return 'Hello World!'


@app.route('/api/reg', methods=['POST'])
def Register():
    data = request.json
    role = data.get('role')
    FName = data.get('FirstName')
    LName = data.get('LastName')
    Email = data.get('email')
    phone = data.get('Phone')
    Username = data.get('username')
    password = data.get('password')
    subjects = data.get('subjects')

    

    if role == "Student":
        Card_Num = data.get('cardnum')
        CVV = data.get('CVV')
        expiry = data.get('expiry')
        
        existing_email = Student.query.filter_by(Email=Email).first()
        existing_uname = Student.query.filter_by(Username=Username).first()

        if existing_email and existing_uname:
            return jsonify({"message": "Account associated with this email and username already exists"}), 400

        elif existing_email:
            return jsonify({"message": "Account associated with this email already exists"}), 400

        elif existing_uname:
            return jsonify({"message": "Account associated with this username already exists"}), 400

        new_student = Student(
            First_Name=FName,
            Last_Name=LName,
            Email=Email,
            Phone_Num=phone,
            Username=Username,
            Password=password,
            Subjects=subjects,
            Card_Num=Card_Num,
            CVV=CVV,
            Expiry=expiry
        )

        SQL_DB.session.add(new_student)
        SQL_DB.session.commit()
        return jsonify({"message": "Account Successfully registered"}), 200

    elif role == "Tutor":
        existing_email = Tutors.query.filter_by(Email=Email).first()
        existing_uname = Tutors.query.filter_by(Username=Username).first()

        if existing_email and existing_uname:
            return jsonify({"message": "Account associated with this email and username already exists"}), 400

        elif existing_email:
            return jsonify({"message": "Account associated with this email already exists"}), 400

        elif existing_uname:
            return jsonify({"message": "Account associated with this username already exists"}), 400
        
        new_Tutor = Approve(
            FName=FName,
            LName=LName,
            email=Email,
            Phone_Num=phone,
            uname=Username,
            password=password,
            Subjects=subjects,
        )

        SQL_DB.session.add(new_Tutor)
        SQL_DB.session.commit()
        return jsonify({"message": "Tutor registration pending approval"}), 200

@app.route('/api/log', methods=['POST'])
def LogIn():
    
    pass

if __name__ == '__main':
    app.run(debug=True)
