import React, { useState } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';

export default function SessionManagement() {
    const [sessions, setSessions] = useState([
        // Example initial data
        { id: 1, subject: "Math", teacher: "Mr. A", date: "2023-10-15" },
        // ... add more session objects as needed
    ]);

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
                        <tr key={session.id}>
                            <td>{session.id}</td>
                            <td>{session.subject}</td>
                            <td>{session.teacher}</td>
                            <td>{session.date}</td>
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
                    <Form>
                        <Form.Group>
                            <Form.Label>Subject</Form.Label>
                            <Form.Control type="text" defaultValue={currentSession?.subject} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Teacher</Form.Label>
                            <Form.Control type="text" defaultValue={currentSession?.teacher} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Date</Form.Label>
                            <Form.Control type="date" defaultValue={currentSession?.date} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>Close</Button>
                    <Button variant="primary" onClick={handleSave}>Save Changes</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
