import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-6">
        Oops! The page you are looking for does not exist.
      </p>
      <button
        id="backToHomeButton"
        onClick={handleBackToHome}
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Back to Home
      </button>
    </div>
  );
};

export default NotFound;
