import TaskCard from "./TaskCard";
function App() {
  return (
    <div className="mx-4 px-24">
      <div className="my-4">
        <h1 className="text-3xl my-2 font-extrabold">Smarter Tasks</h1>
        <p className="text-gray-600 font-semibold text-xl">
          <b>Project:</b> Graduation Final Year Project (Revamp College Website)
        </p>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="border-2 border-gray-400 rounded-lg p-2">
          <h1 className="text-center text-2xl text-gray-600 font-bold">
            Pending
          </h1>
          <TaskCard
            title="Build the website with static content"
            dueDate="10th April"
            assigneeName="Rohit S"
          />
          <TaskCard
            title="Add a blog"
            dueDate="22nd March"
            assigneeName="Rohit M"
          />
          <div className="m-3">
            <button className="border-4 border-slate-100 bg-gray-300 p-1 w-full text-left font-semibold text-xl">
              + New task
            </button>
          </div>
        </div>
        <div className="border-2 border-gray-400 rounded-lg p-2">
          <h1 className="text-center text-2xl text-gray-600 font-bold">Done</h1>
          <TaskCard
            title="Deign the mockup"
            completedAtDate="10th April"
            assigneeName="Rohit M"
          />
          <TaskCard
            title="Get approval from principal"
            completedAtDate="20th April"
            assigneeName="Ajay S"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
