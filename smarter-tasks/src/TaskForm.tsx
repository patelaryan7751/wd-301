import React from "react";
import { TaskItem } from "./types";
interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}
interface TaskFormState {
  title: string;
  dueDate: string;
  description?: string;
}
class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  constructor(props: TaskFormProps) {
    super(props);
    this.state = {
      title: "",
      dueDate: "",
      description: "",
    };
  }
  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const newTask = {
      title: this.state.title.trim(),
      dueDate: this.state.dueDate.trim(),
      description: this.state.description?.trim(),
    };
    this.props.addTask(newTask);
    this.setState({ title: "", dueDate: "", description: "" });
  };
  fieldChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    switch (event.target.id) {
      case "todoTitle":
        this.setState({ title: event.target.value });
        break;
      case "todoDueDate":
        this.setState({ dueDate: event.target.value });
        break;
      case "todoDescription":
        this.setState({ description: event.target.value });
    }
  };
  render() {
    return (
      <form className="" onSubmit={this.addTask}>
        <label
          htmlFor="todoTitle"
          className="block text-sm font-medium text-gray-700 m-2"
        >
          Task Title:
        </label>
        <input
          id="todoTitle"
          type="text"
          value={this.state.title.trim()}
          onChange={this.fieldChanged}
          className="border rounded border-gray-900 p-2 w-full"
          required
        />
        <label
          htmlFor="todoDueDate"
          className="block text-sm font-medium text-gray-700 m-2"
        >
          Task Due Date:
        </label>
        <input
          id="todoDueDate"
          type="date"
          value={this.state.dueDate.trim()}
          onChange={this.fieldChanged}
          className="border rounded border-gray-900 p-2 w-full"
          required
        />
        <label
          htmlFor="todoDescription"
          className="block text-sm font-medium text-gray-700 m-2"
        >
          Task Description:
        </label>
        <input
          id="todoDescription"
          type="text"
          value={this.state.description}
          onChange={this.fieldChanged}
          className="border rounded border-gray-900 p-2 w-full"
        />
        <button
          className="bg-green-500 p-2 m-2 rounded text-slate-800"
          type="submit"
          id="addTaskButton"
        >
          Add item
        </button>
      </form>
    );
  }
}
export default TaskForm;
