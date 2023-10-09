import React from "react";
import { Button } from "react-bootstrap";
import SubjectQuestion from "./SubjectQuestion";


const AskAQuestion = () => {
    return (
        <div className="ask-a-question-container white-box">
            <h3>Raise questions</h3>
            <SubjectQuestion />
        </div>
    )
}

export default AskAQuestion