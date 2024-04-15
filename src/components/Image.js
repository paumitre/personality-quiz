import React from 'react';
import PropTypes from 'prop-types';

function Image(props) {
    return (
        <div className="image">
            <img src={props.image}/>
        </div>
        
    );
}

Image.propTypes = {
    image: PropTypes.string.isRequired
};

export default Image;