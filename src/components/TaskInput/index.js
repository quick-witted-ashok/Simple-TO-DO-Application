import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import TaskList from "../TaskList";

import "./index.css";

const TaskInput = () => {
  const [date, setDate] = useState("");
  const [todo, setTodo] = useState("");

  const storedList = JSON.parse(localStorage.getItem("TodoList"));
  const [TodoList, setTodoList] = useState(
    storedList !== null ? storedList : []
  );

  const onSetDate = (event) => {
    setDate(event.target.value);
  };

  const onClickAddTodo = () => {
    if (date !== "" && todo !== "") {
      const newTodo = {
        id: uuidv4(),
        todo,
        date,
        checked: false,
      };
      setTodoList((prevTodoList) => [...prevTodoList, newTodo]);
      setTodo("");
      setDate("");
    } else {
      alert("ENTER VALID TODO NAME AND DATE");
    }
  };

  const deleteTodoInList = (id) => {
    setTodoList((l) => l.filter((item) => item.id !== id));
  };

  const onChangeInput = (event) => {
    setTodo(event.target.value);
  };

  const saveTheTodo = () => {
    localStorage.setItem("TodoList", JSON.stringify(TodoList));
  };

  return (
    <html>
      <head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
          crossorigin="anonymous"
        />
        <script
          src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
          integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
          integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
          integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://kit.fontawesome.com/ac42c3b1f7.js"
          crossorigin="anonymous"
        ></script>
      </head>
      <body>
        <div className="todos-bg-container">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1 className="todos-heading">React To-Do Application</h1>
                <h1 className="create-task-heading">
                  Create <span class="create-task-heading-subpart">Task</span>
                </h1>
                <input
                  type="text"
                  onChange={onChangeInput}
                  className="todo-user-input"
                  placeholder="What needs to be done?"
                  value={todo}
                />

                <div className="App">
                  <p>Date: </p>

                  <input type="date" value={date} onChange={onSetDate} />
                </div>
                <button className="button" onClick={onClickAddTodo}>
                  Add
                </button>

                <hr />

                <h1 className="todo-items-heading">
                  My <span class="todo-items-heading-subpart">Tasks</span>
                </h1>
                <ul className="todo-items-container">
                  {TodoList.map((eachTodo) => (
                    <TaskList
                      key={eachTodo.id}
                      todoDetails={eachTodo}
                      onDeleteTodo={deleteTodoInList}
                    />
                  ))}
                </ul>
                <button className="button" onClick={saveTheTodo}>
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
};

export default TaskInput;
