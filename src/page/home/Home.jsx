import React, { useState } from "react";
import "./home.css";
import { Input, TodoList } from "../../components";
import { useSelector } from "react-redux";
import { selectTodos } from "../../features/todosSlice";

function Home() {
  const todos = useSelector(selectTodos);
  const activeTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);
  const [active_one, setActive_one] = useState(true);
  const [active_two, setActive_two] = useState(false);
  const [active_three, setActive_three] = useState(false);

  const active = (num) => {
    switch (num) {
      case 1:
        return (
          setActive_one(true), setActive_two(false), setActive_three(false)
        );
      case 2:
        return (
          setActive_one(false), setActive_two(true), setActive_three(false)
        );

      case 3:
        return (
          setActive_one(false), setActive_two(false), setActive_three(true)
        );
      default:
        return;
    }
  };
  return (
    <div className="container">
      <div className="dasboard">
        <header>
          <h1>Todo list</h1>
          <section className="input">
            <Input />
          </section>
        </header>
        <div className="moble___navelink">
          <ul className="moble___navelink--list">
            <li
              onClick={(e) => {
                active(1);
              }}
              style={active_one ? { color: "#33e1ed" } : { color: "#ffffff" }}
            >
              <h5>all</h5>
            </li>
            <li
              onClick={(e) => {
                active(2);
              }}
              style={active_two ? { color: "#33e1ed" } : { color: "#ffffff" }}
            >
              <h5>Active</h5>
            </li>
            <li
              onClick={(e) => {
                active(3);
              }}
              style={active_three ? { color: "#33e1ed" } : { color: "#ffffff" }}
            >
              <h5>Completed</h5>
            </li>
          </ul>
          <section
            style={active_one ? { display: "block" } : { display: "none" }}
          >
            <TodoList name="all tasks" list={todos} />
          </section>
          <section
            style={active_three ? { display: "block" } : { display: "none" }}
          >
            <TodoList name="Completed  tasks" list={completedTodos} />
          </section>
          <section
            style={active_two ? { display: "block" } : { display: "none" }}
          >
            <TodoList name="Active tasks" list={activeTodos} />
          </section>
        </div>
        {/* desktop  */}
        <div className="desktop___todo">
          <div className="todo___container">
            <section>
              <TodoList name="Active tasks" list={activeTodos} />
            </section>
            <section>
              <TodoList name="Completed  tasks" list={completedTodos} />
            </section>
          </div>
        </div>
      </div>
      <section className="allList">
        <TodoList name="all tasks" list={todos} />
      </section>
    </div>
  );
}

export default Home;
