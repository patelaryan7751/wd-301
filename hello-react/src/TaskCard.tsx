import React from "react";
import "./TaskCard.css";

interface TaskCardProps {
  title: string;
  dueDate?: string;
  completedAtDate?: string;
  assigneeName: string;
}

const TaskCard = (props: TaskCardProps) => {
  return (
    <div className="border-4 border-gray-400 p-3 m-3">
      <h2 className="text-xl font-bold mb-2">{props.title}</h2>

      {props.dueDate ? (
        <p className="text-gray-600  font-semibold">Due on: {props?.dueDate}</p>
      ) : props.completedAtDate ? (
        <p className="text-gray-600 font-semibold">
          Completed on: {props?.completedAtDate}
        </p>
      ) : null}

      <p className="text-gray-600  font-semibold">
        Assignee: {props.assigneeName}
      </p>
    </div>
  );
};

export default TaskCard;
