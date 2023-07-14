import React from "react";

function ToDoItem(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li className="todoLi">{props.text}</li>
    </div>
  );
}

export default ToDoItem;