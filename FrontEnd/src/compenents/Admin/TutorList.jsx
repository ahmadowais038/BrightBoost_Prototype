// components/Admin/TutorList.js

import React from 'react';
import { Table, Button } from 'react-bootstrap';

function TutorList() {
    const tutors = [
        { id: 1, name: "Alice Johnson", email: "alice@example.com", subject: "Mathematics" },
        { id: 2, name: "Bob Smith", email: "bob@example.com", subject: "Physics" },
        // ... add more mock tutors as needed
    ];

    const handleApprove = (tutorId) => {
        // Here, handle the approval logic for tutors. 
        console.log(`Tutor with ID: ${tutorId} approved.`);
        // You can send an API request, update the state, etc.
    }

    const handleReject = (tutorId) => {
        // Here, handle the rejection logic for tutors.
        console.log(`Tutor with ID: ${tutorId} rejected.`);
        // You can send an API request, update the state, etc.
    }

    return (
        <div className="tutor-list-container">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Subject</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {tutors.map(tutor => (
                        <tr key={tutor.id}>
                            <td>{tutor.id}</td>
                            <td>{tutor.name}</td>
                            <td>{tutor.email}</td>
                            <td>{tutor.subject}</td>
                            <td>
                                <Button variant="success" onClick={() => handleApprove(tutor.id)}>Approve</Button>
                                {' '}
                                <Button variant="danger" onClick={() => handleReject(tutor.id)}>Reject</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default TutorList;
