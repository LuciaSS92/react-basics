import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function ToDoApp() {
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <>  
      <div className="todoBody">
        <div className="todoContainer">
          <div className="todoHeading">
            <h1>To-Do List</h1>
          </div>
          <InputArea onAdd={addItem} />
          <div>
            <ul>
              {items.map((todoItem, index) => (
                <ToDoItem
                  key={index}
                  id={index}
                  text={todoItem}
                  onChecked={deleteItem}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
     
    </>
  );
}

export default ToDoApp;
