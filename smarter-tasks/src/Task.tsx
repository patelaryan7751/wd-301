import { Link } from "react-router-dom";
import "./TaskCard.css";
import { TaskItem } from "./types";

interface TaskItemProps extends TaskItem {
  deleteTask: (key: number | undefined) => void;
}

const Task = (props: TaskItemProps) => {
  return (
    <li className="TaskItem shadow-md border border-slate-100 list-none">
      <Link to={`/tasks/${props.taskId}`}>
        <h2 className="text-base font-bold my-1">{props.title}</h2>
      </Link>
      <p className="text-sm text-slate-500">{props.dueDate}</p>
      <p className="text-sm text-slate-500">Description: {props.description}</p>
      <button
        className="deleteTaskButton m-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => {
          props.deleteTask(props.taskId);
        }}
      >
        Delete
      </button>
    </li>
  );
};
export default Task;
