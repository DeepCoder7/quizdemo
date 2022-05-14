import React, { useEffect, useState } from 'react'
import './App.css';
import QuestionQuiz from './Components/QuestionQuiz';

const questions = [
  {
    question: "React.js is a free and open-source front-end .....",
    quizoptns: [
      { answer: "JavaScript library", isAnswer: true, clicked: false },
      { answer: "Bootstrap library", isAnswer: false, clicked: false },
      { answer: "CSS library", isAnswer: false, clicked: false },
      { answer: "None of the Above", isAnswer: false, clicked: false },
    ],
    answered: false
  },
  {
    question: "React.js was Initially released in....",
    quizoptns: [
      { answer: "April 29, 2013", isAnswer: false, clicked: false },
      { answer: "May 29, 2013", isAnswer: true, clicked: false },
      { answer: "June 29, 2013", isAnswer: false, clicked: false },
      { answer: "May 29, 2014", isAnswer: false, clicked: false },
    ],
    answered: false
  },
  {
    question: "What is Babel?",
    quizoptns: [
      { answer: "A JavaScript transpiler", isAnswer: false, clicked: false },
      { answer: "A JavaScript interpreter", isAnswer: false, clicked: false },
      { answer: "A JavaScript Compiler", isAnswer: true, clicked: false },
      { answer: "None Of the above", isAnswer: false, clicked: false },
    ],
    answered: false
  },
]

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAns, setCorrectAns] = useState(0);
  const [wrongAns, setWrongAns] = useState(0);
  const [timer, setTimer] = useState(30)

  const handleAns = (isAns, index) => {
    questions[currentQuestion].quizoptns[index].clicked = true;
    questions[currentQuestion].answered = true;
    if (isAns) {
      setCorrectAns(correctAns + 1);
    } else {
      setWrongAns(wrongAns + 1);
    }
  }

  const nextQuiz = () => {
    if (currentQuestion === questions.length - 2) {
      document.getElementById('nextQuiz').disabled = true;
    } else if (currentQuestion === 0) {
      document.getElementById('prevQuiz').disabled = false;
    }
    setCurrentQuestion(currentQuestion + 1);
  }

  const prevQuiz = () => {
    if (currentQuestion === questions.length - 1) {
      document.getElementById('nextQuiz').disabled = false;
    } else if (currentQuestion === 1) {
      document.getElementById('prevQuiz').disabled = true;
    }
    setCurrentQuestion(currentQuestion - 1);
  }

  useEffect(() => {
    document.getElementById('prevQuiz').disabled = true;
  }, [])

  return (
    <>
      <div className="container">
        <div className="headSection">
          <div className="answerBar">
            <div className="PercBar">
              <span className="total">
                <div className="perc" style={{ width: `${(correctAns / questions.length) * 100}%`, backgroundColor: 'green' }}></div>
              </span>
              <div className="totalCount">
                {correctAns}/{questions.length}
              </div>
            </div>
            <div className="PercBar">
              <span className="total">
                <div className="perc" style={{ width: `${(wrongAns / questions.length) * 100}%`, backgroundColor: 'red' }}></div>
              </span>
              <div className="totalCount">
                {wrongAns}/{questions.length}
              </div>
            </div>
          </div>
          <div className="TimerAndStatus">
            <div className="Timer">{timer}</div>
            <div className="showQuestionNumber">{currentQuestion + 1}/{questions.length}</div>
          </div>
        </div>

        <div className="lowerSection">
          <QuestionQuiz handleAns={handleAns} quiz={questions[currentQuestion]} />
          <div className="changeQuiz">
            <button className="btn" id='prevQuiz' onClick={prevQuiz}>&larr; Previous</button>
            <button className="btn" id='nextQuiz' onClick={nextQuiz}>Next &rarr;</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App