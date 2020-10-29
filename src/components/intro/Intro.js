import React from 'react';
import Button from '../button/Button';

import './Styles.scss';

const Intro = ({gameStatus, setGameStatus, totalQuestions, numOfClicks, setNumOfClicks}) => {

    return (
        <div className="introContainer">
                <div className="introContainer--logo">
                    <img alt="logo" src="assets/logo.png" />            
                </div>
                <div className="introContainer--message">
                    {gameStatus.message}
                </div>
                <Button label="start" handleSubmit={()=> {
                    setGameStatus({loadIntro: false});
                    setNumOfClicks(numOfClicks + 1);
                    if(gameStatus.message === "Great Job! Play again.") {
                        setNumOfClicks(1);
                    }
                }} />
        </div>
    )
}

export default Intro
