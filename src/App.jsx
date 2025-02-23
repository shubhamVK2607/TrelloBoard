import Board from "./components/Board";

import "./App.css";

const App = () => {


  return (
    <div className="app-container">
      <h1 className="text-center text-2xl font-bold mb-2">Trello Board</h1>
   
      <Board />

    </div>
  );
};

export default App;
