import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import RoutesIndex from "./components/core/RoutesIndex"
import NavBar from './components/core/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/*" element={<RoutesIndex />} />
      </Routes>
    </div>
  );
}

export default App;
