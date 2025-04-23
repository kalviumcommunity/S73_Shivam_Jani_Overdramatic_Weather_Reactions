// App.jsx
import React from "react";
import TaskCard from "../components/TaskCard";

function App() {
  const dummyTask = {
    title: "Design Homepage",
    description: "Create a responsive layout for homepage using Tailwind CSS.",
    dueDate: "2025-04-25",
    status: "Pending",
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-10">
      <TaskCard
        title={dummyTask.title}
        description={dummyTask.description}
        dueDate={dummyTask.dueDate}
        status={dummyTask.status}
      />
    </div>
  );
}

export default App;
