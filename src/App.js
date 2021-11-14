import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Charges from "./pages/Charges";
import Complaints from "./pages/Complaints";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/charges" element={<Charges />} />
          <Route path="/complaints" element={<Complaints />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
