import React from "react";
import "./TaskCard.css";
interface TaskProp {
  title: string;
  dueDate?: string;
  description?: string;
}

class Task extends React.Component<TaskProp> {
  render() {
    return (
      <div className="TaskItem p-3 my-3">
        <h2 className="text-xl font-bold mb-2">{this.props.title}</h2>
        <p className="text-gray-600  font-semibold">
          Due on: {this.props?.dueDate}
        </p>
        <p className="text-gray-600  font-semibold">
          Description: {this.props?.description}
        </p>
      </div>
    );
  }
}
export default Task;
