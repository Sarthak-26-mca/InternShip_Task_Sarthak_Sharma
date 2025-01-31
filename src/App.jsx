import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import HomePage from './Components/HomePage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App
