import React from "react";
import ToDoListItem from "./ToDoListItem";

const ToDoList = () => {
  const items = ["Learn React", "Build Awesome App"];
  return (
    <ul>
      <li>
        <ToDoListItem />
      </li>
      <li>
        <ToDoListItem />
      </li>
    </ul>
  );
};

export default ToDoList;
