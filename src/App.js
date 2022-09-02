import Login from './pages/Login'
import QuizPage from './pages/QuizPage'
import ScorePage from './pages/ScorePage'
import Gift from './pages/Gift'
import LovePage from './pages/LovePage'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/quiz" element={<QuizPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/quiz/score" element={<ScorePage />}></Route>
        <Route path="/gift" element={<Gift />}></Route>
        <Route path="/gift/love" element={<LovePage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
