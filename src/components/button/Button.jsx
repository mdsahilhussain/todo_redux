import React from "react";
import "./button.css";
import {
  MdDone,
  MdCheckBoxOutlineBlank,
  MdCreate,
  MdDelete,
  MdAdd,
} from "react-icons/md";

function Button(props) {
  return (
    <div>
      <button className="btn" style={{ color: props.color }}>
        {props.name === "MdAdd" ? (
          <MdAdd />
        ) : props.name === "MdDone" ? (
          <MdDone />
        ) : props.name === "MdDelete" ? (
          <MdDelete />
        ) : props.name === "MdCreate" ? (
          <MdCreate />
        ) : props.name === "MdCheckBoxOutlineBlank" ? (
          <MdCheckBoxOutlineBlank />
        ) : undefined}
      </button>
    </div>
  );
}

export default Button;
