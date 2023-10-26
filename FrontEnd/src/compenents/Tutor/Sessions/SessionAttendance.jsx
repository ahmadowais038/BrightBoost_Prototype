import React, { useState } from "react";
import { Table, Button } from 'react-bootstrap';
import { RegisteredStudentsData } from '../../../mockData/RegisteredStudentsData';

const SessionAttendance = ({ sessionId }) => {
    // Fetch registered students for the session
    const registeredStudents = RegisteredStudentsData.filter(
        student => student.id === sessionId
    );

    // State to keep track of attendance status
    const [attendanceStatus, setAttendanceStatus] = useState(
        registeredStudents.reduce((acc, student) => {
            acc[student.studentid] = student.status;
            return acc;
        }, {})
    );

    // Toggle attendance status for a student
    const toggleAttendance = (studentId) => {
        setAttendanceStatus((prevStatus) => ({
            ...prevStatus,
            [studentId]: !prevStatus[studentId],
        }));
    };

    // Handle submit attendance
    const handleSubmitAttendance = () => {
        // Add your logic to submit attendance data
        console.log("Attendance Submitted:", attendanceStatus);
    };

    // Function to open the user's email client with registered students' emails
    const contactClass = () => {
        const emailAddresses = registeredStudents.map(student => student.studentemail).join(';');
        const subject = "Regarding Our Class";
        
        // Open the default email client with pre-filled information
        window.location.href = `mailto:?to=${emailAddresses}&subject=${encodeURIComponent(subject)}`;
    };

    return (
        <div>
            <Table bordered>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Student ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Attendance</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {/* Render registered students here */}
                    {registeredStudents.map((student, index) => (
                        <tr key={index}>
                            <td>{student.id}</td>
                            <td>{student.studentid}</td>
                            <td>{student.studentname}</td>
                            <td>{student.studentemail}</td>
                            <td>
                                <Button
                                    variant={attendanceStatus[student.studentid] ? 'success' : 'danger'}
                                    onClick={() => toggleAttendance(student.studentid)}
                                >
                                    {attendanceStatus[student.studentid] ? 'Present' : 'Absent'}
                                </Button>
                            </td>
                           
                        </tr>
                    ))}
                </tbody>
            </Table>

            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <Button variant="primary" onClick={handleSubmitAttendance}>
                    Submit Attendance
                </Button>
                <Button variant="primary" style={{ marginLeft: '10px' }} onClick={contactClass}>
                    Contact Class
                </Button>
            </div>
        </div>
    );
};

export default SessionAttendance; 