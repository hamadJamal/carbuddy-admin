import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Charges from "./pages/Charges";
import Complaints from "./pages/Complaints";
import Approve from "./pages/approve";
import Dialog from "./components/Dialog/Dialog";

function App() {
  // This is a comment to make sure that the changes are being pushed accordingly.
  //These are further changes to see if things are being committed or not.

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dialog" element={<Dialog />} />
          <Route path="/charges" element={<Charges />} />
          <Route path="/complaints" element={<Complaints />} />
          <Route path="/approve" element={<Approve />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
