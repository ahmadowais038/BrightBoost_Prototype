import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from "axios";

const LoginModal = ({ show, handleClose }) => {
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState(null);
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post('http://localhost:5000/api/log', formData);
        const data = response.data;
        // setMessage(data.message);

        if (response.status === 200){
            sessionStorage.setItem('ID', data.Account_ID);
            sessionStorage.setItem('Role', data.Role);
            sessionStorage.setItem('FirstName', data.FirstName);
            sessionStorage.setItem('LastName', data.LastName);
            sessionStorage.setItem('Phone', data.Phone);
            sessionStorage.setItem('Email', data.Email);
            sessionStorage.setItem('LogStatus', "True");

            if(data.Role == "Student"){
                window.location.href="http://localhost:5173/StudentDashboard"
            }
            else if(data.Role == "Tutor"){
                window.location.href="http://localhost:5173/tutordashboard"
            }
        }
        
        if (response.status === 201){
            setMessage(data.message);
            setMessageType('error');
            console.log(messageType);

        }
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control 
                        type="text"
                        name='username' 
                        placeholder="Enter Username" 
                        value={formData.username}
                        onChange={handleChange}/>
                    </Form.Group>
                    
                    <br />

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                        type="password" 
                        name='password'
                        placeholder="Enter Password" 
                        value={formData.password}
                        onChange={handleChange} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
                <br />
                {message && messageType === 'error' && (
                    <p className='reg-error'>{message}</p>
                )}
                {message && messageType === 'success' && (
                    <p className='reg-success'>{message}</p>
                )}
            </Modal.Body>
        </Modal>
    );
};

export default LoginModal