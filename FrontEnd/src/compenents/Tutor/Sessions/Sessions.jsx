import { TutorSessionData } from "../../../mockData/TutorSessionData";
import React, { useState } from "react";
import { Table, Button, Modal } from 'react-bootstrap';
import { Button as BootstrapButton } from "react-bootstrap";
import SessionAttendance from "./SessionAttendance";

const Sessions = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedSessionId, setSelectedSessionId] = useState(null);

    const handleOpenModal = (sessionId) => {
        // Fetch and set the registered students for the selected session
        // Example: setRegisteredSession(fetchRegisteredStudents(sessionId));
        setSelectedSessionId(sessionId);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const TableHeader = () => {
        return (
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Subject</th>
                    <th>Date</th>
                    <th>Action</th>
                </tr>
            </thead>
        );
    };

    const TableBody = () => {
        return (
            <tbody>
                {TutorSessionData.map((value, index) => {
                    return (
                        <tr key={index}>
                            <td>{value.id}</td>
                            <td>{value.title}</td>
                            <td>{value.date}</td>
                            <td>
                                <BootstrapButton
                                    variant="primary"
                                    onClick={() => handleOpenModal(value.id)}
                                >
                                    View Participants
                                </BootstrapButton>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        );
    };

    return (
        <div className="tutorsession-table-container">
            <Table bordered>
                <TableHeader />
                <TableBody />
            </Table>

            <Modal
                show={showModal}
                onHide={handleCloseModal}
                dialogClassName="custom-modal" // Apply the custom-modal class to the modal
>
                <Modal.Header closeButton>
                    <Modal.Title style={{ fontSize: '1rem' }}>
                        Students Registered For the Session {selectedSessionId}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="custom-table"> {/* Apply the custom-table class to the table */}
                        <SessionAttendance sessionId={selectedSessionId} />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                         Close
                    </Button>
                </Modal.Footer>
            </Modal>        
        </div>
    );
};

export default Sessions;