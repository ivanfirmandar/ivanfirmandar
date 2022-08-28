import Login from './pages/Login'
import QuizPage from './pages/QuizPage'
import ScorePage from './pages/ScorePage'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/quiz" element={<QuizPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/quiz/score" element={<ScorePage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
