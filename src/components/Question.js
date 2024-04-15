import React from 'react';
import PropTypes from 'prop-types';

function Question(props) {
    return (
        <div className="question">
            <h2 className="question">{props.content}</h2>
            {/* <img src={props.content}/> */}
        </div>
        
    );
}

Question.propTypes = {
    content: PropTypes.string.isRequired
};

export default Question;