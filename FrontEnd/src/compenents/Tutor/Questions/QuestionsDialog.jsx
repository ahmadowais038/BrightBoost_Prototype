import React, { useState, useEffect } from 'react';

const QuestionsDialog = ({ isOpen, selectedSession, selectedSessionQuestions, onClose }) => {
  const [timers, setTimers] = useState([]);
  const timerInterval = 1000; // Timer update interval (1 second)

  const startTimer = (questionId) => {
    setTimers((prevTimers) => [...prevTimers, { id: questionId, start: new Date() }]);
  };

  const stopTimer = (questionId) => {
    setTimers((prevTimers) => {
      const updatedTimers = prevTimers.map((timer) => {
        if (timer.id === questionId) {
          return { ...timer, end: new Date() };
        }
        return timer;
      });
      return updatedTimers;
    });
  };

  const resetTimer = (questionId) => {
    setTimers((prevTimers) => {
      return prevTimers.filter((timer) => timer.id !== questionId);
    });
  };

  const getElapsedTime = (questionId) => {
    const timer = timers.find((t) => t.id === questionId);
    if (timer && timer.start) {
      if (timer.end) {
        const timeDiff = timer.end.getTime() - timer.start.getTime();
        const seconds = Math.floor(timeDiff / 1000);
        return `${seconds} seconds`;
      } else {
        return 'Time Calculating...';
      }
    }
    return 'Not started';
  };

  useEffect(() => {
    // Clear timers when the component unmounts
    return () => {
      setTimers([]);
    };
  }, []);

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
            <th>Question ID</th>
            <th>Subject</th>
            <th>Lesson</th>
            <th>Question</th>
            <th>Start Answering</th>
            <th>Complete Answering</th>
            <th>Time Spent for Answering</th>
            <th>Reset Timer</th>
          </tr>
        </thead>
        <tbody>
          {selectedSessionQuestions.map((questionData) => (
            <tr key={questionData.questionid}>
              <td>{questionData.questionid}</td>
              <td>{questionData.subject}</td>
              <td>{questionData.lesson}</td>
              <td>{questionData.question}</td>
              <td>
                <button
                  className="btn-primary"
                  onClick={() => startTimer(questionData.questionid)}
                  disabled={timers.some((timer) => timer.id === questionData.questionid)}
                >
                  Start
                </button>
              </td>
              <td>
                <button
                  className="btn-primary"
                  onClick={() => stopTimer(questionData.questionid)}
                  disabled={!timers.some((timer) => timer.id === questionData.questionid)}
                >
                  Complete
                </button>
              </td>
              <td>{getElapsedTime(questionData.questionid)}</td>
              <td>
                <button
                  className="btn-primary"
                  onClick={() => resetTimer(questionData.questionid)}
                  disabled={!timers.some((timer) => timer.id === questionData.questionid)}
                >
                  Reset
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="button-container">
        <button className="btn-primary" onClick={handleSubmit}>
          Submit
        </button>
        <button className="btn-primary" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default QuestionsDialog;