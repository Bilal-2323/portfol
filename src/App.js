import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
// import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aboutme from './components/Aboutme';

function App() {
  return (
    <div className="App bg ">
    <Router>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
