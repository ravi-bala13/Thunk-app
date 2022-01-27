import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Navbar />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Registration />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </div>
  );
}

export default App;
