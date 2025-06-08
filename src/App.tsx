import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<Home />}/> 
        <Route path = "/Register" element = {<Register />}/> 
      </Routes>
    </Router>
  );
}

export default App;
