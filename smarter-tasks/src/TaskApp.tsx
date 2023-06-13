import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { TaskItem } from "./types";
import { useLocalStorage } from "./hooks/useLocalStorage";

interface TaskAppProp {}
interface TaskAppState {
  tasks: TaskItem[];
}
const TaskApp = (props: TaskAppProp) => {
  const [taskAppState, setTaskAppState] = useLocalStorage<TaskAppState>(
    "tasks",
    {
      tasks: [],
    }
  );
  const addTask = (task: TaskItem) => {
    setTaskAppState({ tasks: [...taskAppState.tasks, task] });
  };
  const deleteTask = (key: number | undefined) => {
    const filteredTasks = taskAppState.tasks.filter((task, idx) => idx !== key);
    setTaskAppState({ tasks: filteredTasks });
  };
  return (
    <div className="container py-10  mx-auto text-center">
      <h1 className="text-3xl mb-2 font-bold text-slate-700">Smarter Tasks</h1>
      <h1 className="text-md mb-6 text-slate-600">
        <span className="font-bold">Project: </span>
        Graduation Final Year Project (Revamp college website)
      </h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="border border-slate-200 rounded-xl p-4">
          <h1 className="text-slate-500 font-bold text-center mb-2">Pending</h1>
          <div>
            <TaskForm addTask={addTask} />
            <TaskList tasks={taskAppState.tasks} deleteTask={deleteTask} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskApp;
