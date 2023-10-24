import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from "axios";

const RegisterModal = ({ show, handleClose }) => {
    const [role, setRole] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [message, setMessage] = useState('');
    const [formData, setFormData] = useState({
        Account_Type: "",
        username: "",
        password: "",
    });

    const isStudent = role === 'Student';

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Register</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="Account_type">
                        <Form.Label>I am a</Form.Label>
                        <Form.Control as="select" onChange={(e) => setRole(e.target.value)}>
                            <option>Student</option>
                            <option>Tutor</option>
                        </Form.Control>
                    </Form.Group>
                    
                    <Form.Group controlId="formBasicFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="First Name" />
                    </Form.Group>
                    <Form.Group controlId="formBasicLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Last Name" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPhone">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="tel" placeholder="Enter phone number" />
                    </Form.Group>
                    
                    <Form.Group controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Username" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicSubjects">
                        <Form.Label>Subjects</Form.Label>
                        <Form.Control type="text" placeholder="Enter subjects separated by comma" />
                    </Form.Group>
                    {isStudent && (
                        <>
                            {/* Student-specific fields */}
                            <Form.Group controlId="formBasicCard">
                                <Form.Label>Card Details</Form.Label>
                                <Form.Control type="text" placeholder="Card Number" />
                                <Form.Control type="text" placeholder="CVV (3 digits on the back)" />
                                <Form.Control type="text" placeholder="Expiry (DD/MM)" />
                            </Form.Group>
                        </>
                    )}
                    {/* {!isStudent && (
                        <Form.Group controlId="formBasicSubjects">
                            <Form.Label>Subjects</Form.Label>
                            <Form.Control type="text" placeholder="Enter subjects separated by comma" />
                        </Form.Group>
                    )} */}
                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default RegisterModal;