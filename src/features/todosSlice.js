import { createSlice, current } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
const initialState = {
  todos: [],
  completedTodos: [],
  activeTodos: [],
};
export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      let key = action.payload.id;
      localStorage.setItem(key, action.payload);
      state.todos.push(action.payload);
      state.activeTodos.push(action.payload);
    },
    completedTodo: (state, action) => {
      state.todos.forEach((todo) => {
        console.log("activeID", todo.id);
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
      });
    },
    updateTodos: (state, action) => {
      const exstingUser = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      console.log("exstingUser", current(exstingUser));
      if (exstingUser) {
        exstingUser.descr = action.payload.descr
        ;
      }
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      if (
        state.completedTodos.findIndex((todo) => todo.id === action.payload) !==
        -1
      ) {
        state.completedTodos = state.completedTodos.filter(
          (todo) => todo.id !== action.payload
        );
      }
      if (
        state.activeTodos.findIndex((todo) => todo.id === action.payload) !== -1
      ) {
        state.activeTodos = state.activeTodos.filter(
          (todo) => todo.id !== action.payload
        );
      }
    },
  },
});

export const { addTodo, completedTodo, removeTodo, updateTodos } =
  todosSlice.actions;
export const selectTodos = (state) => state.todos.todos;
export const selectCompletedTodos = (state) => state.todos.completedTodos;
export const selectActiveTodos = (state) => state.todos.activeTodos;
export default todosSlice.reducer;
