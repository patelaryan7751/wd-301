import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const user = localStorage.getItem("userData");
  const userData = JSON.parse(String(user));
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div>
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Dashboard
        </h1>
      </div>
      <div>
        <p>
          <span className="text-2xl m-2">Name: {userData?.name}</span>
        </p>
        <p>
          <span className="text-2xl m-2">Email: {userData?.email}</span>
        </p>
      </div>
      <div>
        <button
          id="logout-link"
          onClick={() => {
            localStorage.removeItem("userData");
            localStorage.removeItem("authToken");
            navigate("/signin");
          }}
          className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-gray mt-4"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
