// TaskCard.jsx
import React from "react";

const TaskCard = ({ title, description, dueDate, status }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg max-w-sm border border-gray-200">
      <h2 className="text-xl font-bold text-blue-600">{title}</h2>
      <p className="text-gray-700">{description}</p>
      <p className="text-sm text-gray-500 mt-2">Due: {dueDate}</p>
      <span
        className={`inline-block mt-3 px-3 py-1 text-sm font-semibold rounded-full ${
          status === "Pending"
            ? "bg-yellow-200 text-yellow-800"
            : "bg-green-200 text-green-800"
        }`}
      >
        {status}
      </span>
    </div>
  );
};

export default TaskCard;
