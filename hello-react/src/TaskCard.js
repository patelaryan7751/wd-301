import "./TaskCard.css";

const TaskCard = (props) => {
  console.log(props);
  return (
    <div className="border-4 border-gray-400 p-3 m-3">
      <h2 className="text-xl font-bold mb-2">{props.title}</h2>
      {props.completed ? (
        <p className="text-gray-600 font-semibold">
          Completed on: {props?.completedAtDate}
        </p>
      ) : (
        <p className="text-gray-600  font-semibold">Due on: {props?.dueDate}</p>
      )}

      <p className="text-gray-600  font-semibold">
        Assignee: {props.assigneeName}
      </p>
    </div>
  );
};

export default TaskCard;
