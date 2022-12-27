import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style.scss';
ToDoList.propTypes = {
    toDo: PropTypes.array,
    onClickToDo:PropTypes.func,
};
ToDoList.defaultProps={
    toDo:[],
    onClickToDo: null,
}

function ToDoList(props) {
    const {toDo,onClickToDo}=props;
    function handleOnClick(idx){
        if(!onClickToDo) return;
        onClickToDo(idx);
    }
    return (
        <ul className='todo-list'>
           {toDo.map((item,idx)=>{
                return <li 
                        className={classnames({
                            'todo-item':true,
                            completed:item.status==='Completed',
                            new:item.status==='New'
                        })}
                        key={item.id}
                        onClick={()=>handleOnClick(idx)}
                        >
                            {item.title}
                        </li>
           })} 
        </ul>
    );
}

export default ToDoList;