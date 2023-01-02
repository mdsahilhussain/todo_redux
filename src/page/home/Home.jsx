import React from "react";
import "./home.css";
import { Input, TodoList } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  selectActiveTodos,
  selectTodos,
  selectCompletedTodos,
} from "../../features/todosSlice";

function Home() {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);
  const activeTodos = useSelector(selectActiveTodos);
  const completedTodos = useSelector(selectCompletedTodos);
  return (
    <div className="container">
      <div className="dasboard">
        <header>
          <h1>Todo list</h1>
          <section className="input">
            <Input />
          </section>
        </header>
        <div className="todo___container">
          <section>
            <TodoList name="Active tasks" list={activeTodos} />
          </section>
          <section>
            <TodoList name="Completed  tasks" list={completedTodos} />
          </section>
        </div>
      </div>
      <section className="allList">
        <TodoList name="all tasks" list={todos} />
      </section>
    </div>
  );
}

export default Home;
