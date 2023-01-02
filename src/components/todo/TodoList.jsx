import React from "react";
import { Button } from "../index";
import "./styleList.css";
import { useDispatch } from "react-redux";
import { completedTodo, removeTodo } from "../../features/todosSlice";
function TodoList(props) {
  const dispatch = useDispatch();

  const completedHandler = (id) => {
    dispatch(completedTodo(id));
  };

  const removeHandler = (id) => {
    dispatch(removeTodo(id));
  };
  return (
    <div>
      <h4>{props.name}</h4>
      <div>
        <ul>
          {props.list?.map((item, index) => (
            <li key={index} className="todo___card">
              <div>
                <h5>{item?.title}</h5>
                <p>{item?.descr}</p>
              </div>
              <ul className="todo___card--icon">
                <li>
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
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
