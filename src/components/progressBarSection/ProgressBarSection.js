import React from 'react';

const ProgressBarSection = (props) => {

    console.log(props.totalSections)

    const isActive = () => {
        if( props.numOfClicks >= props.index) {
            return "--active"
        } else {
            return ""
        }
    }

    return (
    <span className={"learningModule--progressBar--progressBarSection" + isActive()}>{props.index}</span>
    )
}

export default ProgressBarSection