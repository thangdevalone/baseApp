import React from 'react';
import PropTypes from 'prop-types';
import Album from '../Album';
import './style.scss';
AlbumList.propTypes = {
    Albums:PropTypes.array,
};
AlbumList.defaultProps = {
    Albums:[],
};
function AlbumList(props) {
    const {Albums}=props;
    return (
        <ul className='AlbumList'>
            {Albums.map((item)=>{
                return  <li key={item.id}>
                            <Album Album={item} />
                        </li>
            })}
        </ul>
    );
}

export default AlbumList;