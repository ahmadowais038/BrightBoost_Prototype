import React, { useState } from 'react';
import { Card, Button, Modal, ListGroup, ListGroupItem } from 'react-bootstrap';



export default function ReportAndAnalysis() {
    const [showDetail, setShowDetail] = useState(false);
    const [selectedReport, setSelectedReport] = useState(null);

    // Sample data
    const attendanceStats = {
        totalSessions: 100,
        averageAttendance: 80,  // in percentage
        lowestAttendance: 70,   // in percentage
        highestAttendance: 90   // in percentage
    };

    const subjectAnalysis = {
        'Algebra': 120,
        'Calculus': 80,
        'Geometry': 40,
        // ... other subjects
    };

    const viewReportDetail = (type) => {
        setSelectedReport(type);
        setShowDetail(true);
    };

    const closeDetail = () => {
        setSelectedReport(null);
        setShowDetail(false);
    };

    return (
        <div className="report-analysis-section">
            <h3>Reports & Analysis</h3>
            <Card style={{ marginBottom: '1rem' }}>
                <Card.Header>Attendance Analysis</Card.Header>
                <Card.Body>
                    <Card.Text>
                        Insights into student attendance for sessions.
                    </Card.Text>
                    <Button variant="primary" onClick={() => viewReportDetail('attendance')}>View Details</Button>
                </Card.Body>
            </Card>

            <Card style={{ marginBottom: '1rem' }}>
                <Card.Header>Subject Analysis</Card.Header>
                <Card.Body>
                    <Card.Text>
                        Analysis on which subjects have the most questions.
                    </Card.Text>
                    <Button variant="primary" onClick={() => viewReportDetail('subject')}>View Details</Button>
                </Card.Body>
            </Card>

            <Modal show={showDetail} onHide={closeDetail}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {selectedReport === 'attendance' ? 'Attendance Analysis' : 'Subject Analysis'}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedReport === 'attendance' ? (
                        <ListGroup>
                            <ListGroupItem>Total Sessions: {attendanceStats.totalSessions}</ListGroupItem>
                            <ListGroupItem>Average Attendance: {attendanceStats.averageAttendance}%</ListGroupItem>
                            <ListGroupItem>Lowest Attendance: {attendanceStats.lowestAttendance}%</ListGroupItem>
                            <ListGroupItem>Highest Attendance: {attendanceStats.highestAttendance}%</ListGroupItem>
                        </ListGroup>
                    ) : (
                        <ListGroup>
                            {Object.entries(subjectAnalysis).map(([subject, count]) => (
                                <ListGroupItem key={subject}>{subject}: {count} questions</ListGroupItem>
                            ))}
                        </ListGroup>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeDetail}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
