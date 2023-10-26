import React, { useState } from 'react';
import { StudentQuestionsData } from '../../../mockData/StudentQuestionsData';
import QuestionsDialog from './QuestionsDialog';

const QuestionsToBeAnswered = () => {
  const [selectedSession, setSelectedSession] = useState('');
  const [dialogVisible, setDialogVisible] = useState(false);
  const [selectedSessionQuestions, setSelectedSessionQuestions] = useState([]);

  const uniqueSessions = [...new Set(StudentQuestionsData.map(data => data.id))];

  const handleSessionChange = (event) => {
    setSelectedSession(event.target.value);
  };

  const handleViewQuestions = () => {
    const questionsForSelectedSession = StudentQuestionsData.filter(data => data.id === selectedSession);

    if (questionsForSelectedSession.length > 0) {
      setSelectedSessionQuestions(questionsForSelectedSession);
      setDialogVisible(true);
    } else {
      console.error(`No questions found for session: ${selectedSession}`);
    }
  };

  const closeDialog = () => {
    setDialogVisible(false);
    setSelectedSession('');
    setSelectedSessionQuestions([]);
  };

  return (
    <div className="questionstobeanswered-container white-box">
      <div className="title">
        <p>Questions to be Answered</p>
      </div>
      <div className="content questionstobeanswered-content">
        <div className="session-selection-container">
          <label>Select a Session:</label>
          <select className="select-session" value={selectedSession} onChange={handleSessionChange}>
            <option value="">Select Session</option>
            {uniqueSessions.map(session => (
              <option key={session} value={session}>
                {session}
              </option>
            ))}
          </select>
          <button className="btn-primary" onClick={handleViewQuestions}>
            View Session Questions
          </button>
        </div>
      </div>

      <QuestionsDialog
        isOpen={dialogVisible}
        selectedSession={selectedSession}
        selectedSessionQuestions={selectedSessionQuestions}
        onClose={closeDialog}
      />
    </div>
  );
};

export default QuestionsToBeAnswered;