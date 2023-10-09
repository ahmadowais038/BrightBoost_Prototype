import React from "react";
import { Table } from "react-bootstrap";
import RegisterForSession from "./RegisterForSession";
import Sessions from "./Sessions";


const UpcomingSessions = () => {
    return (
        <div className="upcoming-sessions-container white-box">
            <div className="title">
                <p>Upcoming Sessions</p>
            </div>
            <div className="content">
                <Sessions />
                
                <div className="additional-information action">
                    <RegisterForSession />
                </div>
            </div>
        </div>
    )
}

export default UpcomingSessions