import React, { useState } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';

export default function UserManagement() {
    const [users, setUsers] = useState([
        // Example initial data
        { id: 1, name: "John Doe", role: "Student", email: "john@example.com" },
        // ... add more user objects as needed
    ]);

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

    return (
        <div className="user-management-section">
            <h3>User Management</h3>
            
            <Button onClick={() => openModal(null)}>Add New User</Button>
            
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
                    {users.map(user => (
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
                                <option>Teacher</option>
                                <option>Admin</option>
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
