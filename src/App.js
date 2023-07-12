import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ToDoApp from './components/ToDoList/ToDoApp';
import KeeperApp from "./components/Keeper/KeeperApp";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/todo" element={<ToDoApp />} />
          <Route exact path="/keeper" element={<KeeperApp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
