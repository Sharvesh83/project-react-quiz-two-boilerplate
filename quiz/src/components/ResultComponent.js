import React, { Component } from 'react';

class ResultComponent extends Component {
  render() {
    return (
      <div className='ResultComp'>
        <h1>Result</h1>
        <div className='ResultBox'>
          <h2>You need more practice!</h2>
          <h1>Your score is 20%</h1>
          <div className='scores'>
            <span>Total number of questions</span>
            <span>15</span>
          </div>
          <div className='scores'>
            <div>Number of attempted questions</div>
            <div>9</div>
          </div>
          <div className='scores'>
            <span>Number of correct answers</span>
            <span>3</span>
          </div>
          <div className='scores'>
            <span>Number of wrong answers</span>
            <span>6</span>
          </div>
        </div>
        <div className='controls'>
        <button>Play again</button>
        <button>Back to home</button>
        </div>
      </div>
    );
  }
}

export default ResultComponent;
