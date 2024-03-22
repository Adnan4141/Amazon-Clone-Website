import { createSlice } from "@reduxjs/toolkit";
import uuid4 from "uuid4";

var getTodos = JSON.parse(localStorage.getItem('todos'));
console.log(getTodos)

const initialTodos = {
 

  todos:  getTodos?getTodos: [
    {
      id: uuid4(),
      category: "personal",
      todo: "Amazon Website Create",
    },
    {
      id: uuid4(),
      category: "Business",
      todo: "Daraz Website",
    },
  ],
    
 

 

};

export const todosSlice = createSlice({
  name: "todos",
  initialState: initialTodos,
  reducers: {
    showTodos: (state) => state,

    addTodos: (state, action) => {
      state.todos.push(action.payload);
    },

    deleteTodos: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    resetTodos: (state) => {
      state.todos = [];
    },
  },
});

export const { showTodos, addTodos, deleteTodos, resetTodos } =
  todosSlice.actions;
export default todosSlice.reducer;
