import React, { Component } from 'react';
import questions from '../resources/quizQuestion.json'

class QuizComponent extends Component {
    state = {
      currentQuestionIndex: 0,
    };
  
    getCurrentQuestion() {
      return questions[this.state.currentQuestionIndex];
    }
  
    handlePreviousClick = () => {
      if (this.state.currentQuestionIndex > 0) {
        this.setState((prevState) => ({
          currentQuestionIndex: prevState.currentQuestionIndex - 1,
        }));
      }
    };
  
    handleNextClick = () => {
      if (this.state.currentQuestionIndex < questions.length - 1) {
        this.setState((prevState) => ({
          currentQuestionIndex: prevState.currentQuestionIndex + 1,
        }));
      }
    };
  
    handleQuitClick = () => {
      const quitConfirmation = window.confirm('Are you sure you want to quit?');
      if (quitConfirmation) {
      }
    };
  
    render() {
      const currentQuestion = this.getCurrentQuestion();
  
      return (
        <div className='QuizComp'>
          <div className='QuizBox'>
            <div className='QuestionContainer'>
              <h2>Question</h2>
              <span>{`${this.state.currentQuestionIndex + 1} of ${questions.length}`}</span>
              <h3>{currentQuestion.question}</h3>
            </div>
            <div className='OptionsContainer'>
              <div className='OptionsRow'>
                <div className='Option'>{currentQuestion.optionA}</div>
                <div className='Option'>{currentQuestion.optionB}</div>
              </div>
              <div className='OptionsRow'>
                <div className='Option'>{currentQuestion.optionC}</div>
                <div className='Option'>{currentQuestion.optionD}</div>
              </div>
            </div>
            <div className='ButtonContainer'>
              <button className='PreviousButton' onClick={this.handlePreviousClick}>
                Previous
              </button>
              <button className='NextButton' onClick={this.handleNextClick}>
                Next
              </button>
              <button className='QuitButton' onClick={this.handleQuitClick}>
                Quit
              </button>
            </div>
          </div>
        </div>
      );
    }
  }
  
export default QuizComponent;
