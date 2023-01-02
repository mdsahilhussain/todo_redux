import { createSlice } from "@reduxjs/toolkit";
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
      state.todos.push(action.payload);
      state.activeTodos.push(action.payload);
    },
    completedTodo: (state, action) => {
      state.todos.forEach((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
      });
      const completedTodos = state.todos.filter((todo) => todo.completed);
      state.completedTodos = completedTodos;
      const activeTodos = state.todos.filter((todo) => !todo.completed);
      state.activeTodos = activeTodos;
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

export const { addTodo, completedTodo, removeTodo } = todosSlice.actions;
export const selectTodos = (state) => state.todos.todos;
export const selectCompletedTodos = (state) => state.todos.completedTodos;
export const selectActiveTodos = (state) => state.todos.activeTodos;
export default todosSlice.reducer;
