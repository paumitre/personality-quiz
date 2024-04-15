import React from 'react';
import PropTypes from 'prop-types';

function Image(props) {
    return (
        <div className="imageContainer">
            <img className = "image" src={props.image}/>
        </div>
        
    );
}

Image.propTypes = {
    image: PropTypes.string.isRequired
};

export default Image;