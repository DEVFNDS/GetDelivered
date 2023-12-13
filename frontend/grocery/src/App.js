
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Admin from './components/Admin';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
