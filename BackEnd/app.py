from flask import Flask, jsonify, request, flash, session, redirect, url_for
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


class Accounts(SQL_DB.Model):
    __tablename__ = 'Accounts'
    __table_args__ = {'extend_existing': True}
    Account_ID = SQL_DB.Column(SQL_DB.String, primary_key=True)
    Role = SQL_DB.Column(SQL_DB.String(25))
    Email = SQL_DB.Column(SQL_DB.String(255), nullable=False)
    Username = SQL_DB.Column(SQL_DB.String(25))
    Password = SQL_DB.Column(SQL_DB.String(25))
    
    students = SQL_DB.relationship('Student', backref='account', lazy=True)
    tutors = SQL_DB.relationship('Tutors', backref='account', lazy=True)
    
    def __repr__(self):
        return f'User("{self.Account_ID}","{self.role}","{self.email}","{self.uname}","{self.password}")'

class Approve(SQL_DB.Model):
    __tablename__ = 'registration'
    __table_args__ = {'extend_existing': True}
    Account_ID = SQL_DB.Column(SQL_DB.String, primary_key=True)
    First_Name = SQL_DB.Column(SQL_DB.String(25))
    Last_Name = SQL_DB.Column(SQL_DB.String(25))
    Role = SQL_DB.Column(SQL_DB.String(25))
    Email = SQL_DB.Column(SQL_DB.String(255), nullable=False)
    Phone_Num = SQL_DB.Column(SQL_DB.String(12))
    Username = SQL_DB.Column(SQL_DB.String(25))
    Password = SQL_DB.Column(SQL_DB.String(25))
    Subjects = SQL_DB.Column(SQL_DB.String(150))

    def __repr__(self):
        return f'User("{self.Account_ID}","{self.FName}","{self.LName}","{self.email}","{self.Phone_Num}","{self.uname}","{self.password}","{self.Subjects}")'


class Student(SQL_DB.Model):
    __tablename__ = 'students'
    __table_args__ = {'extend_existing': True}
    Account_ID = SQL_DB.Column(SQL_DB.String, SQL_DB.ForeignKey('Accounts.Account_ID'), primary_key=True)
    First_Name = SQL_DB.Column(SQL_DB.String(25))
    Last_Name = SQL_DB.Column(SQL_DB.String(25))
    Email = SQL_DB.Column(SQL_DB.String(255), nullable=False)
    Phone_Num = SQL_DB.Column(SQL_DB.String(12))
    Subjects = SQL_DB.Column(SQL_DB.String(150))
    Card_Num = SQL_DB.Column(SQL_DB.String(19))
    CVV = SQL_DB.Column(SQL_DB.String(3))
    Expiry = SQL_DB.Column(SQL_DB.String(5))

    def __repr__(self):
        return f'User("{self.Account_ID}","{self.First_Name}","{self.Last_Name}","{self.Email}","{self.Phone_Num}","{self.Subjects}","{self.Card_Num}","{self.CVV}","{self.Expiry}")'


class Tutors(SQL_DB.Model):
    __tablename__ = 'tutors'
    __table_args__ = {'extend_existing': True}
    Account_ID = SQL_DB.Column(SQL_DB.String, SQL_DB.ForeignKey('Accounts.Account_ID'), primary_key=True)
    First_Name = SQL_DB.Column(SQL_DB.String(25))
    Last_Name = SQL_DB.Column(SQL_DB.String(25))
    Email = SQL_DB.Column(SQL_DB.String(255), nullable=False)
    Phone_Num = SQL_DB.Column(SQL_DB.String(255))
    Subjects = SQL_DB.Column(SQL_DB.String(150))

    def __repr__(self):
        return f'User("{self.Account_ID}","{self.First_Name}","{self.Last_Name}","{self.Email}","{self.Phone_Num}","{self.Subjects}")'
    

