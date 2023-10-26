import React from "react";
import { RecentlyAnsweredQuestionsData } from "../../mockData/RecentlyAnsweredQuestionsData";


const RecentlyAnsweredQuestions = () => {
    const RenderQuestionsAnswer = RecentlyAnsweredQuestionsData.map((query, index) => (
        <div className="question-answer-container" key={index}>
            <p className="question">{query.question}</p>
    
        </div>
    ));

    return (
        <div className="recent-answered-container white-box">
          <div className="title">
            <p>Recently Answered Questions by You</p>
          </div>
          <div className="content">
            <ol>
              {RenderQuestionsAnswer.map((question, index) => (
                <li key={index}>{question}</li>
              ))}
            </ol>
          </div>
        </div>
      );
};

export default RecentlyAnsweredQuestions;