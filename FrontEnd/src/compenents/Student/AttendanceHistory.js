import React from "react";



const AttendanceHistory = () => {
    const data01 = [
        { name: 'Absences', value: 30 },
        { name: 'Attendance', value: 70 },
    ];

    return (
        <div className="attendance-history white-box">
            <div className="title">
                <p>Attendance History</p>
            </div>
            <div className="content">
                <div className="chart">
                    
                </div>
                <div className="additional-information">
                    <p>Last Recorded Attendance</p>
                    <p className="date">Oct 02, 2023</p>
                </div>
            </div>
        </div>
    )
}

export default AttendanceHistory