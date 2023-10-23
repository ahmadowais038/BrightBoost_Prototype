import React, { useState, useRef } from 'react';
import { StudentQuestionsData } from './../../mockData/StudentQuestionsData';
import QuestionsDialog from './QuestionsDialog';

const QuestionsToBeAnswered = () => {
  const [selectedSession, setSelectedSession] = useState('');
  const [dialogVisible, setDialogVisible] = useState(false);
  const [allQuestionsDialogVisible, setAllQuestionsDialogVisible] = useState(false);
  const [selectedSessionQuestions, setSelectedSessionQuestions] = useState([]);
  const [allQuestions, setAllQuestions] = useState(StudentQuestionsData);

  const sessions = StudentQuestionsData.map(data => data.id);

  const handleSessionChange = (event) => {
    setSelectedSession(event.target.value);
  };

  const handleViewQuestions = () => {
    const selectedSessionData = StudentQuestionsData.find(data => data.id === selectedSession);

    if (selectedSessionData) {
      setSelectedSessionQuestions([selectedSessionData]);
      setDialogVisible(true);
    } else {
      console.error(`No questions found for session: ${selectedSession}`);
    }
  };

  const handleSeeAllQuestions = () => {
    setAllQuestionsDialogVisible(true);
  };

  const closeDialog = () => {
    setDialogVisible(false);
    setSelectedSession('');
    setSelectedSessionQuestions([]);
  };

  const closeAllQuestionsDialog = () => {
    setAllQuestionsDialogVisible(false);
  };

  return (
    <div className="questionstobeanswered-container white-box">
      <div className="header">
        <h3>Questions to be Answered</h3>
      </div>
      <div className="content questionstobeanswered-content">
        <div className="centered-container">
          <button className="btn-primary" onClick={handleSeeAllQuestions}>View All Questions</button>
        </div>
        <div className="session-selection-container">
          <label>Select a Session:</label>
          <select className="select-session" value={selectedSession} onChange={handleSessionChange}>
            <option value="">Select Session</option>
            {sessions.map(session => (
              <option key={session} value={session}>{session}</option>
            ))}
          </select>
          <button className="btn-primary" onClick={handleViewQuestions}>View Session Questions</button>
        </div>
      </div>

      <QuestionsDialog
        isOpen={dialogVisible}
        selectedSession={selectedSession}
        selectedSessionQuestions={selectedSessionQuestions}
        onClose={closeDialog}
      />

      <QuestionsDialog
        isOpen={allQuestionsDialogVisible}
        selectedSession="All Sessions"
        selectedSessionQuestions={allQuestions}
        onClose={closeAllQuestionsDialog}
      />
    </div>
  );
};

export default QuestionsToBeAnswered;