// compenents/Admin/TutorAvailabilityTable.jsx

import React from 'react';
import { Table, Button } from 'react-bootstrap';


const TutorAvailabilityTable = ({ tutorsData }) => {
    return (
        <div className="tutor-availability-table">
            <h3>Tutor Availability</h3>
            <table>
                <thead>
                    <tr>
                        <th>Tutor Name</th>
                        <th>Date</th>
                        <th>From</th>
                        <th>To</th>
                    </tr>
                </thead>
                <tbody>
                    {tutorsData.map((tutor, index) => (
                        <tr key={index}>
                            <td>{tutor.name}</td>
                            <td>{tutor.date}</td>
                            <td>{tutor.startTime}</td>
                            <td>{tutor.endTime}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TutorAvailabilityTable;
