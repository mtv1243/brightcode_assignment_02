import React from 'react';
import SelectionBox from '../selectionBox/SelectionBox';
import Button from '../button/Button';


import './Styles.scss';

const LearningModule = ({gameStatus, setGameStatus, quizData, setQuizData, currentQuestionId, setCurrentQuestionId, numOfClicks, setNumOfClicks}) => {

  // if the questions have been fetched this is the question with ID currentQuestionID
  let currentQuestion = quizData.questionArr ? quizData.questionArr[currentQuestionId]: {};
  React.useEffect(()=>{
    getQuizData();
  },[]);

  // fetch the questions from the server, store array in state
  const getQuizData=()=>{
    fetch("http://localhost:8080/problems")
      .then((res)=>{
        return res.json();
      }).then((data)=>{
        setQuizData(data);
      }).catch((err)=>{
        console.log(err);
      });
  }

  // runs when click the submit button
  const handleSubmit=()=> {
    setNumOfClicks(numOfClicks + 1);
    if(gameStatus.loadIntro) {
      setNumOfClicks(0);
    }

    // is this the last question in the list?
    if(currentQuestionId < quizData.totalQuestions-1){
      // changes the state, advances to next question
      setCurrentQuestionId(currentQuestionId+1);
    } else {
      // reset the state question ID to 0
      setCurrentQuestionId(0);
      // show the intro
      setGameStatus({message: "Great Job! Play again.", loadIntro: true});
    }
  }

  let possibleAnswers = [];
  // do if JSON data has been fetched
  if(currentQuestion.possibleAnswers){
    // create an element for each answer in the array
    possibleAnswers = currentQuestion.possibleAnswers.map((answer, index) => {
      return <SelectionBox id={index} key={index} answer={answer} />
    })
  }


  return (
    <div className="learningModule">
      
      { currentQuestion.title &&
        <>
          <div className="learningModule--header">
            <div className="learningModule--title">
              { currentQuestion.title }
            </div>
            <div className="learningModule--subHeader">
              { currentQuestion.additionalInfo }
            </div>
          </div>

          <div className="learningModule--answerArea">
            <div className="learningModule--selections">
              { possibleAnswers }
            </div>
            <div className="learningModule--submitButtonContainer">
              <Button label="Submit" handleSubmit={ handleSubmit } />
            </div>
          </div>
        </>
      }
    </div>
  )
}

export default LearningModule;
