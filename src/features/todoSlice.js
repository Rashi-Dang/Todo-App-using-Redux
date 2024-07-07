// import {createSlice,nanoid} from '@reduxjs/toolkit'

// export const initialState ={
//     todo:[
//         {
//         id:1,
//         text:"Hello",   
//         }
//     ],
    
// }


// export const todoSlice = createSlice({
//     name : "todo" ,
//     initialState, 
//     reducers:{
//         addtodo: (state,action) =>{
//           const add = {
//             id:nanoid(),
//             text:action.payload,
//             }
//         state.todo.push(add)
//         },
        
//         deletetodo:(state,action) =>{
//            const del = {
//            id:action.payload,
//            }
//            state.todo = state.todo.filter((item) => item.id !== action.payload)
//            return state
//         },

       
//     }
// });

// export const {addtodo, deletetodo } = todoSlice.actions

// export default todoSlice.reducer

import { createSlice, nanoid } from '@reduxjs/toolkit';

export const initialState = {
  todo: [
    {
      id: 1,
      text: "Hello",
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addtodo: (state, action) => {
      const add = {
        id: nanoid(),
        text: action.payload,
      };
      state.todo.push(add);
    },

    deletetodo: (state, action) => {
      state.todo = state.todo.filter((item) => item.id !== action.payload);
      return state;
    },

    editTodo: (state, action) => {
      const { id, text } = action.payload;
      const todoIndex = state.todo.findIndex((todo) => todo.id === id);
      if (todoIndex !== -1) {
        state.todo[todoIndex].text = text;
      }
    },
  },
});

export const { addtodo, deletetodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;