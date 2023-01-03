import React, { useState, useRef } from "react";
import { Button } from "../index";
import "./styleList.css";
import { useDispatch } from "react-redux";
import {
  completedTodo,
  removeTodo,
  updateTodos,
} from "../../features/todosSlice";
function TodoList(props) {
  const inputRef = useRef();
  const [isupdate, setIsupdate] = useState(null);
  const dispatch = useDispatch();

  const completedHandler = (id) => {
    dispatch(completedTodo(id));
  };

  const updatedHandler = (id) => {
    setIsupdate(id);
  };

  const removeHandler = (id) => {
    dispatch(removeTodo(id));
  };
  return (
    <div>
      <h4>{props.name}</h4>
      <div className="todo__list">
        <ul>
          {props.list?.map((item, index) => (
            <li key={index} className="todo___card">
              {isupdate === item.id ? (
                <input ref={inputRef} type="text" placeholder={item?.descr} />
              ) : (
                <h5>{item?.descr}</h5>
              )}
              <div className="todo___card--bottom">
                <p>{item?.time}</p>
                <ul className="todo___card--icon">
                  <li onClick={(e) => updatedHandler(item.id)}>
                    {!item.completed ? (
                      <Button name="MdCreate" color="#1e1e2c" />
                    ) : undefined}
                  </li>
                  <li onClick={(e) => removeHandler(item.id)}>
                    {!item.completed ? (
                      <Button name="MdDelete" color="red" />
                    ) : undefined}
                  </li>
                  <li onClick={(e) => completedHandler(item.id)}>
                    {!item.completed ? (
                      <Button name="MdCheckBoxOutlineBlank" color="#1e1e2c" />
                    ) : (
                      <Button name="MdDone" color="#33e1ed" />
                    )}
                  </li>
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
