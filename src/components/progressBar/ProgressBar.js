import React from 'react';
// import ProgressBarSection from '../progressBarSection/ProgressBarSection'

import './Styles.scss';

const ProgressBar = ({totalQuestions, numOfClicks}) => {    

    return (
        <div className="learningModule--progressBar" >
            <div className="learningModule--progressBar--section" style={{width:`${(numOfClicks)/(totalQuestions+1) * 100}%`}}></div>
        </div>
    )
}

export default ProgressBar;