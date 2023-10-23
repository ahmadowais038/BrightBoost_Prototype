import React, { useState, useRef } from 'react';

const QuestionsDialog = ({ isOpen, selectedSession, selectedSessionQuestions, onClose }) => {
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const timerRef = useRef(null);

  const handleStartAnswering = () => {
    setStartTime(new Date());
    // Start a timer to update the display every second
    timerRef.current = setInterval(() => forceUpdate(), 1000);
  };

  const handleCompleteAnswering = () => {
    setEndTime(new Date());
    // Stop the timer
    clearInterval(timerRef.current);
  };

  const calculateTimeTaken = () => {
    if (startTime && endTime) {
      const timeDiff = endTime.getTime() - startTime.getTime();
      const seconds = Math.floor(timeDiff / 1000);
      return `${seconds} seconds`;
    }
    return '';
  };

  const forceUpdate = () => {
    // Dummy update to force re-render every second
    setEndTime(new Date());
  };

  const handleSubmit = () => {
    // Add logic for handling the submit button click
    console.log('Submit button clicked');
  };
  
  return (
    <div className="questions-dialog" style={{ display: isOpen ? 'block' : 'none' }}>
      <h3 className="questions-dialog-header">
        Questions - {selectedSession}
      </h3>
      <table>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Lesson</th>
            <th>Question</th>
            <th>Start Answering</th>
            <th>Complete Answering</th>
            <th>Time Spent for Answering</th>
          </tr>
        </thead>
        <tbody>
          {selectedSessionQuestions.map((questionData, index) => (
            <tr key={index}>
              <td>{questionData.subject}</td>
              <td>{questionData.lesson}</td>
              <td>{questionData.question}</td>
              <td>
                <button className="btn-primary" onClick={handleStartAnswering}>Start</button>
              </td>
              <td>
                <button className="btn-primary" onClick={handleCompleteAnswering}>Complete</button>
              </td>
              <td>{calculateTimeTaken()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="button-container">
        <button className="btn-primary" onClick={handleSubmit}>Submit</button>
        <button className="btn-primary" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default QuestionsDialog;