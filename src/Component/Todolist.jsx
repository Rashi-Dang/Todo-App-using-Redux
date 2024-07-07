// import React from 'react'
// import {useSelector,useDispatch} from 'react-redux'
// import { deletetodo } from '../features/todoSlice';

// const Todolist = () => {
//     const todos = useSelector((state) => state.todo);
//     console.log(todos.todo);
//     const list=todos.todo;
//     const dispatch = useDispatch();

//     const delhandler = (id)=>{
//         dispatch(deletetodo(id))
      
//     }


//   return (
//     <>
//         <ul>
//     {

//         list.map((todo) => {
//             return (
//                 <li key={todo.id}>{todo.text} <button onClick={()=>delhandler(todo.id)}>Delete</button></li>
//             )
//         })
//     }
//         </ul>
    
//     </>
//   )
// }
// export default Todolist

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deletetodo, editTodo } from '../features/todoSlice';

const Todolist = () => {
  const todos = useSelector((state) => state.todo);
  console.log(todos.todo);
  const list = todos.todo;
  const dispatch = useDispatch();

  const [editing, setEditing] = useState(null);
  const [newText, setNewText] = useState('');

  const delhandler = (id) => {
    dispatch(deletetodo(id));
  };

  const editHandler = (id) => {
    setEditing(id);
  };

  const saveHandler = (id) => {
    dispatch(editTodo({ id, text: newText }));
    setEditing(null);
    setNewText('');
  };

  return (
    <>
    <div className="mainsection">
    <div className='undermainsection'>
      <ul>
        {list.map((todo) => {
          return (
            <li key={todo.id} className='todo-item'>
              {editing === todo.id ? (
                <input className='input-text'
                  type="text"
                  value={newText}
                  onChange={(e) => setNewText(e.target.value)}
                  placeholder={todo.text}
                />
            ) : (
                <span className='todo-text'>{todo.text}</span>
            )}
              <button className='del' onClick={() => delhandler(todo.id)}><i class="fa-solid fa-delete-left"></i></button>
              {editing === todo.id ? (
                  <button className='save' onClick={() => saveHandler(todo.id)}><i class="fa-solid fa-floppy-disk"></i></button>
                ) : (
                    <button className='edit' onClick={() => editHandler(todo.id)}><i class="fa-solid fa-pen-to-square"></i></button>
                )}
               
            </li>
          );
        })}
      </ul>
      </div>
      </div>
    </>
  );
};

export default Todolist;