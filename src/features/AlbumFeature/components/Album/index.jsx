import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
Album.propTypes = {
    Album: PropTypes.object,
};
Album.defaultProps={
    Album: {}
}
function Album(props) {
    const {Album}=props;
    return (
        <div className='Album'>
            <img className='Album__thumbnail' src={Album.thumbnailUrl} alt="Album" />
            <h4 className='Album__tiltle'>{Album.title}</h4>
        </div>
    );
}

export default Album;