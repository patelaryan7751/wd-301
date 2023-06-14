import React from "react";
import { useParams } from "react-router-dom";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { TaskItem } from "./types";
import NotFound from "./NotFound";

interface TaskDetailsPageParams extends Record<string, string> {
  id: string;
}

interface TaskAppState {
  tasks: TaskItem[];
}

const TaskDetailsPage: React.FC = () => {
  const { id } = useParams<TaskDetailsPageParams>();
  const [taskAppState] = useLocalStorage<TaskAppState>("tasks", {
    tasks: [],
  });
  console.log(taskAppState);
  const task = taskAppState.tasks.find((task, index) => String(index) === id);

  return (
    <div>
      {task?.title === undefined ? (
        <>
          <NotFound />
        </>
      ) : (
        <>
          <div className="bg-white shadow-md rounded-md p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">{task?.title}</h3>
            </div>
            <p className="text-gray-600">{task?.description}</p>
            <p className="text-gray-600">{task?.dueDate}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default TaskDetailsPage;
