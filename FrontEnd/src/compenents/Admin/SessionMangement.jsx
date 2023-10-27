import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import axios from "axios";

export default function SessionManagement() {
    const [sessions, setSessions] = useState([]);
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
        const response = await axios.post('http://localhost:5000/api/sessions', formData);
        const data = response.data;
        setMessage(data.message);

        if (response.status === 200) {
            console.log(data.message);
            setMessageType('success');
        }
    };

    const fetchSessions = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/getsesh');
            if (response.status === 200) {
                const sesh_data = response.data;
                const sessionArray = []; // Create an array to accumulate session data

                for (let i = 0; i < sesh_data.length; i++) {
                    sessionArray.push({
                        ID: sesh_data[i].ID,
                        Subject: sesh_data[i].Subject,
                        Teacher: sesh_data[i].Tutor,
                        Date: sesh_data[i].Date
                    });
                    console.log(sesh_data[i]);
                }

                setSessions(sessionArray); // Set the accumulated session data to the state
            }
        } catch (error) {
            console.error('Error fetching sessions:', error);
        }
    };


    useEffect(() => {
        fetchSessions();
    }, []);



    const [showModal, setShowModal] = useState(false);
    const [currentSession, setCurrentSession] = useState(null);

    const openModal = (session) => {
        setCurrentSession(session);
        setShowModal(true);
    };

    const closeModal = () => {
        setCurrentSession(null);
        setShowModal(false);
    };

    const handleSave = () => {
        // Logic to save the session (either add a new one or update an existing one)
        // For example, you can send a POST or PUT request to your backend here

        closeModal();
    };

    return (
        <div className="session-management-section">
            <h3>Session Management</h3>

            <Button onClick={() => openModal(null)}>Add New Session</Button>

            <Table bordered>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Subject</th>
                        <th>Teacher</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {sessions.map(session => (
                        <tr key={session.ID}>
                            <td>{session.ID}</td>
                            <td>{session.Subject}</td>
                            <td>{session.Teacher}</td>
                            <td>{session.Date}</td>
                            <td>
                                <Button variant="primary" onClick={() => openModal(session)}>Edit</Button>
                                <Button variant="danger">Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>


            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{currentSession ? 'Edit Session' : 'Add New Session'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Subject</Form.Label>
                            <Form.Control type="text" name='subject' defaultValue={currentSession?.subject} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Teacher</Form.Label>
                            <Form.Control type="text" name='teacher' defaultValue={currentSession?.teacher} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Date</Form.Label>
                            <Form.Control type="date" name='date' defaultValue={currentSession?.date} onChange={handleChange} />
                        </Form.Group>
                        <br />
                        {/* <Button variant="secondary" onClick={closeModal}>Close</Button> */}
                        <Button variant="primary" type='submit' >Save Changes</Button>
                        {/* onClick={handleSave} */}
                    </Form>
                    {message && messageType === 'success' && (
                        <p className='reg-success'>{message}</p>
                    )}
                </Modal.Body>
            </Modal>
        </div>
    );
}
