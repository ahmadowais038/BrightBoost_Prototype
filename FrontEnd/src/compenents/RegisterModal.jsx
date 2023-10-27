import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from "axios";

const RegisterModal = ({ show, handleClose }) => {
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState(null);
    const [formData, setFormData] = useState({
        role: "Student",
        FirstName: "",
        LastName: "",
        email: "",
        Phone: "",
        username: "",
        password: "",
        subjects: "",
        cardnum: "",
        CVV: "",
        expiry: ""
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
        const response = await axios.post('http://localhost:5000/api/reg', formData);
        const data = response.data;
        setMessage(data.message);

        if (response.status === 200){
            console.log(data.message);
            setMessageType('success');
        }
        
        if (response.status === 201){
            console.log(data.message);
            setMessageType('error');
            console.log(messageType);

        }
    };

    const isStudent = formData.role === 'Tutor';

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Register</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="Account_type">
                        <Form.Label>I am a</Form.Label>
                        <Form.Control name='role' as="select" value={formData.role} onChange={handleChange}>
                            <option>Student</option>
                            <option>Tutor</option>
                        </Form.Control>
                    </Form.Group>

                    {/* onChange={(e) => setRole(e.target.value)} */}

                    <br />

                    <Form.Group controlId="formBasicFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            name='FirstName'
                            type="text"
                            placeholder="First Name"
                            value={formData.FirstName}
                            onChange={handleChange} />
                    </Form.Group>

                    <br />

                    <Form.Group controlId="formBasicLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            name='LastName'
                            type="text"
                            placeholder="Last Name"
                            value={formData.LastName}
                            onChange={handleChange} />
                    </Form.Group>

                    <br />


                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            name='email'
                            type="email"
                            placeholder="Enter email"
                            value={formData.email}
                            onChange={handleChange} />
                    </Form.Group>

                    <br />

                    <Form.Group controlId="formBasicPhone">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                            name='Phone'
                            type="text"
                            placeholder="Enter phone number"
                            value={formData.Phone}
                            onChange={handleChange} />
                    </Form.Group>

                    <br />

                    <Form.Group controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            name='username'
                            type="text"
                            placeholder="Username"
                            value={formData.username}
                            onChange={handleChange} />
                    </Form.Group>

                    <br />

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            name='password'
                            type="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange} />
                    </Form.Group>

                    <br />

                    <Form.Group controlId="formBasicSubjects">
                        <Form.Label>Subjects</Form.Label>
                        <Form.Control
                            name='subjects'
                            type="text"
                            placeholder="Enter subjects separated by comma"
                            value={formData.subjects}
                            onChange={handleChange} />
                    </Form.Group>

                    <br />

                    {!isStudent && (
                        <>
                            {/* Student-specific fields */}
                            <Form.Group controlId="formBasicCardNum">
                                <Form.Label>Card Details</Form.Label>
                                <Form.Control
                                    name='cardnum'
                                    type="text"
                                    placeholder="Card Number"
                                    value={formData.cardnum}
                                    onChange={handleChange} />
                                <br />
                            </Form.Group>
                            <Form.Group controlId='formBasicCVV' >
                                <Form.Control
                                    name='CVV'
                                    type="text"
                                    placeholder="CVV (3 digits on the back)"
                                    value={formData.CVV}
                                    onChange={handleChange} />
                                <br />
                            </Form.Group>

                            <Form.Group controlId='formBasicExpiry'>
                                <Form.Control
                                    name='expiry'
                                    type="text"
                                    placeholder="Expiry (MM/YY)"
                                    value={formData.expiry}
                                    onChange={handleChange} />
                                <br />
                            </Form.Group>
                        </>
                    )}
                    
                    <Button variant="primary" type="submit">
                        Register
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

export default RegisterModal;