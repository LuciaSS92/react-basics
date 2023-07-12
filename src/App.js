import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ToDoApp from './components/ToDoList/ToDoApp';
import KeeperApp from "./components/Keeper/KeeperApp";
import EmojiApp from './components/Emojipedia/EmojiApp';
import CounterApp from './components/Counter/CounterApp';
import TimeApp from './components/Counter/TimeApp/TimeApp';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/todo" element={<ToDoApp />} />
          <Route exact path="/keeper" element={<KeeperApp />} />
          <Route exact path="/emojipedia" element={<EmojiApp />} />
          <Route exact path="/counter" element={<CounterApp />} />
          <Route exact path="/time" element={<TimeApp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
