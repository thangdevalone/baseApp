import React, { useState } from 'react';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';


function ToDoFeature() {
    const initToDo=[
        {
            id:1,
            title:"Eat",
            status:"New"
        },
        {
            id:2,
            title:"Sleep",
            status:"Completed"
        },
        {
            id:3,
            title:"Code",
            status:"New"
        }
    ]
    const [toDo,setToDo]=useState(initToDo);
    const [filterToDo,setFilterToDo]=useState('All');
    function handleToDo(idx){
        const newToDo=[...toDo];
        newToDo[idx]={
            ...newToDo[idx],
            status:(newToDo[idx]).status==='Completed'?'New':'Completed'
        }
        setToDo(newToDo)
    }
    function handleShowAll(){
        setFilterToDo('All');
    }
    function handleShowCompleted(){
        setFilterToDo('Completed');
    }
    function handleShowNew(){
        setFilterToDo('New');
    }
    const listFilter=toDo.filter((item)=>filterToDo ==='All'|| filterToDo ===item.status)
    function handleToDoFormSubmit(values){
        const newToDo=[...toDo];
        const data={
            ...values,
            id:toDo.length+1,
            status:"New"
        }
        newToDo.push(data)
        setToDo(newToDo)
    }
    return (
        <div>
            <div>
            <h3>What to do</h3>
                <ToDoForm onSubmit={handleToDoFormSubmit}/>
            </div>
             <div>
                <h3>TO DO LIST</h3>
                <ToDoList toDo={listFilter} onClickToDo={handleToDo} />
             </div>
               
                
            <div>
            <button onClick={handleShowAll}>Show All</button>
            <button onClick={handleShowCompleted}>Show Completed</button>
           
            <button onClick={handleShowNew}>Show New</button>
            </div>
        </div>
    );
}

export default ToDoFeature;