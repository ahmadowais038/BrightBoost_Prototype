import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from "axios";

const LoginModal = ({ show, handleClose }) => {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
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
        try {
            const response = await axios.post('http://localhost:5000/api/log', formData);

            if (response.status === 200 || response.status === 400) {
                const data = response.data.message;
                console.log(data);
                // setMessage(data.message);
            } else {
                console.error('Error:', response.statusText);
                const errorMessage = response.data.message;
                // setMessage(errorMessage);
            }
        } catch (error) {
            console.error('Error:', error);
            // setMessage("An error has occurred!");
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
                        <Form.Label>username</Form.Label>
                        <Form.Control 
                        name='username' 
                        type="text" 
                        placeholder="Enter Username" 
                        value={formData.username}
                        onChange={handleChange} />
                    </Form.Group>

                    <br />

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                        name="password" 
                        type="password" 
                        placeholder="Password" 
                        value={formData.password}
                        onChange={handleChange}/>
                    </Form.Group>

                    <br />
                    
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default LoginModal