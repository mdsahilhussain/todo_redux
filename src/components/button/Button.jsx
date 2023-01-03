import React, { Component } from 'react'
import "./button.css";
import {
  MdDone,
  MdCheckBoxOutlineBlank,
  MdCreate,
  MdDelete,
  MdAdd,
} from "react-icons/md";
export default class Button extends Component  {
  render() {
    return (
      <div>
      <button className="btn" style={{ color: this.props.color }}>
        {this.props.name === "MdAdd" ? (
          <MdAdd />
        ) : this.props.name === "MdDone" ? (
          <MdDone />
        ) : this.props.name === "MdDelete" ? (
          <MdDelete />
        ) : this.props.name === "MdCreate" ? (
          <MdCreate />
        ) : this.props.name === "MdCheckBoxOutlineBlank" ? (
          <MdCheckBoxOutlineBlank />
        ) : (
          this.props.name
        )}
      </button>
    </div>
    )
  }
}