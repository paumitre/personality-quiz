import React from 'react';
import PropTypes from 'prop-types';
import Question from '../components/Question';
import QuestionCount from '../components/QuestionCount';
import AnswerOption from '../components/AnswerOption';
import Image from '../components/Image';
import quillted from '../quillted.svg';

function Quiz(props) {
  function renderAnswerOptions(key) {
    return (
      <AnswerOption
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answer={props.answer}
        questionId={props.questionId}
        onAnswerSelected={props.onAnswerSelected}
      />
    );
  }
  
  return (
    <div className='container'>
    <div className='containercontainer'>
      <div className="quiz">
        <QuestionCount
          counter={props.questionId}
          total={props.questionTotal}
        />
        <div className="questionAndImage">
        <Image image={props.image}/>
        <Question content={props.question}/> 
        </div>
        <ul className="answerOptions">
          {props.answerOptions.map(renderAnswerOptions)}
        </ul>
      </div>
      </div>
      </div>
  );
}

Quiz.propTypes = {
  image: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  answerOptions: PropTypes.array.isRequired,
  counter: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  questionId: PropTypes.number.isRequired,
  questionTotal: PropTypes.number.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default Quiz;