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
    First_Name = SQL_DB.Column(SQL_DB.String(25))
    Last_Name = SQL_DB.Column(SQL_DB.String(25))
    Email = SQL_DB.Column(SQL_DB.String(255), nullable=False)
    Phone_Num = SQL_DB.Column(SQL_DB.String(255))
    Subjects = SQL_DB.Column(SQL_DB.String(150))

    def __repr__(self):
        return f'User("{self.Account_ID}","{self.First_Name}","{self.Last_Name}","{self.Email}","{self.Phone_Num}","{self.Subjects}")'


# class Accounts(SQL_DB.Model):
#     __tablename__ = 'accounts'
#     __table_args__ = {'extend_existing': True}
#     Account_ID = SQL_DB.Column(SQL_DB.String, primary_key=True)
#     role = SQL_DB.Column(SQL_DB.String(25))
#     email = SQL_DB.Column(SQL_DB.String(255), nullable=False)
#     uname = SQL_DB.Column(SQL_DB.String(25))
#     password = SQL_DB.Column(SQL_DB.String(25))

#     def __repr__(self):
#         return f'User("{self.Account_ID}","{self.role}","{self.email}","{self.uname}","{self.password}")'
    

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
        return jsonify({"message": "Account associated with this email and username already exists"}), 400

    elif existing_email:
        return jsonify({"message": "Account associated with this email already exists"}), 400

    elif existing_uname:
        return jsonify({"message": "Account associated with this username already exists"}), 400

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
        return jsonify({"message": "Account Successfully registered"}), 200

    elif role == "Tutor":
        num_existing_tutors = Tutors.query.count()
        user_id = f'T11{num_existing_tutors + 1:02}'

        await_email = Approve.query.filter_by(Email=Email).first()
        
        if await_email:
            return jsonify({"message": "Account already registered, awaiting Admin Approval"}), 400

        new_Tutor = Approve(
            Account_ID = user_id,
            First_Name=FName,
            Last_Name=LName,
            Role=role,
            Email=Email,
            Phone_Num=phone,
            Username=Username,
            Password=password,
            Subjects=subjects,
        )

        SQL_DB.session.add(new_Tutor)
        SQL_DB.session.commit()
        return jsonify({"message": "Tutor registration pending Admin approval"}), 200

@app.route('/api/log', methods=['POST'])
def LogIn():
    data = request.json
    username = data.get('username')
    password = data.get('password')

    is_user = Student.query.filter_by(Username=username, Password=password).first()
    
    if is_user:
        return jsonify({"message": "Login successful"}), 200

    else:
        return jsonify({"message": "Invalid login credentials"}), 400
    
if __name__ == '__main':
    app.run(debug=True)
