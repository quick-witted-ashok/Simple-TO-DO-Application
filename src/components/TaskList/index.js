import { MdDeleteOutline } from "react-icons/md";

import "./index.css";

const TaskList = (props) => {
  const { todoDetails, onDeleteTodo } = props;

  const { id, todo, date } = todoDetails;
  const deleteTodo = () => {
    onDeleteTodo(id);
  };

  return (
    <li className=" todo-item-container">
      <input className="checkbox-input" type="checkbox" />
      <div className="container  checkbox-label label-container">
        <div>
          <h1 className="todo-head">{todo}</h1>
          <p className="date">{date}</p>
        </div>
        <div className="buttons">
          <button type="button" className="but-1 ">
            Edit
          </button>
          <MdDeleteOutline size={50} className="delete" onClick={deleteTodo} />
        </div>
      </div>
    </li>
  );
};

export default TaskList;
