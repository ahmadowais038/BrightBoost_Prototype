import React, { useState } from 'react';
import { ListGroup, Button, Modal } from 'react-bootstrap';

export default function Notifications() {
    const [notifications, setNotifications] = useState([
        // Example initial data
        { id: 1, message: "John Doe has registered for a session." },
        { id: 2, message: "Feedback received from Jane Smith." },
        // ... add more notification objects as needed
    ]);

    const [selectedNotification, setSelectedNotification] = useState(null);

    const openNotification = (notification) => {
        setSelectedNotification(notification);
    };

    const closeNotification = () => {
        setSelectedNotification(null);
    };

    return (
        <div className="notifications-section">
            <h3>Notifications</h3>

            <ListGroup>
                {notifications.map(notification => (
                    <ListGroup.Item key={notification.id} action onClick={() => openNotification(notification)}>
                        {notification.message}
                    </ListGroup.Item>
                ))}
            </ListGroup>

            <Modal show={selectedNotification !== null} onHide={closeNotification}>
                <Modal.Header closeButton>
                    <Modal.Title>Notification Detail</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedNotification?.message}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeNotification}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
