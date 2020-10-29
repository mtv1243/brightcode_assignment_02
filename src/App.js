import React from 'react';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Intro from './components/intro/Intro';
import LearningModule from './components/learningModule/LearningModule';
import ProgressBar from './components/progressBar/ProgressBar';

import './styles/App.scss';

function App() {
  const [gameStatus, setGameStatus] = React.useState({message: "Welcome", loadIntro: true});

    // set the quizData state initially to empty object
    const [quizData, setQuizData] = React.useState({});

    // set curentQuestionId state initially to 0
    const [currentQuestionId, setCurrentQuestionId] = React.useState(0);

    const [numOfClicks, setNumOfClicks] = React.useState(0);

  return (
    <div>
      <Navbar />
      
      <div id="mainWrapper">
        
        <ProgressBar totalQuestions={quizData.totalQuestions} numOfClicks={numOfClicks} />

        { gameStatus.loadIntro && 
          <Intro setGameStatus={setGameStatus} gameStatus={gameStatus} totalQuestions={quizData.totalQuestions} numOfClicks={numOfClicks} setNumOfClicks={setNumOfClicks} />
        }
        
        { !gameStatus.loadIntro &&
          <LearningModule gameStatus={gameStatus} setGameStatus={setGameStatus} quizData={quizData} setQuizData={setQuizData} currentQuestionId={currentQuestionId} setCurrentQuestionId={setCurrentQuestionId} numOfClicks={numOfClicks} setNumOfClicks={setNumOfClicks} />
        }
      </div>
      <Footer />
    </div>
  );
}

export default App;
