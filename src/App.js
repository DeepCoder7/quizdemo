import React, { useEffect, useState } from 'react'
import './App.css';
import QuestionQuiz from './Components/QuestionQuiz';

const questions = [
  {
    question: "What's Your Name ?",
    quizoptns: [
      { answer: "Pradeep", isAnswer: true, clicked: false },
      { answer: "Sunil", isAnswer: false, clicked: false },
      { answer: "Anil", isAnswer: false, clicked: false },
      { answer: "Aakash", isAnswer: false, clicked: false },
    ],
    answered: false
  },
  {
    question: "What's Your Age ?",
    quizoptns: [
      { answer: 20, isAnswer: true, clicked: false },
      { answer: 40, isAnswer: false, clicked: false },
      { answer: 18, isAnswer: false, clicked: false },
      { answer: 23, isAnswer: false, clicked: false },
    ],
    answered: false
  },
  {
    question: "What's Your Best Friend Name ?",
    quizoptns: [
      { answer: "Sonu", isAnswer: false, clicked: false },
      { answer: "Anil", isAnswer: false, clicked: false },
      { answer: "Deepak", isAnswer: true, clicked: false },
      { answer: "Aakash", isAnswer: false, clicked: false },
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