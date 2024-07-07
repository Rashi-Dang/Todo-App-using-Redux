import React from 'react'
import { addtodo } from '../features/todoSlice'
import { useDispatch } from 'react-redux'
import { useState } from 'react';

const Addtodo = () => {
  const dispatch = useDispatch();
  const [inputvalue,setinputvalue]=useState("")

    const addtodohandler=()=>{
      dispatch(addtodo(inputvalue));
    }

  return (
    <div className='mainsection'>
      <div className='undermainsection'>
      <h1 className='h1'>Things To do:</h1>

      <input type="text" className="input" placeholder='Write here...' onChange={(e)=>{setinputvalue(e.target.value)}} />
      <button onClick={ () => addtodohandler()} className='btn'><i class="fa-solid fa-plus"></i> New Task</button>
      <hr />
      </div>
    </div>
  )
}

export default Addtodo
