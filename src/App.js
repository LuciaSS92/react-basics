import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import KeeperView from './views/KeeperView';
import ToDoView from './views/ToDoView';
import EmojiView from './views/EmojiView';
import HookView from './views/HookView';
import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';

function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route exact path='/' element={<HomeView/>}/>
          <Route exact path="/todo" element={<ToDoView />} />
          <Route exact path="/keeper" element={<KeeperView />} />
          <Route exact path="/emojipedia" element={<EmojiView />} />
          <Route exact path="/hook" element={<HookView />} />   
          <Route exact path="/login" element={<LoginView />} />     
          <Route exact path="/register" element={<RegisterView />} />     
        </Routes>
      </Router>
    </>
  );
}

export default App;