class TutoringSession(SQL_DB.Model):
    __tablename__ = 'session'
    ID = SQL_DB.Column(SQL_DB.Integer, primary_key=True) 
    Subject = SQL_DB.Column(SQL_DB.String(25))
    Tutor = SQL_DB.Column(SQL_DB.String(25))
    Date = SQL_DB.Column(SQL_DB.Date)

    def __repr__(self):
        return f'TutoringSession(Subject: {self.Subject}, Teacher: {self.Teacher}, Date: {self.Date})'

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

    existing_email = Accounts.query.filter_by(Email=Email).first()
    existing_uname = Accounts.query.filter_by(Username=Username).first()
    
    if existing_email and existing_uname:
        return jsonify({"message": "Account associated with this email and username already exists"}), 201

    elif existing_email:
        return jsonify({"message": "Account associated with this email already exists"}), 201

    elif existing_uname:
        return jsonify({"message": "Account associated with this username already exists"}), 201

    if role == "Student":
        num_existing_students = Student.query.count()
        user_id = f'S15{num_existing_students + 1:02}'

        Card_Num = data.get('cardnum')
        CVV = data.get('CVV')
        expiry = data.get('expiry')
        
        
        new_Account = Accounts(
            Account_ID = user_id,
            Role = role,
            Email=Email,
            Username=Username,
            Password=password
        )
        
        new_student = Student(
            Account_ID = user_id,
            First_Name=FName,
            Last_Name=LName,
            Email=Email,
            Phone_Num=phone,
            Subjects=subjects,
            Card_Num=Card_Num,
            CVV=CVV,
            Expiry=expiry
        )
        
        SQL_DB.session.add(new_Account)
        SQL_DB.session.add(new_student)
        SQL_DB.session.commit()
        return jsonify({"message": "Account Successfully registered, Log in to get started"}), 200

    elif role == "Tutor":
        num_existing_tutors = Tutors.query.count()
        user_id = f'T11{num_existing_tutors + 1:02}'

        # # await_email = Approve.query.filter_by(Email=Email).first()
        
        # if await_email:
        #     return jsonify({"message": "Account already registered, awaiting Admin Approval"}), 201

        new_Account = Accounts(
            Account_ID = user_id,
            Role = role,
            Email=Email,
            Username=Username,
            Password=password
        )
        
        new_Tutor = Tutors(
            Account_ID = user_id,
            First_Name=FName,
            Last_Name=LName,
            Email=Email,
            Phone_Num=phone,
            Subjects=subjects
        )

        SQL_DB.session.add(new_Account)
        SQL_DB.session.add(new_Tutor)
        SQL_DB.session.commit()
        return jsonify({"message": "Account Successfully registered, Log in to get started"}), 200

@app.route('/api/log', methods=['POST'])
def LogIn():
    data = request.json
    username = data.get('username')
    password = data.get('password')


    if username == "admin" and password == "password":
        user_data = {
            "Role": "admin"
        }
        return jsonify(user_data), 200

    user_account = Accounts.query.filter_by(Username=username, Password=password).first()
    
    if user_account:
        user_data = {
            "Account_ID": user_account.Account_ID,
            "Role": user_account.Role
        }

        if user_account.Role == "Student":
            student = Student.query.filter_by(Account_ID=user_account.Account_ID).first()
            if student:
                user_data["FirstName"] = student.First_Name
                user_data["LastName"] = student.Last_Name
                user_data["Phone"] = student.Phone_Num
                user_data["Email"] = student.Email
            
        elif user_account.Role == 'Tutor':
            tutor = Tutors.query.filter_by(Account_ID=user_account.Account_ID).first()
            if tutor:
                user_data["FirstName"] = tutor.First_Name
                user_data["LastName"] = tutor.Last_Name
                user_data["Phone"] = tutor.Phone_Num
                user_data["Email"] = tutor.Email
   
        return jsonify(user_data), 200

    else:
        return jsonify({"message": "Invalid login credentials"}), 201
    


@app.route('/api/sessions', methods=['POST'])
def create_session():
    data = request.json
    subject = data.get('subject')
    teacher = data.get('teacher')
    date = data.get('date')

    new_session = TutoringSession(Subject=subject, Tutor=teacher, Date=date)
    SQL_DB.session.add(new_session)
    SQL_DB.session.commit()

    return jsonify({"message": "Session created successfully"}), 201

@app.route('/api/getsesh', methods=['GET'])
def get_sessions():
    # Query the 'TutoringSession' table to get all sessions
    sessions = TutoringSession.query.all()

    session_list = [
        {
            "ID": session.ID,
            "Subject": session.Subject,
            "Tutor": session.Tutor,
            "Date": session.Date.strftime('%Y-%m-%d')
        }
        for session in sessions
    ]

    return jsonify(session_list)

if __name__ == '__main':
    app.run(debug=True)
