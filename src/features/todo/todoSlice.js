import { createSlice } from "@reduxjs/toolkit";

// const initialState = [];

const todoSlice = createSlice({
  name: "todos",
  initailState: {
    todos: [],
  },
  reducers: {
    //here we will write our reducer
    //Adding todos
    addTodos: (state, action) => {
      state.todos.push(action.payload);
      return state;
    },
    //remove todos
    removeTodos: (state, action) => {
      return state.todos.filter((item) => item.id !== action.payload);
    },
    //update todos
    updateTodos: (state, action) => {
      return state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            item: action.payload.item,
          };
        }
        return todo;
      });
    },
    //completed
    completeTodos: (state, action) => {
      return state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: true,
          };
        }
        return todo;
      });
    },
  },
});

export const { addTodos, removeTodos, updateTodos, completeTodos } =
  todoSlice.actions;
export const reducer = todoSlice.reducer;
