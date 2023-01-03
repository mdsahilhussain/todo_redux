import React, { useRef } from "react";
import { Button } from "../../components";
import "./input.css";
import { useDispatch } from "react-redux";
import { addTodo } from "../../features/todosSlice";

function Input() {
  const inputRef = useRef();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputRef.current.value.trim()) {
      var date = new Date();
      var current_time = date.getHours() + ":" + date.getMinutes();
      dispatch(
        addTodo({
          id: Math.random() * 1000,
          descr: inputRef.current.value,
          time: current_time,
          completed: false,
        })
      );
    }
    inputRef.current.value = "";
  };

  return (
    <div className="input___container">
      <input
        type="text"
        ref={inputRef}
        placeholder="Create your todo"
        required
      />
      <div onClick={handleSubmit}>
        <Button name="MdAdd" color="#1e1e2c" />
      </div>
    </div>
  );
}

export default Input;
