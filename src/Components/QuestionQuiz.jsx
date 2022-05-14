import React from 'react'
import './QuestionQuiz.css'

const QuestionQuiz = (props) => {
    const { question, quizoptns } = props.quiz;
    
    return (
        <div className='quizSection'>
            <div className="questionSection">
                <b>{question}</b>
            </div>
            {quizoptns.map((quizOpt, index) => {
                return <button key={index} onClick={() => { props.handleAns(quizOpt.isAnswer, index) }} className="answerOpt" disabled={quizOpt.clicked || props.quiz.answered} style={{background: quizOpt.clicked?`${quizOpt.color}`:'none'}} ><b>{quizOpt.answer}</b></button>
            })}
        </div>
    )
}

export default QuestionQuiz