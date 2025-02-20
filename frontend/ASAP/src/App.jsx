import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col items-center justify-center text-white p-6">
      <h1 className="text-5xl font-extrabold mb-4">
        ASAP Project On Over Dramatic Weather Rxns
      </h1>
      <p className="text-lg max-w-2xl text-center mb-6">
        This project delivers exaggerated and humorous weather reactions based
        on real-time conditions. Users receive dramatic responses tailored to
        their location's weather, making forecasts fun and engaging. It also
        includes features like a voting system and a leaderboard for the most
        over-the-top reactions. 🌩️🔥
      </p>
      <button className="bg-white text-blue-600 font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-gray-200 transition">
        Join Now
      </button>
    </div>
  );
}

export default App;
