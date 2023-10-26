import React from "react";
import { Table } from "react-bootstrap";
import Sessions from "./Sessions";


const UpcomingSessions = () => {
    console.log("UpcomingSessions component rendering");
    return (
        <div className="tutorupcoming-sessions-container white-box">
            <div className="title">
                <p>Upcoming Sessions</p>
            </div>
            <div className="content">
                <Sessions />
                
            </div>
        </div>
    )
}

export default UpcomingSessions;