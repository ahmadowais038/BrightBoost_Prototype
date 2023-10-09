import { RecentAskedQuestionsData } from "../../mockData/RecentAskedQuestionsData";
import React from "react";


const RecentAskedQuestions = () => {
    const RenderQuestionsAnswer = RecentAskedQuestionsData.map((query, index) => {
        return <div className="question-answer-container" key={index}><p className="question">{query.question}</p><p className="answer">{query.answer}</p></div>
    })
    return (
        <div className="recent-asked-container white-box">
            <div className="title">
                <p>Recently Asked Questions by You</p>
            </div>
            <div className="content">
                {RenderQuestionsAnswer}
            </div>
        </div>
    )
}

export default RecentAskedQuestions