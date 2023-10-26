import React, { useState } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';

export default function UserManagement() {
    const [users, setUsers] = useState([
        { id: 1, name: "John Doe", role: "Student", email: "john@example.com" },
        { id: 2, name: "Alice Smith", role: "Tutor", email: "alice@example.com" },
        // ... add more user objects as needed
    ]);

    const students = users.filter(user => user.role === "Student");
    const tutors = users.filter(user => user.role === "Tutor");

    const [showModal, setShowModal] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    const openModal = (user) => {
        setCurrentUser(user);
        setShowModal(true);
    };

    const closeModal = () => {
        setCurrentUser(null);
        setShowModal(false);
    };

    const handleSave = () => {
        // Logic to save the user (either add a new one or update an existing one)
        // You can send a POST or PUT request to your backend here to save the changes

        closeModal();
    };

    const renderTable = (data, title) => (
        <>
            <h4>{title}</h4>
            <Table bordered>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.role}</td>
                            <td>{user.email}</td>
                            <td>
                                <Button variant="primary" onClick={() => openModal(user)}>Edit</Button>
                                <Button variant="danger">Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );

    return (
        <div className="user-management-section">
            <h3>User Management</h3>
            
            {renderTable(students, "Students")}
            {renderTable(tutors, "Tutors")}

            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{currentUser ? 'Edit User' : 'Add New User'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" defaultValue={currentUser?.name} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Role</Form.Label>
                            <Form.Control as="select" defaultValue={currentUser?.role}>
                                <option>Student</option>
                                <option>Tutor</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" defaultValue={currentUser?.email} />
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
